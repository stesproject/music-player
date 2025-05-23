const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  selectFolder: () => ipcRenderer.invoke("select-folder"),
  scanAudioFiles: (folderPath) =>
    ipcRenderer.invoke("scan-audio-files", folderPath),
  onScanProgress: (callback) => ipcRenderer.on("scan-progress", callback),
  openFolder: (filePath) => ipcRenderer.send("open-folder", filePath),
});
