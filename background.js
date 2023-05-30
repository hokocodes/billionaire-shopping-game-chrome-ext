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


