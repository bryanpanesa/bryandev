"use strict";var precacheConfig=[["/bryandev/index.html","9124b7a46cbfede3cb9587236689b2e6"],["/bryandev/static/css/main.78519fbb.css","b53c38052726dd41a76d8f7088dc565c"],["/bryandev/static/js/main.404402dc.js","313e6bb5856d2c55ff07079a61327a64"],["/bryandev/static/media/Bfp-block.ca40121e.jpg","ca40121e5c1842bb29274c284a545f01"],["/bryandev/static/media/Gogon-block.6e54f361.jpg","6e54f361daa1ebfc6da73e71f06b3165"],["/bryandev/static/media/Inventory-block.77fb7ab6.jpg","77fb7ab6aeadfebf145baee413e69376"],["/bryandev/static/media/Phagebiotics-block.4402f43d.jpg","4402f43d60da562e97b24abe3e0417b4"],["/bryandev/static/media/Presidents-block.303838af.jpg","303838af54f1e7eaa3cd4738cfb184cd"],["/bryandev/static/media/Typeab-block.44187147.jpg","44187147a13b5d6fc21d4a863bbaa3e5"],["/bryandev/static/media/backgrounds.7549b44a.jpg","7549b44a0a34a2e54a0bd6d0b01d66cc"],["/bryandev/static/media/bfp2.a192f929.PNG","a192f92920d742cab1654e421f8c30f4"],["/bryandev/static/media/bfp3.7ec39309.PNG","7ec393097c22e00ec4c2419d51d5ebbd"],["/bryandev/static/media/bfp4.00970a7b.PNG","00970a7b2355a99268250774cae02e7f"],["/bryandev/static/media/bfp5.32f74908.PNG","32f749082e610606e8dd80463c578590"],["/bryandev/static/media/bfp6.98236ab5.PNG","98236ab53762b144fcc33f6d179f83e8"],["/bryandev/static/media/crud1.76b76e45.PNG","76b76e457bef43e3f258cb23ddf100c5"],["/bryandev/static/media/crud2.ee87fd37.PNG","ee87fd374d952dad4082ab671875cc6f"],["/bryandev/static/media/explosion.0f51fee0.png","0f51fee0c4728803f903587d46b04e2c"],["/bryandev/static/media/gogon1.62201f06.PNG","62201f06f892609e976e4a686f5610e0"],["/bryandev/static/media/gogon2.d1506ae8.PNG","d1506ae8e82bd72528c6f34f149ed167"],["/bryandev/static/media/gogon3.9ff6664d.PNG","9ff6664d7c2cba30294c220f430815e4"],["/bryandev/static/media/gogon4.a97d6522.PNG","a97d652286b2c64a9685c1bee72aab1e"],["/bryandev/static/media/gogon5.3b593526.PNG","3b593526105622cf7897fc0d5ed86298"],["/bryandev/static/media/gogon6.303ead38.PNG","303ead38ac888f4266eaf3e33d77ab1a"],["/bryandev/static/media/gogon7.306261dd.PNG","306261dd997b38387092202d4db15bf2"],["/bryandev/static/media/phage2.6062f6d9.jpg","6062f6d9e6ffb5f323108d80248c4961"],["/bryandev/static/media/phage3.3ef24888.jpg","3ef248880329c376e9b6bc1aad44394b"],["/bryandev/static/media/presidents1.47555905.PNG","4755590512d184d7b81fff3a3ed3ffee"],["/bryandev/static/media/presidents2.7cecd6c9.PNG","7cecd6c9f71af7de88796d5693da34ec"],["/bryandev/static/media/smallSprites.ec0d27ec.png","ec0d27ec9aff0bd8fbae068d12eff1d1"],["/bryandev/static/media/tilemap.14104d68.jpg","14104d68a20fbbc5ede22a71b90941cf"],["/bryandev/static/media/type2.f95f04af.PNG","f95f04af7b8dca82b2bc3502b0e25d2c"],["/bryandev/static/media/type5.64c3af62.PNG","64c3af624f0e0f38c42d6a79871123eb"],["/bryandev/static/media/type6.5b3fce67.PNG","5b3fce67933c80cb576f4f830860a9dd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/bryandev/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});