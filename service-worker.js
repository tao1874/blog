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
    "revision": "41ad38cebe0b2ce904610903d65840eb"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "5f8b5dee362f3710c4ee2f586ea205fa"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "fb25f80385381d6ad3682b3ccd61476f"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "7d301ccf20cc38ecacfa4b743a9d2f64"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "7bd890b65f7873be7966c87fe9294b5b"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "e15c4cf61cce001412d5005016efd4b2"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "ccd0393a09a9a791f2e8badcd8091537"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "f8826f4dc923d1bab09befb1e70f5997"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "a3d253c4a7889f5f0fa9f9d5a68b897e"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "62bbec80681f41bec61ebe18f939394e"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "5290e1b95b0c517fd5358af174330891"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "f9e561422560a6f107c9e5b817b6d243"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "da74c2668dde7885e111bcac5f8c315b"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "c7e987cc5fcbd3bb41710fbc6590df65"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "05d83b49072cc71aef477c960b0c0a15"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "eb5afd9052907576863aa89bcd58e697"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "b01c83a74da9359f5f92afaaebb00cb4"
  },
  {
    "url": "404.html",
    "revision": "5819c5206e8a3746f9598c04ecf73ee7"
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
    "url": "assets/js/1.2bbcd5a4.js",
    "revision": "9fd7236705c1fb52a5f9eeb0e4805b25"
  },
  {
    "url": "assets/js/10.355f795d.js",
    "revision": "c9a8f7ba67b45c3b35a09f821631ba1c"
  },
  {
    "url": "assets/js/11.a967d293.js",
    "revision": "5a6ffe5312b62051526c8a503b5c28de"
  },
  {
    "url": "assets/js/12.d5b01552.js",
    "revision": "ab2f6aa545c1372bb3cb0c9a87a9268e"
  },
  {
    "url": "assets/js/13.f64492b6.js",
    "revision": "bbf0f25fd93468fff3de3d695ed0b967"
  },
  {
    "url": "assets/js/14.7dbc386d.js",
    "revision": "b9d09069c25df49519d098fe7e108e58"
  },
  {
    "url": "assets/js/15.a15d4cc4.js",
    "revision": "71e7d50f4708931d5822a70d52d20e15"
  },
  {
    "url": "assets/js/16.f65fe6e6.js",
    "revision": "254f63bbfe6e3d1ba05d28f97a5c0fda"
  },
  {
    "url": "assets/js/17.c5c49c19.js",
    "revision": "c11eb13b45e1d8aa2988b8345ec9a7cc"
  },
  {
    "url": "assets/js/18.6e30da04.js",
    "revision": "85b45cacb464b456ea9788e2f81f6f6c"
  },
  {
    "url": "assets/js/19.8ee37b63.js",
    "revision": "650db9e45f556ef6f8b9b246d63af407"
  },
  {
    "url": "assets/js/20.1531555f.js",
    "revision": "f51a87d3ab56a86b2dfaee46c8b32eb9"
  },
  {
    "url": "assets/js/21.2a990afc.js",
    "revision": "d8ce8193cc1221570e50d0a6aa045039"
  },
  {
    "url": "assets/js/22.81219a0a.js",
    "revision": "d083ae07fc5d47f63e749902c9920990"
  },
  {
    "url": "assets/js/23.4c6a60f7.js",
    "revision": "ece0aa56bd17a6b97e52b72de14e80ad"
  },
  {
    "url": "assets/js/24.5df0dc0b.js",
    "revision": "4986d15a0a44038418d0d78bc88ce2cf"
  },
  {
    "url": "assets/js/25.03bb5b9c.js",
    "revision": "19fd92fa938cccd43fbfb6606cf07b60"
  },
  {
    "url": "assets/js/26.4967af3a.js",
    "revision": "8c80617a1fb527be563248be2f5bec66"
  },
  {
    "url": "assets/js/27.44dbd49b.js",
    "revision": "780ce37b4ed6e855f1f95525460decbf"
  },
  {
    "url": "assets/js/28.9dee1191.js",
    "revision": "db9bdd53bfd7c39fa87037833d578db6"
  },
  {
    "url": "assets/js/29.f68a0f4d.js",
    "revision": "492ce48694dbb21becadafb0c34c7d44"
  },
  {
    "url": "assets/js/30.fe10b900.js",
    "revision": "3c83a8c6965c3b0afedaeedf22250b02"
  },
  {
    "url": "assets/js/31.ef721a1e.js",
    "revision": "fda176c8d6812a9e501ddef9f76c3311"
  },
  {
    "url": "assets/js/4.696a5b0e.js",
    "revision": "c0084b0b65187d82a239d185ace3481a"
  },
  {
    "url": "assets/js/5.4efe9d58.js",
    "revision": "31152ea6fa7bba22e890e803598c6289"
  },
  {
    "url": "assets/js/6.25079c1a.js",
    "revision": "dc1ccbddeab0dcf63f58521cbca35514"
  },
  {
    "url": "assets/js/7.e777a2d0.js",
    "revision": "3cdc157e7bf463c621c8a0316500aa92"
  },
  {
    "url": "assets/js/8.7bcf5852.js",
    "revision": "01f7825e88b14cc2dbef2e58a6c21812"
  },
  {
    "url": "assets/js/9.a6af0fb5.js",
    "revision": "92b0523aa3cde8bd259f6d0487727d87"
  },
  {
    "url": "assets/js/app.fd22b6c0.js",
    "revision": "02318328f4a84ebbc5c4e77837c292f4"
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
    "revision": "7f4d8a8a462e34556c2c9c7ecbd2904f"
  },
  {
    "url": "page/2/index.html",
    "revision": "9afd4d41457df30c9da59b2657aaa39e"
  },
  {
    "url": "page/3/index.html",
    "revision": "6d62bd02df5680b202c83af75ced35a9"
  },
  {
    "url": "page/4/index.html",
    "revision": "2e27455b0fef1295dee1c336204746d0"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c05db0d7f7a0e8ffbb14bd78da1d3038"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "a582bec6b5d28fb15f220d6ae1d84fb8"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "12f8c5b3af8dff45a168c944ddab74d6"
  },
  {
    "url": "tag/index.html",
    "revision": "757257043482e100c47b0d0ebbaef74f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b6487d4b8c644c302ff1de6b370116f3"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "07064294ed88408b035658cb667cfcb7"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "beecbe10a569a00f05d65ad4b22b14d9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "832ec9a08d5612334709fe7f6ee5dc0d"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "f99affcce48b982193d86dfae53657be"
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
