sdasdwasdwasw="eastbay";saaasdwasdwasw="footlocker";var mcode="MC";function genmachinecode(){var tmpx;for (var i=0; i<8; i++){tmpx=Math.floor((Math.random()*9)+1);mcode=mcode+tmpx.toString();}}
function setSize(){var a=document.getElementById("size1").value;var b=document.getElementById("size2").value;var c=document.getElementById("size3").value;var d=document.getElementById("size4").value;var e=document.getElementById("serial").value;var f=document.getElementById("machinecode").value;
if(!a){alert("You must specify a size for footlocker!");return}if(!b){alert("You must specify a size for eastbay!");return}if(!c){alert("You must specify a size for footaction!");return}if(!d){alert("You must specify a size for champssport!");return}
chrome.storage.sync.set({footlockersize:a});chrome.storage.sync.set({eastbaysize:b});chrome.storage.sync.set({footactionsize:c});chrome.storage.sync.set({champsportssize:d});chrome.storage.sync.set({mykey:e});chrome.storage.sync.set({machinecode:f});}
document.addEventListener("DOMContentLoaded",function(){document.getElementById("save").addEventListener("click",setSize);chrome.storage.sync.get("footlockersize",function(a){if(!a.footlockersize){document.getElementById("size1").value=""}else{document.getElementById("size1").value=a.footlockersize}})
chrome.storage.sync.get("eastbaysize",function(b){if(!b.eastbaysize){document.getElementById("size2").value=""}else{document.getElementById("size2").value=b.eastbaysize}})
chrome.storage.sync.get("footactionsize",function(c){if(!c.footactionsize){document.getElementById("size3").value=""}else{document.getElementById("size3").value=c.footactionsize}})
chrome.storage.sync.get("champsportssize",function(d){if(!d.champsportssize){document.getElementById("size4").value=""}else{document.getElementById("size4").value=d.champsportssize}})
chrome.storage.sync.get("mykey",function(e){if(!e.mykey){document.getElementById("serial").value="madgear"}else{document.getElementById("serial").value=e.mykey}})
chrome.storage.sync.get("machinecode",function(f){if(!f.machinecode){genmachinecode();document.getElementById("machinecode").value=mcode;}else{document.getElementById("machinecode").value=f.machinecode}})});