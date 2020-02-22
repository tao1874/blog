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
    "revision": "b30f3b2126e2078a9b004e98e02f0c47"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "4ffcfe6714b248f462e6189a47d898d4"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "0baeb9f6e1f935f20a8eed359c4cfbdc"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "d9b1990472f8465527f8b2b7ba54ea70"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "a0bc942dd7bc89a6cbbbcffd3d7ba997"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "73d6f1ebc1e24c4f29e726e0dd79949c"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "66add66c70553786aabf14644e2ae20d"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "ef132bcf5f383dfb3952e1a424337fd1"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "d4daa405b308e0fb0658331b1529ea01"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "2633aa74a2c709b0d779eb45bf1c89f4"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "2c1bfe27741f2972eb8b8eb17bc6b08b"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "25d5b184c1ca561f0cf79cef95dc90db"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "6bd0b8edf142742941ec0314935cd175"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "7e7921caa30afd2fd63a9140ea0c457b"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "9bc9a7cbec9b9efac52404c8efd568fe"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "01bff29081ccbca27fbc8b3e6e6dc31c"
  },
  {
    "url": "404.html",
    "revision": "aef7c1c41aeeb38cd8d155ec8daf2c16"
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
    "url": "assets/js/app.a01bf09b.js",
    "revision": "ea5be13e9c6188baadf7d5291a89bba9"
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
    "url": "icons/android-icon-36x36.png",
    "revision": "c790d2af4151635378a81efe58ea9dbc"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "25fd75bdd115b1513d23a0eed7e29e25"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "c7ee38f47b70bd216ed39e4b8ade697b"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "3c1f42bbae1acbd85ab744609f663dcb"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "0ed4d5f73bde5fb28fc7ab68f546a1c7"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "43508f73e4b1b2e7cc3c83bebe897c4f"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "495a66b92fe5ba23c6d60ede93d9d5fa"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "7a3040716887d147fdd3358f81273282"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "eec9358a2aa508eb8c8f5d9b618a7732"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "cdd3ea38d5dcb1debc04889fbefe0e1b"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "df1d5ec6784864f881d9d5bc33c70aff"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "c7ee38f47b70bd216ed39e4b8ade697b"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "15dc9658f6cd1695573a86a382afe39f"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "64f1acc7e075dfa598dc4a77f69ca743"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "64f1acc7e075dfa598dc4a77f69ca743"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "67acff270d9f58dc7bf510c870f0f7e0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "9942ed3f2ae3740650dec83c8a808428"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "3c1f42bbae1acbd85ab744609f663dcb"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "495a66b92fe5ba23c6d60ede93d9d5fa"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "dd33d054cf6c184f49a62d93adcfbc3d"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "8980e8955b69b263e396a9bb8bb1b578"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "b38a7863a5db81a748e726749479b06d"
  },
  {
    "url": "index.html",
    "revision": "9bef290b209fcd962f31173dd507776d"
  },
  {
    "url": "page/2/index.html",
    "revision": "0d3ea4c4bbcd8557b66f043b4995ee37"
  },
  {
    "url": "page/3/index.html",
    "revision": "08640f4e723e193bbbb36abc665f63d7"
  },
  {
    "url": "page/4/index.html",
    "revision": "1fed397450358e34082512357ea0d5b5"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6d14e18dfa6def1ab0d69ce274c53b86"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a12d6a8092a6a6c2e562e48ee56eee26"
  },
  {
    "url": "tag/index.html",
    "revision": "c42a8c76ec0c9c3fca1cd2c4b2974f22"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "728be7d8cb3d82d084fea2a499e150b2"
  },
  {
    "url": "tag/Js/index.html",
    "revision": "3452c030fc4b74a10cdd7f37929e03fc"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "05837b11312d83e27a4f09f1b3a7c137"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "299ac7bc755ea8587d963822409a196b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b1193f4c77c5bf6102d4ef539eda77bf"
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
