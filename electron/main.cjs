const { app, BrowserWindow, ipcMain, protocol, shell, net } = require('electron')
const path = require('path')
const fs = require('fs')
const { pathToFileURL } = require('url')

const DIST = path.join(__dirname, '..', 'dist')

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      corsEnabled: true,
      stream: true
    }
  }
])

function isAllowedExternal(url) {
  try {
    const parsed = new URL(url)
    return ['https:', 'http:', 'mailto:', 'tel:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 840,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  })

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (isAllowedExternal(url)) {
      shell.openExternal(url)
    }
    return { action: 'deny' }
  })

  win.loadURL('app://localhost/')
}

app.whenReady().then(() => {
  protocol.handle('app', (request) => {
    const url = new URL(request.url)
    let relative = decodeURIComponent(url.pathname || '/')
    if (relative === '/' || relative === '') {
      relative = '/index.html'
    }

    let filePath = path.normalize(path.join(DIST, relative))
    if (!filePath.startsWith(DIST)) {
      return new Response('Forbidden', { status: 403 })
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      // SPA fallback for BrowserRouter paths (no file extension).
      if (!path.extname(relative)) {
        filePath = path.join(DIST, 'index.html')
      } else {
        return new Response('Not Found', { status: 404 })
      }
    }

    return net.fetch(pathToFileURL(filePath).href)
  })

  ipcMain.handle('open-external', (_event, url) => {
    if (typeof url !== 'string' || !isAllowedExternal(url)) return false
    shell.openExternal(url)
    return true
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
