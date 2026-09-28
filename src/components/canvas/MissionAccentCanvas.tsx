import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../../context/ThemeContext'

/**
 * Calm, contemplative 3D backdrop for the Mission statement — a drifting
 * dust of soft particles. Deliberately quiet (no pointer-chasing energy,
 * no connecting lines) so it reads as ambience rather than a distraction
 * from the text sitting on top of it.
 */
const MissionAccentCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.z = 22

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    } catch {
      // No WebGL — leave the empty backdrop div.
      return
    }
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    mount.appendChild(renderer.domElement)

    const sceneGroup = new THREE.Group()
    scene.add(sceneGroup)

    const dustAlpha = isDark ? 0.6 : 0.4

    // ---- Drifting dust field ----------------------------------------------
    const dustCount = 70
    const dustGeometry = new THREE.BufferGeometry()
    const dustPositions = new Float32Array(dustCount * 3)
    const dustVelocities = new Float32Array(dustCount * 3)
    const spanX = 40
    const spanY = 22
    const spanZ = 14

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * spanX
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * spanY
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * spanZ - 6
      dustVelocities[i * 3] = (Math.random() - 0.5) * 0.006
      dustVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.006
      dustVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))

    const dotCanvas = document.createElement('canvas')
    dotCanvas.width = 32
    dotCanvas.height = 32
    const dctx = dotCanvas.getContext('2d')
    if (dctx) {
      const g = dctx.createRadialGradient(16, 16, 0, 16, 16, 16)
      g.addColorStop(0, isDark ? 'rgba(255,255,255,0.9)' : 'rgba(4,120,87,0.55)')
      g.addColorStop(1, 'rgba(4,120,87,0)')
      dctx.fillStyle = g
      dctx.fillRect(0, 0, 32, 32)
    }
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.9,
      map: new THREE.CanvasTexture(dotCanvas),
      transparent: true,
      opacity: dustAlpha,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    const dust = new THREE.Points(dustGeometry, dustMaterial)
    sceneGroup.add(dust)

    // ---- Gentle pointer parallax (subtle — this section is contemplative) --
    // The mount rect is cached and re-read only on scroll/resize — calling
    // getBoundingClientRect() inside the high-frequency pointermove handler
    // forces a layout read on every mouse move.
    const pointer = { x: 0, y: 0 }
    const targetRot = { x: 0, y: 0 }
    let mountRect = mount.getBoundingClientRect()
    const refreshRect = () => {
      mountRect = mount.getBoundingClientRect()
    }
    const handlePointerMove = (e: PointerEvent) => {
      pointer.x = ((e.clientX - mountRect.left) / mountRect.width) * 2 - 1
      pointer.y = ((e.clientY - mountRect.top) / mountRect.height) * 2 - 1
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', refreshRect, { passive: true })
    window.addEventListener('resize', refreshRect)

    // Render only while on-screen in a visible tab — this section sits far
    // below the fold, and an always-on WebGL loop taxes every scroll frame.
    let inView = false
    let pageVisible = document.visibilityState === 'visible'
    let contextLost = false
    let running = false
    let rafId = 0

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      if (contextLost) return

      const posAttr = dustGeometry.attributes.position as THREE.BufferAttribute
      const arr = posAttr.array as Float32Array
      for (let i = 0; i < dustCount; i++) {
        const i3 = i * 3
        arr[i3] += dustVelocities[i3]
        arr[i3 + 1] += dustVelocities[i3 + 1]
        arr[i3 + 2] += dustVelocities[i3 + 2]
        if (Math.abs(arr[i3]) > spanX / 2) dustVelocities[i3] *= -1
        if (Math.abs(arr[i3 + 1]) > spanY / 2) dustVelocities[i3 + 1] *= -1
        if (Math.abs(arr[i3 + 2] + 6) > spanZ / 2) dustVelocities[i3 + 2] *= -1
      }
      posAttr.needsUpdate = true
      dust.rotation.y += 0.0004

      targetRot.y = pointer.x * 0.08
      targetRot.x = -pointer.y * 0.05
      sceneGroup.rotation.y += (targetRot.y - sceneGroup.rotation.y) * 0.03
      sceneGroup.rotation.x += (targetRot.x - sceneGroup.rotation.x) * 0.03

      renderer.render(scene, camera)
    }

    const start = () => {
      if (running || contextLost) return
      running = true
      rafId = requestAnimationFrame(animate)
    }
    const stop = () => {
      if (!running) return
      running = false
      cancelAnimationFrame(rafId)
    }
    const updateRunning = () => {
      if (inView && pageVisible && !contextLost) start()
      else stop()
    }

    const handleContextLost = (event: Event) => {
      event.preventDefault()
      contextLost = true
      stop()
    }
    const handleContextRestored = () => {
      contextLost = false
      updateRunning()
    }
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost)
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored)

    const handleVisibility = () => {
      pageVisible = document.visibilityState === 'visible'
      updateRunning()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false
        updateRunning()
      },
      { rootMargin: '80px' }
    )
    intersectionObserver.observe(mount)

    const resizeObserver = new ResizeObserver(() => {
      if (!mount) return
      refreshRect()
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    })
    resizeObserver.observe(mount)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', refreshRect)
      window.removeEventListener('resize', refreshRect)
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost)
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored)
      intersectionObserver.disconnect()
      resizeObserver.disconnect()
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
      dustGeometry.dispose()
      dustMaterial.map?.dispose()
      dustMaterial.dispose()
      renderer.dispose()
    }
  }, [isDark])

  return <div ref={mountRef} className={`pointer-events-none ${className}`} aria-hidden="true" />
}

export default MissionAccentCanvas
