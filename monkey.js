// Monkey selfie
//var link = 'https://scontent-sea1-1.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/11931065_1069981466345927_314332476_n.jpg';
var link = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg';
// Get images
var img = document.getElementsByTagName('img');

// Ch-ch-ch-changes
Array.prototype.forEach.call(img, function(ele) {ele.src = link});