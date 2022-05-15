browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({ file: 'content-script.js' })
})
