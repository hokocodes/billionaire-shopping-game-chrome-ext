let item = 'item';

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'con') {
        console.log('pushed');
        console.log(message.text);
        item = message.text;
    } else if (message.type === 'pop') {
    
        sendResponse(item);
        console.log('sent response ' + message.text);
        
        
    } 
});
/*
chrome.runtime.onInstalled.addListener(async () => {
    for (const cs of chrome.runtime.getManifest().content_scripts) {
      for (const tab of await chrome.tabs.query({url: cs.matches})) {
        chrome.scripting.executeScript({
          target: {tabId: tab.id},
          files: cs.js,
        });
      }
    }
  });
  */