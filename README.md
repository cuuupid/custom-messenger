# Custom Messenger

A fully featured Facebook Messenger desktop app, beautifully and minimally made with Electron.

<p align="center">
    <img src="./img/img1.gif" width="50%" alt="Cate Desktop Preview">
</p>


<p align="center">
    <img src="./img/screencap.gif" width="50%" alt="Fapkin Preview">
</p>


# I want to Use

Executables coming soon. If you're electron-friendly, please feel free to build and upload executables to this repo!

## Bindings/Shortcuts

All keybindings start with <kbd>Ctrl</kbd>.

<kbd>Ctrl</kbd> <kbd>Q</kbd> will **close the window, but not the app.**

Right-clicking the tray icon **closes the app**.

Clicking the tray icon **launches the app**.

<kbd>Ctrl</kbd> <kbd>Backspace</kbd> goes back one page in history, aka to **previous conversation**.

<kbd>Ctrl</kbd> <kbd>M</kbd> **minimizes** the window.

<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>F</kbd> sets the app to fullscreen.

<kbd>Ctrl</kbd> <kbd>Y</kbd> **centers** the app.

<kbd>Ctrl</kbd> <kbd>Tab</kbd> **toggles the conversation list**.

<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> toggles Developer Tools.

# I want to Develop

## Requirements

- Electron (`npm install electron --save-dev --save-exact --global`, global so we can use the `electron` CLI)
- Electron Local Shortcut and some other plugins (`npm i` in this repo will do it)

## Electron Install not working?

Try `npm i` and then install electron

## I have Electron, Quick Start?

`electron .`

## Quick Theming

Change the constant colors at the top of `main.js` for quick theming.

## How do I package this?

You need electron-packager. To install look at `https://github.com/electron-userland/electron-packager` 

`electron-packager . <name>`

We've been using Fapkin as the name to keep things organized.

Go to the folder named Fapkin and paste here the messenger.ico, then run FapkinChat.exe
