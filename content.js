console.log('yo');
window.addEventListener('mouseup', word);

function word() {
    console.log('word selected');
    let select = window.getSelection().toString();
    console.log(select);

    if (select.length > 0) {
        
        chrome.runtime.sendMessage({
            text: select,
            type: 'con'
        }

        );
    } else {
        console.log('cannot add or buy item without selecting price');
    }
}