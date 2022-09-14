const btn = document.getElementById('btn');
const messageQueue = [];
let balanceN = 999999999;


btn.addEventListener('click', () => {


    chrome.runtime.sendMessage({
        type: "pop"
    }, function (response) {
        console.log(response);
        if ((response.includes('$') && response.includes('.')) || response.includes('$')) {
        document.getElementById('ext').textContent = response;
        messageQueue.push(response);
        var res = response.replace("$", ",", ".", " ", "");
        balanceN = balanceN - res;
        console.log(balanceN);
        let balance = '$' + balanceN.toString();
        console.log(balance);
        document.getElementsByTagName('h1').innerHTML = balance;


      console.log('pushed to messageQueue: ' + messageQueue);
        } else {
          console.log('cannot add or buy item without selecting price');
        }
    });

});

const invBtnn = document.getElementById('invBtn');
invBtnn.addEventListener('click', () => {
  chrome.storage.sync.set({
    key: messageQueue 
}, function () {
  
    console.log('synced');
});

document.getElementById('inv').textContent = messageQueue;
  

/*
    chrome.runtime.sendMessage({
        type: "invMsg"
    }, function (response) {
        console.log('opened inv' + response);
        document.getElementById('inv').textContent = response;
    });
*/
});

/*

 */
