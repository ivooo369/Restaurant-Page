(()=>{var e={978:(e,t,n)=>{e.exports=n.p+"images/banitsa.8717547262d7877980fc6800197c9371.jpg"},877:(e,t,n)=>{e.exports=n.p+"images/home-content-image.e344272f614f464e089b872626c2f8c5.jpg"},410:(e,t,n)=>{e.exports=n.p+"images/kiselo-mlyako.4218df505d8e35967c3508d0422205e0.jpg"},319:(e,t,n)=>{e.exports=n.p+"images/meshana-skara.3f86ae099861f9c71ef3827b24204d13.jpg"},187:(e,t,n)=>{e.exports=n.p+"images/moussaka.bef8b641c4d410b8f2ef018982e85b8c.jpg"},409:(e,t,n)=>{e.exports=n.p+"images/sarmi.c8ec86c44252693a0f6513aeb9a856f5.jpg"},263:(e,t,n)=>{e.exports=n.p+"images/shkembe.eb8d8faccea8521b6980764c7faf40eb.jpg"},519:(e,t,n)=>{e.exports=n.p+"images/shopska-salata.854b406f37104039b7d1bac878bcba73.jpg"},130:(e,t,n)=>{e.exports=n.p+"images/tab-icon.1bcaf7044ba9d6b66d3726671b7a90ba.png"},324:(e,t,n)=>{e.exports=n.p+"images/tarator.55528916ecd68abe2e7df8d817e5001d.jpg"}},t={};function n(a){var c=t[a];if(void 0!==c)return c.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var c=a.length-1;c>-1&&!e;)e=a[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";var e=n(130),t=n.n(e);var a=n(877),c=n.n(a);var o=n(319),r=n.n(o),i=n(324),s=n.n(i),d=n(409),l=n.n(d),p=n(519),m=n.n(p),u=n(263),h=n.n(u),g=n(187),f=n.n(g),b=n(978),y=n.n(b),C=n(410),v=n.n(C);const E=document.querySelector("head"),x=document.createElement("link");x.rel="icon",x.href=t(),E.appendChild(x),function(){const e=document.querySelector("#content"),t=document.createElement("header");e.appendChild(t);const n=document.createElement("h1");n.classList.add("title"),n.textContent="Taste of Bulgaria",t.appendChild(n);const a=document.createElement("nav");a.classList.add("navbar"),t.appendChild(a);const c=document.createElement("button");c.textContent="Home",c.setAttribute("id","btn-home"),c.classList.add("navbar-buttons"),a.appendChild(c);const o=document.createElement("button");o.textContent="Menu",o.setAttribute("id","btn-menu"),o.classList.add("navbar-buttons"),a.appendChild(o);const r=document.createElement("button");r.textContent="Contact",r.setAttribute("id","btn-contact"),r.classList.add("navbar-buttons"),a.appendChild(r);const i=document.createElement("footer");i.innerHTML='Copyright © 2023 ivooo369 <a href="https://github.com/ivooo369" class="github-link"><i class="fab fa-github fa-lg"></i></a>',e.appendChild(i)}(),function(){const e=document.querySelector("#content"),t=document.querySelector("footer"),n=document.createElement("div");n.classList.add("home-page-container"),e.insertBefore(n,t);const a=document.createElement("div");a.classList.add("home-page-content"),n.appendChild(a);const o=document.createElement("h2");o.textContent="Welcome to Taste of Bulgaria!",a.appendChild(o);const r=document.createElement("p");r.textContent="Enjoy the richness of Bulgarian cuisine in our restaurant. Indulge in succulent grilled meats, delectable appetizers and authentic dishes. Join us for an unforgettable culinary adventure that transports you to the heart of Bulgaria, where every bite brings our heritage to life. At Taste of Bulgaria, the flavors come alive, creating an extraordinary dining experience.",a.appendChild(r);const i=new Image;i.src=c(),a.appendChild(i)}(),function(){const e=document.querySelector("#content"),t=document.querySelector("footer"),n=document.createElement("div");n.classList.add("menu-page-container"),e.insertBefore(n,t);const a=document.createElement("div");a.classList.add("menu-page-content"),n.appendChild(a);const c=document.createElement("h2");c.textContent="Here are our top dishes:",a.appendChild(c);const o=document.createElement("div");o.classList.add("dishes-container"),a.appendChild(o);const i=[{name:"Meshana Skara",price:"Price: $5.99",image:r()},{name:"Tarator",price:"Price: $1.99",image:s()},{name:"Sarmi",price:"Price: $2.49",image:l()},{name:"Shopska Salata",price:"Price: $3.49",image:m()},{name:"Shkembe",price:"Price: $3.99",image:h()},{name:"Moussaka",price:"Price: $3.49",image:f()},{name:"Banitsa",price:"Price: $5.49",image:y()},{name:"Kiselo Mlyako",price:"Price: $1.49",image:v()}];for(const{name:e,price:t,image:n}of i){const a=document.createElement("div");a.classList.add("dish-container"),o.appendChild(a);const c=document.createElement("h3");c.textContent=e;const r=document.createElement("p");r.textContent=t;const i=document.createElement("div");i.classList.add("dish-image"),i.style.backgroundImage=`url(${n})`,a.appendChild(c),a.appendChild(r),a.appendChild(i)}}(),function(){const e=document.querySelector("#content"),t=document.querySelector("footer"),n=document.createElement("div");n.classList.add("contact-page-container"),e.insertBefore(n,t);const a=document.createElement("div");a.classList.add("contact-page-content"),n.appendChild(a);const c=document.createElement("h2");c.textContent="Feel free to contact us:",a.appendChild(c);const o=document.createElement("div");o.classList.add("main-contact-data-container"),a.appendChild(o);const r=document.createElement("p");r.classList.add("contact-data-container"),r.innerHTML='<i class="fas fa-envelope fa-lg"></i> <p>taste.of.bulgaria@gmail.com</p>',o.appendChild(r);const i=document.createElement("p");i.classList.add("contact-data-container"),i.innerHTML='<i class="fas fa-phone fa-rotate-90 fa-lg"></i> <p>088 843 7895</p>',o.appendChild(i);const s=document.createElement("p");s.classList.add("contact-data-container"),s.innerHTML='<i class="fas fa-map-marker-alt fa-lg"></i> <p>Borisova 24, Ruse, 7000, Bulgaria</p>',o.appendChild(s);const d=document.createElement("div");d.classList.add("working-time-container"),a.appendChild(d);const l=document.createElement("h3");l.textContent="Working Time:",d.appendChild(l);const p=[{days:"Monday-Friday",hours:"9:00 AM - 10:00 PM"},{days:"Saturday",hours:"10:00 AM - 9:00 PM"},{days:"Sunday",hours:"11:00 AM - 8:00 PM"}];for(const{days:e,hours:t}of p){const n=document.createElement("ul");n.classList.add("working-time"),n.innerHTML=`<p class='days'>${e}:</p> <p>${t}</p>`,d.appendChild(n)}}(),function(){const e=document.querySelector(".home-page-container"),t=document.querySelector(".menu-page-container"),n=document.querySelector(".contact-page-container"),a=document.querySelector("#btn-home"),c=document.querySelector("#btn-menu"),o=document.querySelector("#btn-contact");a.addEventListener("click",(()=>{e.style.display="flex",t.style.display="none",n.style.display="none"})),c.addEventListener("click",(()=>{t.style.display="flex",e.style.display="none",n.style.display="none"})),o.addEventListener("click",(()=>{n.style.display="flex",e.style.display="none",t.style.display="none"}))}()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FDakNaLEVBQXFCSCxNQUFNZ0IsUUFBVSxPQUNyQ3BDLEVBQWtCb0IsTUFBTWdCLFFBQVUsT0FDbEM1QixFQUFrQlksTUFBTWdCLFFBQVUsTUFBTSxHQUVoRCxDTFBBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9iYW5pdHNhLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL2hvbWUtY29udGVudC1pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9raXNlbG8tbWx5YWtvLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL21lc2hhbmEtc2thcmEuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvbW91c3Nha2EuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvc2FybWkuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvc2hrZW1iZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9zaG9wc2thLXNhbGF0YS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy90YWItaWNvbi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy90YXJhdG9yLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVuZGVySGVhZGVyRm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW5kZXJIb21lUGFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbmRlck1lbnVQYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVuZGVyQ29udGFjdFBhZ2VDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oYW5kbGVFdmVudExpc3RlbmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYmFuaXRzYS44NzE3NTQ3MjYyZDc4Nzc5ODBmYzY4MDAxOTdjOTM3MS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaG9tZS1jb250ZW50LWltYWdlLmUzNDQyNzJmNjE0ZjQ2NGUwODliODcyNjI2YzJmOGM1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9raXNlbG8tbWx5YWtvLjQyMThkZjUwNWQ4ZTM1OTY3YzM1MDhkMDQyMjIwNWUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZXNoYW5hLXNrYXJhLjNmODZhZTA5OTg2MWY5YzcxZWYzODI3YjI0MjA0ZDEzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tb3Vzc2FrYS5iZWY4YjY0MWM0ZDQxMGI4ZjJlZjAxODk4MmU4NWI4Yy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvc2FybWkuYzhlYzg2YzQ0MjUyNjkzYTBmNjUxM2FlYjlhODU2ZjUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Noa2VtYmUuZWI4ZDhmYWNjZWE4NTIxYjY5ODA3NjRjN2ZhZjQwZWIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Nob3Bza2Etc2FsYXRhLjg1NGI0MDZmMzcxMDQwMzliN2QxYmFjODc4YmNiYTczLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90YWItaWNvbi4xYmNhZjcwNDRiYTlkNmI2NmQzNzI2NjcxYjdhOTBiYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGFyYXRvci41NTUyODkxNmVjZDY4YWJlMmU3ZGY4ZDgxN2U1MDAxZC5qcGdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvdGFiLWljb24ucG5nJztcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyRm9vdGVyIH0gZnJvbSAnLi9yZW5kZXJIZWFkZXJGb290ZXInO1xyXG5pbXBvcnQgeyByZW5kZXJIb21lUGFnZUNvbnRlbnQgfSBmcm9tICcuL3JlbmRlckhvbWVQYWdlQ29udGVudCc7XHJcbmltcG9ydCB7IHJlbmRlck1lbnVQYWdlQ29udGVudCB9IGZyb20gJy4vcmVuZGVyTWVudVBhZ2VDb250ZW50JztcclxuaW1wb3J0IHsgcmVuZGVyQ29udGFjdFBhZ2VDb250ZW50IH0gZnJvbSAnLi9yZW5kZXJDb250YWN0UGFnZUNvbnRlbnQnO1xyXG5pbXBvcnQgeyBoYW5kbGVFdmVudExpc3RlbmVycyB9IGZyb20gJy4vaGFuZGxlRXZlbnRMaXN0ZW5lcnMnO1xyXG5cclxuY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcclxuY29uc3QgdGFiSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxudGFiSWNvbi5yZWwgPSAnaWNvbic7XHJcbnRhYkljb24uaHJlZiA9IEljb247XHJcbmhlYWQuYXBwZW5kQ2hpbGQodGFiSWNvbik7XHJcblxyXG5yZW5kZXJIZWFkZXJGb290ZXIoKTtcclxucmVuZGVySG9tZVBhZ2VDb250ZW50KCk7XHJcbnJlbmRlck1lbnVQYWdlQ29udGVudCgpO1xyXG5yZW5kZXJDb250YWN0UGFnZUNvbnRlbnQoKTtcclxuaGFuZGxlRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJIZWFkZXJGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGFzdGUgb2YgQnVsZ2FyaWEnO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bkhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgICBidG5Ib21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuLWhvbWUnKTtcclxuICAgIGJ0bkhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWJ1dHRvbnMnKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChidG5Ib21lKTtcclxuXHJcbiAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG5NZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgYnRuTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bi1tZW51Jyk7XHJcbiAgICBidG5NZW51LmNsYXNzTGlzdC5hZGQoJ25hdmJhci1idXR0b25zJyk7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuQ29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICAgIGJ0bkNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdidG4tY29udGFjdCcpO1xyXG4gICAgYnRuQ29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItYnV0dG9ucycpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGJ0bkNvbnRhY3QpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBpdm9vbzM2OSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2l2b29vMzY5XCIgY2xhc3M9XCJnaXRodWItbGlua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YiBmYS1sZ1wiPjwvaT48L2E+JztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFBpY3R1cmUgZnJvbSAnLi9pbWFnZXMvaG9tZS1jb250ZW50LWltYWdlLmpwZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2VDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcclxuXHJcbiAgICBjb25zdCBob21lUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZVBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGVudC5pbnNlcnRCZWZvcmUoaG9tZVBhZ2VDb250YWluZXIsIGZvb3Rlcik7XHJcblxyXG4gICAgY29uc3QgaG9tZVBhZ2VDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lUGFnZUNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlLWNvbnRlbnQnKTtcclxuICAgIGhvbWVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlQ29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgaG9tZVBhZ2VDb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaG9tZVBhZ2VDb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBUYXN0ZSBvZiBCdWxnYXJpYSEnO1xyXG4gICAgaG9tZVBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlQ29udGVudFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBob21lUGFnZUNvbnRlbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaG9tZVBhZ2VDb250ZW50VGV4dC50ZXh0Q29udGVudCA9ICdFbmpveSB0aGUgcmljaG5lc3Mgb2YgQnVsZ2FyaWFuIGN1aXNpbmUgaW4gb3VyIHJlc3RhdXJhbnQuIEluZHVsZ2UgaW4gc3VjY3VsZW50IGdyaWxsZWQgbWVhdHMsIGRlbGVjdGFibGUgYXBwZXRpemVycyBhbmQgYXV0aGVudGljIGRpc2hlcy4gSm9pbiB1cyBmb3IgYW4gdW5mb3JnZXR0YWJsZSBjdWxpbmFyeSBhZHZlbnR1cmUgdGhhdCB0cmFuc3BvcnRzIHlvdSB0byB0aGUgaGVhcnQgb2YgQnVsZ2FyaWEsIHdoZXJlIGV2ZXJ5IGJpdGUgYnJpbmdzIG91ciBoZXJpdGFnZSB0byBsaWZlLiBBdCBUYXN0ZSBvZiBCdWxnYXJpYSwgdGhlIGZsYXZvcnMgY29tZSBhbGl2ZSwgY3JlYXRpbmcgYW4gZXh0cmFvcmRpbmFyeSBkaW5pbmcgZXhwZXJpZW5jZS4nO1xyXG4gICAgaG9tZVBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlQ29udGVudFRleHQpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVQYWdlQ29udGVudEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBob21lUGFnZUNvbnRlbnRJbWFnZS5zcmMgPSBQaWN0dXJlO1xyXG4gICAgaG9tZVBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlQ29udGVudEltYWdlKTtcclxufVxyXG4iLCJpbXBvcnQgbWVzaGFuYV9za2FyYV9pbWFnZSBmcm9tICcuL2ltYWdlcy9tZXNoYW5hLXNrYXJhLmpwZyc7XHJcbmltcG9ydCB0YXJhdG9yX2ltYWdlIGZyb20gJy4vaW1hZ2VzL3RhcmF0b3IuanBnJztcclxuaW1wb3J0IHNhcm1pX2ltYWdlIGZyb20gJy4vaW1hZ2VzL3Nhcm1pLmpwZyc7XHJcbmltcG9ydCBzaG9wc2thX3NhbGF0YV9pbWFnZSBmcm9tICcuL2ltYWdlcy9zaG9wc2thLXNhbGF0YS5qcGcnO1xyXG5pbXBvcnQgc2hrZW1iZV9pbWFnZSBmcm9tICcuL2ltYWdlcy9zaGtlbWJlLmpwZyc7XHJcbmltcG9ydCBtb3Vzc2FrYV9pbWFnZSBmcm9tICcuL2ltYWdlcy9tb3Vzc2FrYS5qcGcnO1xyXG5pbXBvcnQgYmFuaXRzYV9pbWFnZSBmcm9tICcuL2ltYWdlcy9iYW5pdHNhLmpwZyc7XHJcbmltcG9ydCBraXNlbG9fbWx5YWtvX2ltYWdlIGZyb20gJy4vaW1hZ2VzL2tpc2Vsby1tbHlha28uanBnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNZW51UGFnZUNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51UGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UtY29udGFpbmVyJyk7XHJcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShtZW51UGFnZUNvbnRhaW5lciwgZm9vdGVyKTtcclxuXHJcbiAgICBjb25zdCBtZW51UGFnZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVQYWdlQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UtY29udGVudCcpO1xyXG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVBhZ2VDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBtZW51UGFnZUNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtZW51UGFnZUNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdIZXJlIGFyZSBvdXIgdG9wIGRpc2hlczonO1xyXG4gICAgbWVudVBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQYWdlQ29udGVudFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBkaXNoZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpc2hlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNoZXMtY29udGFpbmVyJyk7XHJcbiAgICBtZW51UGFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaGVzQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBkaXNoZXNEYXRhID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ01lc2hhbmEgU2thcmEnLCBwcmljZTogJ1ByaWNlOiAkNS45OScsIGltYWdlOiBtZXNoYW5hX3NrYXJhX2ltYWdlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnVGFyYXRvcicsIHByaWNlOiAnUHJpY2U6ICQxLjk5JywgaW1hZ2U6IHRhcmF0b3JfaW1hZ2UgfSxcclxuICAgICAgICB7IG5hbWU6ICdTYXJtaScsIHByaWNlOiAnUHJpY2U6ICQyLjQ5JywgaW1hZ2U6IHNhcm1pX2ltYWdlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnU2hvcHNrYSBTYWxhdGEnLCBwcmljZTogJ1ByaWNlOiAkMy40OScsIGltYWdlOiBzaG9wc2thX3NhbGF0YV9pbWFnZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1Noa2VtYmUnLCBwcmljZTogJ1ByaWNlOiAkMy45OScsIGltYWdlOiBzaGtlbWJlX2ltYWdlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTW91c3Nha2EnLCBwcmljZTogJ1ByaWNlOiAkMy40OScsIGltYWdlOiBtb3Vzc2FrYV9pbWFnZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0Jhbml0c2EnLCBwcmljZTogJ1ByaWNlOiAkNS40OScsIGltYWdlOiBiYW5pdHNhX2ltYWdlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnS2lzZWxvIE1seWFrbycsIHByaWNlOiAnUHJpY2U6ICQxLjQ5JywgaW1hZ2U6IGtpc2Vsb19tbHlha29faW1hZ2UgfVxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHsgbmFtZSwgcHJpY2UsIGltYWdlIH0gb2YgZGlzaGVzRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRpc2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgZGlzaGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2hDb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICBjb25zdCBkaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGlzaFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc2hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpc2hJbWFnZS5jbGFzc0xpc3QuYWRkKCdkaXNoLWltYWdlJyk7XHJcbiAgICAgICAgZGlzaEltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYDtcclxuXHJcbiAgICAgICAgZGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XHJcbiAgICAgICAgZGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNoUHJpY2UpO1xyXG4gICAgICAgIGRpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaEltYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3RQYWdlQ29udGVudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcGFnZS1jb250YWluZXInKTtcclxuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGNvbnRhY3RQYWdlQ29udGFpbmVyLCBmb290ZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYWdlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdFBhZ2VDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcGFnZS1jb250ZW50Jyk7XHJcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0UGFnZUNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYWdlQ29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnRhY3RQYWdlQ29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ0ZlZWwgZnJlZSB0byBjb250YWN0IHVzOic7XHJcbiAgICBjb250YWN0UGFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2VDb250ZW50VGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IG1haW5Db250YWN0RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvbnRhY3REYXRhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFjdC1kYXRhLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFjdFBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250YWN0RGF0YUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZW1haWxBZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGF0YS1jb250YWluZXInKTtcclxuICAgIGVtYWlsQWRkcmVzcy5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtZW52ZWxvcGUgZmEtbGdcIj48L2k+IDxwPnRhc3RlLm9mLmJ1bGdhcmlhQGdtYWlsLmNvbTwvcD4nO1xyXG4gICAgbWFpbkNvbnRhY3REYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzcyk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRhdGEtY29udGFpbmVyJyk7XHJcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGhvbmUgZmEtcm90YXRlLTkwIGZhLWxnXCI+PC9pPiA8cD4wODggODQzIDc4OTU8L3A+JztcclxuICAgIG1haW5Db250YWN0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRhdGEtY29udGFpbmVyJyk7XHJcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgZmEtbGdcIj48L2k+IDxwPkJvcmlzb3ZhIDI0LCBSdXNlLCA3MDAwLCBCdWxnYXJpYTwvcD4nO1xyXG4gICAgbWFpbkNvbnRhY3REYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuXHJcbiAgICBjb25zdCB3b3JraW5nVGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd29ya2luZ1RpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd29ya2luZy10aW1lLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFjdFBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHdvcmtpbmdUaW1lQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCB3b3JraW5nVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB3b3JraW5nVGltZS50ZXh0Q29udGVudCA9ICdXb3JraW5nIFRpbWU6JztcclxuICAgIHdvcmtpbmdUaW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdvcmtpbmdUaW1lKTtcclxuXHJcbiAgICBjb25zdCB3b3JraW5nVGltZURhdGEgPSBbXHJcbiAgICAgICAgeyBkYXlzOiAnTW9uZGF5LUZyaWRheScsIGhvdXJzOiAnOTowMCBBTSAtIDEwOjAwIFBNJyB9LFxyXG4gICAgICAgIHsgZGF5czogJ1NhdHVyZGF5JywgaG91cnM6ICcxMDowMCBBTSAtIDk6MDAgUE0nIH0sXHJcbiAgICAgICAgeyBkYXlzOiAnU3VuZGF5JywgaG91cnM6ICcxMTowMCBBTSAtIDg6MDAgUE0nIH1cclxuICAgIF07XHJcblxyXG4gICAgZm9yIChjb25zdCB7IGRheXMsIGhvdXJzIH0gb2Ygd29ya2luZ1RpbWVEYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgd29ya2luZ1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHdvcmtpbmdUaW1lLmNsYXNzTGlzdC5hZGQoJ3dvcmtpbmctdGltZScpO1xyXG4gICAgICAgIHdvcmtpbmdUaW1lLmlubmVySFRNTCA9IGA8cCBjbGFzcz0nZGF5cyc+JHtkYXlzfTo8L3A+IDxwPiR7aG91cnN9PC9wPmA7XHJcbiAgICAgICAgd29ya2luZ1RpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQod29ya2luZ1RpbWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgaG9tZVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWVudVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY29udGFjdFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1wYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4taG9tZScpO1xyXG4gICAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbWVudScpO1xyXG4gICAgY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tY29udGFjdCcpO1xyXG5cclxuICAgIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaG9tZVBhZ2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBtZW51UGFnZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgaG9tZVBhZ2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBjb250YWN0UGFnZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb250YWN0UGFnZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGhvbWVQYWdlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbWVudVBhZ2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiaSIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsInRhYkljb24iLCJjcmVhdGVFbGVtZW50IiwicmVsIiwiaHJlZiIsImFwcGVuZENoaWxkIiwiY29udGVudCIsImhlYWRlciIsInRpdGxlIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJuYXZiYXIiLCJidG5Ib21lIiwic2V0QXR0cmlidXRlIiwiYnRuTWVudSIsImJ0bkNvbnRhY3QiLCJmb290ZXIiLCJpbm5lckhUTUwiLCJyZW5kZXJIZWFkZXJGb290ZXIiLCJob21lUGFnZUNvbnRhaW5lciIsImluc2VydEJlZm9yZSIsImhvbWVQYWdlQ29udGVudENvbnRhaW5lciIsImhvbWVQYWdlQ29udGVudFRpdGxlIiwiaG9tZVBhZ2VDb250ZW50VGV4dCIsImhvbWVQYWdlQ29udGVudEltYWdlIiwiSW1hZ2UiLCJyZW5kZXJIb21lUGFnZUNvbnRlbnQiLCJtZW51UGFnZUNvbnRhaW5lciIsIm1lbnVQYWdlQ29udGVudENvbnRhaW5lciIsIm1lbnVQYWdlQ29udGVudFRpdGxlIiwiZGlzaGVzQ29udGFpbmVyIiwiZGlzaGVzRGF0YSIsIm5hbWUiLCJwcmljZSIsImltYWdlIiwiZGlzaENvbnRhaW5lciIsImRpc2hOYW1lIiwiZGlzaFByaWNlIiwiZGlzaEltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZW5kZXJNZW51UGFnZUNvbnRlbnQiLCJjb250YWN0UGFnZUNvbnRhaW5lciIsImNvbnRhY3RQYWdlQ29udGVudENvbnRhaW5lciIsImNvbnRhY3RQYWdlQ29udGVudFRpdGxlIiwibWFpbkNvbnRhY3REYXRhQ29udGFpbmVyIiwiZW1haWxBZGRyZXNzIiwicGhvbmVOdW1iZXIiLCJ3b3JraW5nVGltZUNvbnRhaW5lciIsIndvcmtpbmdUaW1lIiwid29ya2luZ1RpbWVEYXRhIiwiZGF5cyIsImhvdXJzIiwicmVuZGVyQ29udGFjdFBhZ2VDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiLCJoYW5kbGVFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=