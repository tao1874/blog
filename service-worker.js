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
    "revision": "c86c2e9a9b2f0ee05bcd67114d03421b"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "3cd7bf12d55b5f3e18cb84eb921f9ca5"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "9dd2a96effbc0c855ad63e9e6dd0cb91"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "164b7185d2e0e5825110ecef06279f24"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "8997bf33548b9f0037ccdfd82cdf11f6"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "ff9484f893775c1a2ca77993d76ed544"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "ece164a5b4bd12654330d08f7da402e6"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "3d779e7a828030d7147b70e944a9e0bc"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "79d04a07d3b6e75cda255d93f5b48763"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "0eac76b48a13094eb6395cc6bcef3be0"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "0e88eb647f39132028b2c5b8ebd9b758"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "d6a977c6a34e406a2bd024a65786ffd2"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "42f9974206b390ee4d9ce575960c9fea"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "097015616ae639f2943996bbb9e92877"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "c315937a33c96c92be802ca12ff6f088"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "db93d5b55ab55d2fd5c9a780dca1cb4f"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "ff730a20352853ea19fb5565ed499a14"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "95b5a4989fb7a0864c23f5acd4e3370e"
  },
  {
    "url": "2021/05/07/minmax函数/index.html",
    "revision": "930f285baea748235dbc662795050036"
  },
  {
    "url": "404.html",
    "revision": "cc5366698560c555898b9070efe21870"
  },
  {
    "url": "assets/css/0.styles.65e42172.css",
    "revision": "2b354c9e8aa26e988743434ff0d5912b"
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
    "url": "assets/img/resize.5f3854b4.gif",
    "revision": "5f3854b47a009b340b24e059e3eb96fe"
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
    "url": "assets/js/1.6157f2bb.js",
    "revision": "0464ce94ed5b850579da52d689a06090"
  },
  {
    "url": "assets/js/10.8ad3470f.js",
    "revision": "f525aa76407733e59b7d7f0627f5d0a3"
  },
  {
    "url": "assets/js/11.37146942.js",
    "revision": "d9d747b239f8f3aa04bbf6eafed35818"
  },
  {
    "url": "assets/js/12.f6e8821a.js",
    "revision": "654012dbb38b69e2e5d1a93000e433f3"
  },
  {
    "url": "assets/js/13.da826664.js",
    "revision": "602051ae7775dc84f8018217ac79e077"
  },
  {
    "url": "assets/js/14.1a9ad75b.js",
    "revision": "a6d359a1ce7a8f597655c9daae26d95d"
  },
  {
    "url": "assets/js/15.15796d5b.js",
    "revision": "d89a103215aaf9b1b32fc2caef3b1173"
  },
  {
    "url": "assets/js/16.f17f5da4.js",
    "revision": "d2412e8c0b81f896ef4c7b5d4025c8dd"
  },
  {
    "url": "assets/js/17.e60e19ae.js",
    "revision": "6d82136dec8fb3da4f6ac634ed29e451"
  },
  {
    "url": "assets/js/18.dda4c9ea.js",
    "revision": "76effb3eead31efc75fcdd4bfc2f8975"
  },
  {
    "url": "assets/js/19.61eab315.js",
    "revision": "1f464b85f0793a4f2d6c808c74bf7b8a"
  },
  {
    "url": "assets/js/20.412145ec.js",
    "revision": "1769b0fb006f4db90c0b5973f5b721f2"
  },
  {
    "url": "assets/js/21.d144bdee.js",
    "revision": "2b4b0e00f14b473bf2428f6ac0b7c822"
  },
  {
    "url": "assets/js/22.e7ba7c88.js",
    "revision": "778f5a2ca19ca27c45fc9a738d40f1fc"
  },
  {
    "url": "assets/js/23.513bac39.js",
    "revision": "48f3418978ca0878e91ed5d3d47d67b1"
  },
  {
    "url": "assets/js/24.dec8bc91.js",
    "revision": "3eddd3ed67f2d9558f977b971813bfc3"
  },
  {
    "url": "assets/js/25.5c67bdc5.js",
    "revision": "9d2e4646694292c5819edc7083820fda"
  },
  {
    "url": "assets/js/26.79899a91.js",
    "revision": "3e5ac93036ca652a1b27b09ad3f4a59d"
  },
  {
    "url": "assets/js/27.cab712d4.js",
    "revision": "cc234d604f3f8edb9413c79986217e61"
  },
  {
    "url": "assets/js/28.082474a4.js",
    "revision": "a094539b931d4961c391d564ce4465b6"
  },
  {
    "url": "assets/js/29.b3d22c17.js",
    "revision": "1b718360827f557de9e758b4cecf537b"
  },
  {
    "url": "assets/js/30.b3514a77.js",
    "revision": "cd9d0af7fdcd77cf04b2939381971450"
  },
  {
    "url": "assets/js/31.6cb6301a.js",
    "revision": "7333752138f4008fe87cbb26f53b5d29"
  },
  {
    "url": "assets/js/32.32e20649.js",
    "revision": "ffed778a2682648cde8231bf6989ef3e"
  },
  {
    "url": "assets/js/33.d7a1836a.js",
    "revision": "ed9879dfb563bb91ebafd1db2e75dd67"
  },
  {
    "url": "assets/js/34.f5591efb.js",
    "revision": "d579847fd90f6e95c21cf3145a6f35ff"
  },
  {
    "url": "assets/js/4.30eb6c8c.js",
    "revision": "04c70410a1b31461607494d654729203"
  },
  {
    "url": "assets/js/5.7c866499.js",
    "revision": "20465c5ca5a3673c9cfc6bf6192f4d01"
  },
  {
    "url": "assets/js/6.6d5baa9d.js",
    "revision": "da771bf6ee3b1d3d4ff70e061b4fa0b8"
  },
  {
    "url": "assets/js/7.63ef525d.js",
    "revision": "ddbdaa4e0e9448704ce68c13bb2f93b8"
  },
  {
    "url": "assets/js/8.5b14c090.js",
    "revision": "9aa266af04ebb95cdd7312dc4d074d3a"
  },
  {
    "url": "assets/js/9.8d4e4f95.js",
    "revision": "fd1e1eab24cc7dfa1903e352cb970909"
  },
  {
    "url": "assets/js/app.66b1edb1.js",
    "revision": "78ecc7bbfc5e76000ca178f7d17fd809"
  },
  {
    "url": "assets/js/vuejs-paginate.ba872cab.js",
    "revision": "70dee532acd0cf2a08866e8cd668ec76"
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
    "revision": "01e06ab26e0e3b946dee713adefa67b4"
  },
  {
    "url": "page/2/index.html",
    "revision": "432f52abea9ae9820dbc0d0e60ed3657"
  },
  {
    "url": "page/3/index.html",
    "revision": "8e0f8655b72d3401524795815f0db08a"
  },
  {
    "url": "page/4/index.html",
    "revision": "5f6ee09ceb8b6b04fc89389202017978"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b744d8e879b65e609cadd5e44099c408"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "6d58abfe7d8e2889a41718f83a18c772"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "dc8a6a38bc1b20abf381338f675bc02d"
  },
  {
    "url": "tag/index.html",
    "revision": "8057bb8ec6fa361c25d8bb1dda4f1529"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "836229ad7d21cc8a28b8bfd9fadc81d4"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "1b5590a72b946ceb4e59144cf2082d46"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "dec2bf110d2c596e66d21840f90b4c08"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "79aaf328f115baaf3a8bd0502a24e39b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "93c164e1fd2a19e15514bd080fc1add7"
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
