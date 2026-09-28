const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('hifDesktop', {
  openExternal: (url) => {
    if (typeof url !== 'string') return
    ipcRenderer.invoke('open-external', url)
  }
})
