const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const shortcut = require('electron-localshortcut');

const fgColor = "#f8f8f8"
const myMsgColor = "#19d8c1"
const bgColor = "#244" // #284472 is also pretty cool, as are #248 and #288

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 600, height: 650, icon: __dirname + '/messenger.ico',        
        webPreferences: {
            plugins: true,
            nodeIntegration: false
        },
        frame: false,
    })
    let s = electron.screen.getPrimaryDisplay().workAreaSize
    let _s = win.getSize()
    win.on('closed', () => { win = null })
    shortcut.register(win, 'Ctrl+Backspace',
     () => { if(win.webContents.canGoBack()) win.webContents.goBack() });
    shortcut.register(win, 'Ctrl+Q', () => { app.quit() });
    shortcut.register(win, 'Ctrl+M', () => { win.minimize() })
    shortcut.register(win, 'Ctrl+Shift+F', 
    () => { win.setFullScreen(!win.isFullScreen()); win.center() })
    shortcut.register(win, 'Ctrl+Y', () => { win.center() })
    shortcut.register(win, 'Ctrl+Shift+I', () => { win.webContents.toggleDevTools() })
    win.loadURL('https://messenger.com/login/')
    win.webContents.on('dom-ready', (e, d) => {
        win.webContents.insertCSS(`._1enh { display: none } ._1q5- { background-color: ${bgColor} }._hh7 ._nd_ { background-color: ${myMsgColor} !important; color: ${fgColor}; font-weight: 600; } h2 { color: ${fgColor} !important; } ._2v6o { color: ${fgColor} !important; } ._30yy { border-radius: 100px; background-color: ${fgColor} !important; opacity: 1 !important; } ._4rv9 { background: none !important; } ._5rpb { color: ${fgColor}; } ._4ld- { border: solid; border-color: ${fgColor}; border-width: 2px; border-radius: 1000px; } time { color: ${fgColor} }`)
    })
})