/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2017/09/27/随机与刻意练习/index.html",
    "revision": "b4911c0fe476aca5ee7c03bdcf83c3cb"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "e9f38d16119d5183fb7deaaaa9a3527c"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "50edf2d69ce0954aaf0098f9d26ad4c7"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "14a3eb0fea52bfb5513d3410320bd44c"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "c3813f34d5c0c200242055ff51317455"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "db66ef1179b1f418e26735ee1b139e6d"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "cd9f1c32e36285f449a543ba562c3804"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "04ab6fb21e9f33e76e9f88bf978d3f70"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "fedb7bbadd0d0ff16b7cf17fbd577b59"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "a3ee13394908d0238c2f70a3042f4934"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "62f4124a0474f2fbe151efac2864eb26"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "5a2f71126f5c0dc4c2352c2c5bbf5e34"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "351579447281fd0b29ce3bad0fe98209"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "c90141a296be44f056d0258f56d94705"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "498b02c16d246a62892bea2b2acdc599"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "0ffb463767caaba51669748d1c0dd426"
  },
  {
    "url": "404.html",
    "revision": "7a6e281d35c323721fa9a148d609c0f8"
  },
  {
    "url": "assets/css/0.styles.fb216152.css",
    "revision": "d0ff81fe14779e7f3a5071414708d027"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/grid-column-row.18e15493.png",
    "revision": "18e15493fa151a8134a7bc041ee601d7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/space-around.0332f140.png",
    "revision": "0332f1400b817c7da63a0e0486e4918f"
  },
  {
    "url": "assets/img/space-evenly.0ebcaeaf.png",
    "revision": "0ebcaeaf0b3c5a718a5bf6b596395844"
  },
  {
    "url": "assets/js/1.05f1e496.js",
    "revision": "9fd7236705c1fb52a5f9eeb0e4805b25"
  },
  {
    "url": "assets/js/10.43009a49.js",
    "revision": "c9a8f7ba67b45c3b35a09f821631ba1c"
  },
  {
    "url": "assets/js/11.131151d4.js",
    "revision": "5a6ffe5312b62051526c8a503b5c28de"
  },
  {
    "url": "assets/js/12.d2d847d5.js",
    "revision": "9719cb11cb6d3d7f753019b2622cbb16"
  },
  {
    "url": "assets/js/13.e545211e.js",
    "revision": "bbf0f25fd93468fff3de3d695ed0b967"
  },
  {
    "url": "assets/js/14.da4d48ba.js",
    "revision": "b9d09069c25df49519d098fe7e108e58"
  },
  {
    "url": "assets/js/15.c78ea5cb.js",
    "revision": "71e7d50f4708931d5822a70d52d20e15"
  },
  {
    "url": "assets/js/16.c571be60.js",
    "revision": "254f63bbfe6e3d1ba05d28f97a5c0fda"
  },
  {
    "url": "assets/js/17.75f06594.js",
    "revision": "c11eb13b45e1d8aa2988b8345ec9a7cc"
  },
  {
    "url": "assets/js/18.ce8a1307.js",
    "revision": "85b45cacb464b456ea9788e2f81f6f6c"
  },
  {
    "url": "assets/js/19.93d68a9e.js",
    "revision": "37cc03cebba3ee87238a2e94cae8aa8d"
  },
  {
    "url": "assets/js/20.28719429.js",
    "revision": "b6bf97a8409319188d2ff111841929bf"
  },
  {
    "url": "assets/js/21.04f5e1f5.js",
    "revision": "7db0b392cb3401c5ecbf62d5524ef7d0"
  },
  {
    "url": "assets/js/22.ff85dd0a.js",
    "revision": "64273e33b7cd629c76b385a8a203aa4f"
  },
  {
    "url": "assets/js/23.2a456f2c.js",
    "revision": "2292fa7fb208e480878a7b809c81c350"
  },
  {
    "url": "assets/js/24.e990d827.js",
    "revision": "5f36cfe4da8aee4bb3a450e57ac1494a"
  },
  {
    "url": "assets/js/25.c0e87f5a.js",
    "revision": "c9b5102228542e3f32eeff638660f1cc"
  },
  {
    "url": "assets/js/26.96918d4e.js",
    "revision": "2ecd338cd578949cf4561cad589cafd4"
  },
  {
    "url": "assets/js/27.c8a568d4.js",
    "revision": "70ebe8c400bee218b2b3ed7ceff9b86b"
  },
  {
    "url": "assets/js/28.b976603b.js",
    "revision": "46a95cb03837b6b8802a8dea8163772c"
  },
  {
    "url": "assets/js/29.9bc9ce8c.js",
    "revision": "25273791a5241b288b07a08fffcb463a"
  },
  {
    "url": "assets/js/30.6fec4803.js",
    "revision": "8870900990b6d39e657ccf907390def6"
  },
  {
    "url": "assets/js/4.663a456d.js",
    "revision": "c0084b0b65187d82a239d185ace3481a"
  },
  {
    "url": "assets/js/5.fe670bbb.js",
    "revision": "31152ea6fa7bba22e890e803598c6289"
  },
  {
    "url": "assets/js/6.921f457b.js",
    "revision": "e3a8e5a970f4e12e0272101d199f095c"
  },
  {
    "url": "assets/js/7.d7250b41.js",
    "revision": "3cdc157e7bf463c621c8a0316500aa92"
  },
  {
    "url": "assets/js/8.d7785e93.js",
    "revision": "01f7825e88b14cc2dbef2e58a6c21812"
  },
  {
    "url": "assets/js/9.0d61032c.js",
    "revision": "92b0523aa3cde8bd259f6d0487727d87"
  },
  {
    "url": "assets/js/app.25f5b718.js",
    "revision": "9321812dea261783a660ca8a23f350c7"
  },
  {
    "url": "assets/js/vuejs-paginate.15417ede.js",
    "revision": "0e53f5950b2cbb3a710ed15335cbf445"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "495a66b92fe5ba23c6d60ede93d9d5fa"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "743824ce5066afc3510ce256354fbc15"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "7a3040716887d147fdd3358f81273282"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "64f1acc7e075dfa598dc4a77f69ca743"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "495a66b92fe5ba23c6d60ede93d9d5fa"
  },
  {
    "url": "index.html",
    "revision": "b30d5eac4294a1815be5c98c03c7cbde"
  },
  {
    "url": "page/2/index.html",
    "revision": "ab133d97cb24030334416fea0c150507"
  },
  {
    "url": "page/3/index.html",
    "revision": "4ab05784f550f1bf998d048104bf5bdf"
  },
  {
    "url": "page/4/index.html",
    "revision": "00691a7a927fad3a3fd8ab1e35faa901"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0fa57b8aea5b69ce39f1cfc016fb9932"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "8d851f876587ef19f52cbcd6d80f2d5c"
  },
  {
    "url": "tag/index.html",
    "revision": "93a7f4d081a9d1c1bc009b98022c6520"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6ed0f584737f9ad325c83da59d2442ec"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "30d3dc247d072efc2682827a6a94c00f"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "9284bfc79ecabead2aa938d32177f088"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "54825e25281b407b52e518810149ef17"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7e412b2d346d9606ad0b34095ad09464"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
