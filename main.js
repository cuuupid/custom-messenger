const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const shortcut = require('electron-localshortcut');

const fgColor = "#f8f8f8"
const myMsgColor = "#288"
const bgColor = "#284472" // #284472 is also pretty cool, as are #248 and #288

var hideTab = false

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 600, height: 675, icon: __dirname + '/messenger.ico',        
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
    shortcut.register(win, 'Ctrl+Tab', () => {
        if(hideTab) {
            hideTab = false
            win.webContents.insertCSS(`._1enh { display: none; }`)
        }
        else {
            hideTab = true
            win.webContents.insertCSS(`._1enh { display: unset; }`)
        }
    })
    win.loadURL('https://messenger.com/login/')
    win.webContents.on('dom-ready', (e, d) => {
        win.webContents.insertCSS(`body { overflow: hidden !important; }` +
        `._1enh { display: none; background-color: ${bgColor} }` + 
        `._1q5- { background-color: ${bgColor} }` +
        `._nd_ ._hh7 { background-color: ${myMsgColor} !important; color: ${fgColor}; }` +
        `h2, ._2v6o, time, ._ih3, ._1tqi, ._1ht6, ._5rpb, ._1htf, ._1ht7 { color: ${fgColor} !important; }` +
        `._30yy { border-radius: 100px; background-color: ${fgColor} !important; opacity: 1 !important; }` +
        `._4rv9 { background: none !important; }` + 
        `._4ld- { border: solid; border-color: ${fgColor}; border-width: 2px; border-radius: 1000px; }`)
    })
})