if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),a={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Default-17cab59a.js",revision:null},{url:"assets/Default-ff68b0c0.css",revision:null},{url:"assets/Home-ae5af533.css",revision:null},{url:"assets/Home-f26def73.js",revision:null},{url:"assets/index-123c9155.js",revision:null},{url:"assets/index-7f5bae96.css",revision:null},{url:"assets/VIcon-05576981.css",revision:null},{url:"assets/VIcon-12ad1130.js",revision:null},{url:"assets/webfontloader-523643f5.js",revision:null},{url:"index.html",revision:"7ae9fcd54933d5d24ed9e46cc3efe38d"},{url:"registerSW.js",revision:"8ff6c3190d4fd49a74c7f8163202a6f6"},{url:"./img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"./img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"manifest.webmanifest",revision:"697a582090ce1c62311aeb2a2b6551a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
