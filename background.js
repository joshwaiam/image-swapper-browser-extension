// Adds a clickable button to the extensions on the Firefox toolbar.
// However, a background script cannot manipulate the DOM, only content scripts.
// Therefore, this script is injected into the page when the button is clicked.
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({ file: 'content-script.js' })
})
