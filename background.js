let scriptInjected = false

browser.browserAction.onClicked.addListener(() => {
  if (!scriptInjected) {
    browser.tabs.executeScript({ file: 'content-script.js' })
    scriptInjected = true
  }
})
