function bringTheMonkey() {
  chrome.tabs.executeScript({
    file: 'monkey.js'
  }); 
}

document.getElementById('spice').addEventListener('click', bringTheMonkey);