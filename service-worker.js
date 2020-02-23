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
    "revision": "aed9713ee982e6b14b470b4018be8cee"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "9cdeb89041bbb226f9bead42e431d1b7"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "e7927f231b9f5d558e4ccd3d3fdff556"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "9a2bfbc389c1233ede90984ec7aa6cac"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "a4162cb098a1a71d506fca9065ef7731"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "80ef659e42da8b1eb210060910c43987"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "3481a42c8509e1fdb2f8f38f5f833be1"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "4eea296f13469df12db6623827a9cfdf"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "56844469a4a7274a22ebe8982362098e"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "651b707044de83de75d577381f498280"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "b180b6923c9639a4929662a3ac586250"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "0c039bb97e467b02bc7320248ba52aa1"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "a469fb601aacb50896a5ec660d03b34f"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "648505d0f2c052903f570c385a3a06ce"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "876b19c09ff53bac81ac0c00c95a9129"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "c823df9c1fc11ffc171d193977780962"
  },
  {
    "url": "404.html",
    "revision": "a52fb8b6de5276b23b3e3d41a33701b5"
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
    "url": "assets/js/app.5422e6a7.js",
    "revision": "2fb3d7023178af6b38c43e8673d876ca"
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
    "revision": "b76620c1a0cf80f600e67daa21fb8b46"
  },
  {
    "url": "page/2/index.html",
    "revision": "eead7a1f60b4330771190bf7a85d8ccd"
  },
  {
    "url": "page/3/index.html",
    "revision": "e539ac59d92319743f3814cc18bc8a3d"
  },
  {
    "url": "page/4/index.html",
    "revision": "cfa6794288e5874cd9e2a541302be2c9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8da8b617787abcf0500425a60676181a"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "62c71612f6ec4ba896e1eddd3d43f795"
  },
  {
    "url": "tag/index.html",
    "revision": "6ea2fc503a7f4627e96799c3a1d40940"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "dbf0c27e1d2fcd8ee1fc4b098f09fc2d"
  },
  {
    "url": "tag/Js/index.html",
    "revision": "84402223759f659cde1046a998c4b9e0"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "b964a544741c68be16c26469f102ba00"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a1f4f566be27046b7d5c2b05be57881a"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "f3692ceb5c8a8b540c75d88d902ebe21"
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
