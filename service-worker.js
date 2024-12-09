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
    "url": "1970/01/01/monorepo-基于pnpm-和-turborepo的最佳实践/index.html",
    "revision": "703fb84a23c617d8aea7d4dac0f00e69"
  },
  {
    "url": "2017/09/27/随机与刻意练习/index.html",
    "revision": "e27b2bce7719d014cd588f672dcb799c"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "d6a7b2f5ac330765243b90b1483d86ee"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "746b3120bd04a690a679279dd2c4b51c"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "dce7b95051c05d3a418aa22652fd3a23"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "6d8b0cf66f615e021ed15efb286a8216"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "9773672b718dc29327d2b0baf5bc2e10"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "aa2917700cad34f08314e4e91d13b97b"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "2f7247d2f48abdc7f30cdb8ab5c48fb4"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "6f57e4e1f3e4a1fa4ab4b6cc0622e8ef"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "85a6344ddc17b602e58ea220f018f962"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "e6b8ed33a5394aefcb0c5eb5a5e4f11f"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "70e21d91e7e211e94c1c0981d7742e91"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "1b708cfd57caf382c843f630d87f5bfd"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "d3c8c619895ffc602cc3352fad3f40b3"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "3f4fce2afefc4382f86bd767446a7222"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "62b5bfe01a9df94a7677a5358626064a"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "e0b8c41b17e366c2b72a5974ca1f2ad0"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "490b55e9ad2fad0222b9b5de13f6ff9f"
  },
  {
    "url": "2021/05/07/minmax函数/index.html",
    "revision": "c1c1c2bf2f47cc857b5acab99e1225a8"
  },
  {
    "url": "2021/08/07/javascript-generator-理解和应用/index.html",
    "revision": "fd61e894a9912e86348a6a8ade48f807"
  },
  {
    "url": "2021/08/07/vue3-typescipt/index.html",
    "revision": "5d404e916f8b62f228f865c90ff99917"
  },
  {
    "url": "2021/09/17/数据结构——linked-list/index.html",
    "revision": "231183a9447aad6cbd5cc3c84abb2aa8"
  },
  {
    "url": "404.html",
    "revision": "bd64d34deb4d498e64c2b2f111d4ff60"
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
    "url": "assets/img/monorepo-flow.ed1143e9.svg",
    "revision": "ed1143e9e2b4b67a0b7465ba5d00c4fa"
  },
  {
    "url": "assets/img/monorepo-g2.4ad24bdd.svg",
    "revision": "4ad24bdd6cae4f21aab3b3a718f3c744"
  },
  {
    "url": "assets/img/monorepo-mutirepo.1423c412.svg",
    "revision": "1423c412406c0a30334e77c8495186ec"
  },
  {
    "url": "assets/img/monorepo-tools.b7b34200.svg",
    "revision": "b7b3420023349099caba39e4144f3416"
  },
  {
    "url": "assets/img/monorepo.995dee1e.svg",
    "revision": "995dee1e62f1ffeb4f13c1f12672cfcf"
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
    "url": "assets/js/1.44ae4fde.js",
    "revision": "b3de417855df0497f54bc06250346621"
  },
  {
    "url": "assets/js/10.1730afcd.js",
    "revision": "52ad5d37b7fb545f95f96b9c81bd72bf"
  },
  {
    "url": "assets/js/11.99a1cca3.js",
    "revision": "013ab7100117efd027797d4d2b7036ba"
  },
  {
    "url": "assets/js/12.591cd9fe.js",
    "revision": "874acf8d5a258c724b2971a76738bce3"
  },
  {
    "url": "assets/js/13.1036b72a.js",
    "revision": "bc2018bad56118aaba8945d20ddc5368"
  },
  {
    "url": "assets/js/14.01cda084.js",
    "revision": "44ac712417d49be7e8b514e7b2a33b89"
  },
  {
    "url": "assets/js/15.666b317e.js",
    "revision": "942253dbdfdb973cc2b4f848edb86d14"
  },
  {
    "url": "assets/js/16.2c64e62a.js",
    "revision": "3870048b78b1e3ead1b2eae6987eede1"
  },
  {
    "url": "assets/js/17.93da0be5.js",
    "revision": "98048ed603f2cd5b4d23dd8d418ac33b"
  },
  {
    "url": "assets/js/18.2f839d33.js",
    "revision": "1cd244d9fee709c5cfc3e8050bbc9ad1"
  },
  {
    "url": "assets/js/19.237b7327.js",
    "revision": "ceb8dcdf3dce7548457ded141dd65da1"
  },
  {
    "url": "assets/js/20.25825d79.js",
    "revision": "2f2503b412eb1d08c5df28993b233ca9"
  },
  {
    "url": "assets/js/21.764fd922.js",
    "revision": "a333b901bda3b4c0b0af98d2dee17036"
  },
  {
    "url": "assets/js/22.c9f9de81.js",
    "revision": "16775c7cd0f2a9a523ab9dbaa9ab43b3"
  },
  {
    "url": "assets/js/23.a691b63b.js",
    "revision": "14482529866c1af7fee52a46d4db7d21"
  },
  {
    "url": "assets/js/24.97ad4fca.js",
    "revision": "5fd2452fe4d9439da46a8e1db13f9e7b"
  },
  {
    "url": "assets/js/25.768bca20.js",
    "revision": "2bd00180e092931ea5bddaadfd79891d"
  },
  {
    "url": "assets/js/26.2733b16f.js",
    "revision": "e9024c6b9a7c370fbdac4a6dc5cfb8d8"
  },
  {
    "url": "assets/js/27.559fd547.js",
    "revision": "3889a5f878c387efb01b142681af46f9"
  },
  {
    "url": "assets/js/28.6a0ec835.js",
    "revision": "bb0e09dd32c94fe053ad3dfe2d6d6acc"
  },
  {
    "url": "assets/js/29.17c28a0d.js",
    "revision": "14f6e102dd51721342472057efa7d07e"
  },
  {
    "url": "assets/js/30.ac3f6133.js",
    "revision": "f5390ba7cf8534ffa5b522c4f1d3a9f9"
  },
  {
    "url": "assets/js/31.b85fb174.js",
    "revision": "1194ee449b31c99a2b81658cc1c6a4d0"
  },
  {
    "url": "assets/js/32.6337f539.js",
    "revision": "29fbb60a563ab34d1607d38f4edd3497"
  },
  {
    "url": "assets/js/33.54e8541e.js",
    "revision": "f075432523d915d7fba3cf87d312d100"
  },
  {
    "url": "assets/js/34.d1508fb4.js",
    "revision": "821bce954194a4555b907f61a0c40c5b"
  },
  {
    "url": "assets/js/35.e7ad2a23.js",
    "revision": "efff1960e5330d5e5e1192a0c95c1350"
  },
  {
    "url": "assets/js/36.588304cf.js",
    "revision": "6ef5c11acba5cbb4a13e597a0099d029"
  },
  {
    "url": "assets/js/37.47772a1a.js",
    "revision": "9e2a336d1dd4e761e92cf477586f8989"
  },
  {
    "url": "assets/js/38.116f5f6d.js",
    "revision": "10d3c2f0fefe1c5903a46e039408e3d7"
  },
  {
    "url": "assets/js/4.77e29858.js",
    "revision": "8a06640d2a2f53d758374cd69a33959b"
  },
  {
    "url": "assets/js/5.d1ffba4a.js",
    "revision": "a820191e0e36bce64b4b363084b973c2"
  },
  {
    "url": "assets/js/6.fc27af55.js",
    "revision": "084f44ee96fd6bb108ebe98d7f5dcee3"
  },
  {
    "url": "assets/js/7.19dd94bf.js",
    "revision": "ce25f05fbe568d47ca81683ba6f45fba"
  },
  {
    "url": "assets/js/8.2c76891a.js",
    "revision": "4a8a201aa8d789037a68a21e2faa7e91"
  },
  {
    "url": "assets/js/9.5b58cfed.js",
    "revision": "a22950e7b2dbacd9e466d1d75ba5a373"
  },
  {
    "url": "assets/js/app.7d50110b.js",
    "revision": "77aa05adccd91d0025eb909fee161d34"
  },
  {
    "url": "assets/js/vuejs-paginate.06b3d1a1.js",
    "revision": "b01722995a92660045487d963f0ca665"
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
    "revision": "0a37f1e995ce7653e213e30614031ec1"
  },
  {
    "url": "page/2/index.html",
    "revision": "2e74bd19ea638db2a7a7fbef17728f48"
  },
  {
    "url": "page/3/index.html",
    "revision": "c5f83571d2f315b8ba4ccd679886bbce"
  },
  {
    "url": "page/4/index.html",
    "revision": "b0eaddad9a504a0621f113d704ac6f62"
  },
  {
    "url": "page/5/index.html",
    "revision": "a6a795dbcb794adcd182942677306d17"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "6363e2de985826dd79964d74364bd3eb"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "472e189f7587fbbb217b766208f79b84"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "ea06176298ac9a4c930f06b61d91fe99"
  },
  {
    "url": "tag/index.html",
    "revision": "e1a14fbf93d44590bf9cd8efdba70026"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "690c253151d5b3c2497cf6f92eb8d38f"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "5b7cf83bdad642631b1b8a5dc13b7586"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "2000737b6dc34cbf8953cd0769c281bd"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "732c09f236213631b9f74cc506ab8336"
  },
  {
    "url": "tag/数据结构 JavaScript/index.html",
    "revision": "f254d7fb5ee7fafdc8769fb615f353e6"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "df115f497b1ecd0dcb3287f385093d36"
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
