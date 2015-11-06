chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});

function monkey() {
  chrome.tabs.executeScript({
     file: 'callscript.js'
  });
}

document.getElementById('clickme').addEventListener('click', hello);