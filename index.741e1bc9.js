var t=document.querySelector(".spider"),e=document.querySelector(".wall");document.addEventListener("click",function(n){var i=e.getBoundingClientRect(),o=parseInt(window.getComputedStyle(e).borderWidth.split("px").join("")),c=t.offsetWidth,l=t.offsetHeight,a=n.clientX-i.left-o,d=n.clientY-i.top-o,r=Math.max(0,Math.min(a-c/2,i.width-c-2*o)),h=Math.max(0,Math.min(d-l/2,i.height-l-2*o));t.style.left="".concat(r,"px"),t.style.top="".concat(h,"px")});
//# sourceMappingURL=index.741e1bc9.js.map
