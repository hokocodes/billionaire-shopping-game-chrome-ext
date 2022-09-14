const btn = document.getElementById('btn');
const messageQueue = [];
let balanceN = 9999999999;
let balanceNN;


btn.addEventListener('click', () => {


    chrome.runtime.sendMessage({
        type: "pop"
    }, function (response) {
        console.log(response);
        if ((response.includes('$') && response.includes('.')) || response.includes('$')) {
        document.getElementById('ext').textContent = response;
        messageQueue.push(response);
        var res = response.replace(/[$]/g, "").toString();
        console.log("res = " + Number.parseFloat(res));
        balanceNN = balanceN.toFixed(1) - Number.parseFloat(res).toFixed(1);
        console.log('balanceNN = ' + balanceNN);
        let balance = '$' + balanceNN.toString();
        console.log(balance);
        document.getElementById('balance').textContent = balance;


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
