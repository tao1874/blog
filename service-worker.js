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
    "revision": "42c90bd7cc37a278b6cf46cdd5e7e2b0"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案-copy/index.html",
    "revision": "4a38130e0fa56f1fae872e4731bf6fab"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "66b43e406c319f2d4f6a6395ecfc60d9"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "a8c75371c7728c4d75f424dc7375e801"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "565f02a0aefd929efb66f58cce7f1477"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "617c72046ab4eaafbf32b2780d46685e"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "3c3a7a26f3cb9cb10ec86a4a7070f9e9"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "c3e4a108b8f04c33d9f4e427100ca6fc"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "73d061754474a3440ab97bb07d54b6b5"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "296595b6dfe68f1dd7144449b03db20c"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "acd1adad5ee3e459f8f570114f51e0e6"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "88be39128b683561cc7638c64bd615ea"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "e28cd5669a684b750d401d8d334e05e5"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "67d054d65d8091d7a743d8ea621c59d7"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "b57e6d631b7ca06fadc23e0d64a114b8"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "8ecb153174d7743b20338a153312cc6f"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "e8974e43abcd6d4c574cbc2ced10db2d"
  },
  {
    "url": "404.html",
    "revision": "b875aa89971500acb14f6a4d6897cfd0"
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
    "url": "assets/js/12.4164d162.js",
    "revision": "ab2f6aa545c1372bb3cb0c9a87a9268e"
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
    "url": "assets/js/18.fe39c28c.js",
    "revision": "f48d4f0b2030f905f06e9fa0582faef4"
  },
  {
    "url": "assets/js/19.88b17462.js",
    "revision": "13e36f73ac612677c1bf7be3ed0a5436"
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
    "url": "assets/js/app.bc78288f.js",
    "revision": "fd962e57b93215f3b6ad1e753c29b422"
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
    "revision": "a02fb8f8c81febcae07c49ab8f463d11"
  },
  {
    "url": "page/2/index.html",
    "revision": "491a756b9268509d4b4232bb22f4b1fb"
  },
  {
    "url": "page/3/index.html",
    "revision": "a82e046e8c0b78bcaf358652ac4909a5"
  },
  {
    "url": "page/4/index.html",
    "revision": "f72788befd7c331b7a95b6e323905582"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "ebb612d9debbbfbe428ad15dc46ade66"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "8df8b4a34fcac31101b3cdc4813633d0"
  },
  {
    "url": "tag/index.html",
    "revision": "ab031f247e481f3711e84aaa4411a628"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3ca9235cd7dbbfc9dce2fa9481093199"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "08a82b0dfd5c08b3e05d022b3044fd25"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "64af2800b112d66838bc9abe3770cba8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "b9a210289d56bc5cb7a7f6734d4aaba3"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "c266362567a963196811e2d5ef61ae1c"
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
