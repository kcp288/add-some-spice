var s = document.createElement('script');
s.src = chrome.extension.getURL('./script.js');
console.log("Script is:", s);
s.onload = function() {
   this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);