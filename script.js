// Monkey selfie
var link = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg';
// Get images
var img = document.getElementsByTagName('img');

// Ch-ch-ch-changes
Array.prototype.forEach.call(img, function(ele) {ele.src = link});