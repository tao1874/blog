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
    "revision": "c5d4723996a4a45c11a270ca458ff748"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "4f4b9ce740fd22627f2993dd867517de"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "a87ee3438336434f781400da0f261bdf"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "1dedf9d95f7437e61348735658aed734"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "34905f895e0da072fe82b439b53ae9a0"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "01a3f08197b60c718265335b863b8a3f"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "1210d3972abb4578a98f223d54e8cafc"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "59731502dfa3f72f23f756b4a54bcfca"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "5342ad13d96144c82731b096b1e13475"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "9267aee934a3cd0a0d9c5f990953e1dd"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "2cf8751b03b058b8166b646c19811aff"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "af5bfb29def40ca1bbbac10e3fc337cf"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "7da7369d34a72f56b04e78871dc0b365"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "69244f4e231fd26ebb0eb49f9d762920"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "c66fd3856d9bab4acd69875e6b60524e"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "5c308b42b1dde3b4fc1a96c8748e17e5"
  },
  {
    "url": "404.html",
    "revision": "015ad7acb2e9994821757c38a13dd28f"
  },
  {
    "url": "assets/css/0.styles.b1c2b92d.css",
    "revision": "8ec93d14e27b95ad6c9fa1b31ed7f171"
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
    "url": "assets/js/1.a42ae64f.js",
    "revision": "0d57165050dc7aeaeb4c92cbda912b2d"
  },
  {
    "url": "assets/js/10.8766c408.js",
    "revision": "f1733e1e48f3edd175106711c4e3d645"
  },
  {
    "url": "assets/js/11.1c5cc417.js",
    "revision": "861de1e3444272136cae951da0491857"
  },
  {
    "url": "assets/js/12.8923019e.js",
    "revision": "d7032ec38bf9c0721fb1fcf305a91987"
  },
  {
    "url": "assets/js/13.1ff7b55b.js",
    "revision": "55aa7308522b1e74a0e7bfe16d4c1141"
  },
  {
    "url": "assets/js/14.72752daf.js",
    "revision": "99cae6dd7fd3bbd6cb04c25fe871489a"
  },
  {
    "url": "assets/js/15.4766d80b.js",
    "revision": "dd7244a94e873fc2e8695a4d2ca371b5"
  },
  {
    "url": "assets/js/16.fff13c8c.js",
    "revision": "b42a41a63dc38f56b7ed4f7640f1a1d8"
  },
  {
    "url": "assets/js/17.07249565.js",
    "revision": "fde308ebf9695c8e1893eab2972e458f"
  },
  {
    "url": "assets/js/18.a499b538.js",
    "revision": "b24b63c39d99c255cf26174546a7642a"
  },
  {
    "url": "assets/js/19.46fa5827.js",
    "revision": "f6ff1efd380c9d9487eb76024a1305c2"
  },
  {
    "url": "assets/js/20.2abccb26.js",
    "revision": "87a5a042edaca9ef9d3d2fca15053248"
  },
  {
    "url": "assets/js/21.9f4a8cd0.js",
    "revision": "281a3d205480963264eb089c8bf0b550"
  },
  {
    "url": "assets/js/22.f2f20762.js",
    "revision": "99cd7ffa4b0ada8353fffbe73ebbbdd8"
  },
  {
    "url": "assets/js/23.f0254c5d.js",
    "revision": "ee0a6d11aa40eda2fc21465928561fee"
  },
  {
    "url": "assets/js/24.aaa032d5.js",
    "revision": "7fdd4cf35bfe1b835f6c12fc267e1f58"
  },
  {
    "url": "assets/js/25.6e7fe7b8.js",
    "revision": "2b306d0934bff219e35d545ccb1092a1"
  },
  {
    "url": "assets/js/26.67029724.js",
    "revision": "5585c0e078400a35be80841c1aa11f64"
  },
  {
    "url": "assets/js/27.12a837fa.js",
    "revision": "cccecab76b68a2753ae9d3e7475a9fee"
  },
  {
    "url": "assets/js/28.67d2b4a6.js",
    "revision": "868f3e5f211b55a62e8e30e8632505ef"
  },
  {
    "url": "assets/js/29.91d8da72.js",
    "revision": "e12e8655857da5f58a9eb1d6b42fb6e8"
  },
  {
    "url": "assets/js/4.f51f81fb.js",
    "revision": "453cd570abd71d14e215e3d17db71cc4"
  },
  {
    "url": "assets/js/5.1b84e559.js",
    "revision": "c6af097b61db7c7b4dd555a443bb7f59"
  },
  {
    "url": "assets/js/6.c30dd1f2.js",
    "revision": "3ed37f30e72cc5043f86abc4881dfa86"
  },
  {
    "url": "assets/js/7.a2e7a795.js",
    "revision": "6276df0511a517139656ba2ae0f43f3f"
  },
  {
    "url": "assets/js/8.fc2b6b17.js",
    "revision": "9ba830d4adab9cb0905df07de0f8d52f"
  },
  {
    "url": "assets/js/9.3128b65b.js",
    "revision": "12d5f06da5d918d873adee9503886e36"
  },
  {
    "url": "assets/js/app.8ac0d1fd.js",
    "revision": "ff87a493ce14c01930d39398426fa5db"
  },
  {
    "url": "assets/js/vuejs-paginate.e0fcfbae.js",
    "revision": "15d64be1cc53047e3c8bd68a0ef329a3"
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
    "revision": "7ef05830d3803a40f2bcf7feac2cdb23"
  },
  {
    "url": "page/2/index.html",
    "revision": "5227dbf609d0197e11b7b4e79d851838"
  },
  {
    "url": "page/3/index.html",
    "revision": "c4ab21b645554dc4b2b581126150c0f6"
  },
  {
    "url": "page/4/index.html",
    "revision": "8d77cac7086c5431dce3bddb11f712d8"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4938dc84c6c360a203114a03fe8a9eb4"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "e1bd1931b300f052723547628a028578"
  },
  {
    "url": "tag/index.html",
    "revision": "a317ccfeb8efa8179e99e497c2536949"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ee829e91da90831fa1a9a8ec7138995d"
  },
  {
    "url": "tag/Js/index.html",
    "revision": "c5c39def3c9b8b6af98a3cebc45b0f1c"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "8ae711d1129c970fc51d807752363ed5"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "2e727c8577f9e2b0582ea55a0c06d0a8"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "49464b335708c3c92928aa8d0f3b3d20"
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
