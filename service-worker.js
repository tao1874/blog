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
    "revision": "90554ecc06209792a82d2ea393d9e494"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案-copy/index.html",
    "revision": "cac338ded160417d19cc2c951f8298d0"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "573b051d01508c0d319d8619f3ecf8c7"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "e8a0b309547142ae5102c46c2587706e"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "bcb041a8030653f11b260c0142bd5e70"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "ca1c912f702d8ae51daed8a373144a05"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "a0be85eea3d4eece305e007c655246ef"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "d9ba7d687d14f461eb018e3e8fa1b8c5"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "a87afade43b82531075afa24c4425724"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "25f0637846fc079072255d952c0f9fc5"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "24f89da6aeff91b7e846f29a53ace1a7"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "cfbf9a6f3c4df553993de196a555191a"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "d2326504316530d4afff4888840b155c"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "1e0add68984f730f32ea2b52e043293f"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "cbb080ec77110ca79915d98be8365782"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "62b26f7caa2e963ca072b3348592e53d"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "5b0c6883eb155162c6203741eda85d99"
  },
  {
    "url": "404.html",
    "revision": "686e15f8182830c40c97c0c271bf5ebf"
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
    "url": "assets/js/12.989cc0dd.js",
    "revision": "6f8813fe59bf4bb53cb3259ed82604eb"
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
    "url": "assets/js/16.e54e577b.js",
    "revision": "254f63bbfe6e3d1ba05d28f97a5c0fda"
  },
  {
    "url": "assets/js/17.c05dc88c.js",
    "revision": "f5fab5590abd55d007a63b092607954d"
  },
  {
    "url": "assets/js/18.3ca04ca7.js",
    "revision": "ca93763add58292fc8eace5b4d91c67d"
  },
  {
    "url": "assets/js/19.c201ba48.js",
    "revision": "209f6d0a319edd557d5a71a1b90c4ce7"
  },
  {
    "url": "assets/js/20.d02264ec.js",
    "revision": "f51a87d3ab56a86b2dfaee46c8b32eb9"
  },
  {
    "url": "assets/js/21.cd170fbb.js",
    "revision": "d8ce8193cc1221570e50d0a6aa045039"
  },
  {
    "url": "assets/js/22.eddacdff.js",
    "revision": "d083ae07fc5d47f63e749902c9920990"
  },
  {
    "url": "assets/js/23.df46457c.js",
    "revision": "ece0aa56bd17a6b97e52b72de14e80ad"
  },
  {
    "url": "assets/js/24.cead9aaa.js",
    "revision": "4986d15a0a44038418d0d78bc88ce2cf"
  },
  {
    "url": "assets/js/25.5ed4514d.js",
    "revision": "19fd92fa938cccd43fbfb6606cf07b60"
  },
  {
    "url": "assets/js/26.26daa4d5.js",
    "revision": "8c80617a1fb527be563248be2f5bec66"
  },
  {
    "url": "assets/js/27.0af35a6a.js",
    "revision": "780ce37b4ed6e855f1f95525460decbf"
  },
  {
    "url": "assets/js/28.dfad4f6b.js",
    "revision": "db9bdd53bfd7c39fa87037833d578db6"
  },
  {
    "url": "assets/js/29.b5a4e407.js",
    "revision": "492ce48694dbb21becadafb0c34c7d44"
  },
  {
    "url": "assets/js/30.e2219f99.js",
    "revision": "3c83a8c6965c3b0afedaeedf22250b02"
  },
  {
    "url": "assets/js/31.ef721a1e.js",
    "revision": "fda176c8d6812a9e501ddef9f76c3311"
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
    "url": "assets/js/6.29607ae1.js",
    "revision": "dc1ccbddeab0dcf63f58521cbca35514"
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
    "url": "assets/js/app.13018829.js",
    "revision": "3652fc31d7be6f9c98dc9ffbd756e5cd"
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
    "revision": "8f5bac20eacb673ff74cabee5eb22af8"
  },
  {
    "url": "page/2/index.html",
    "revision": "95e47acbcdb33ee6de5a6107f6cb4d34"
  },
  {
    "url": "page/3/index.html",
    "revision": "bc397a93c9cd39b459308608b6fc36ee"
  },
  {
    "url": "page/4/index.html",
    "revision": "cce8fce3c7a06b5076bd0d0c93782cde"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "fd367b06af353aea45c3c216af095b6e"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "47b0a95f4453228f4daae2e628b98ec6"
  },
  {
    "url": "tag/index.html",
    "revision": "233f234afae68ef3cc40751eebf466c6"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a43ff88f0842b5d7e466da034ef0ced9"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "2bbe83adae500bc8689f6509205281b4"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "211de06a4703c1ce76170b61f83e9855"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "47437af8acce1e4322b512b440a11313"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "ff717c24ba353cfc4773be3236c7cc9d"
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
