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
    "revision": "21968c21a3455b282dd9b5be2fbaef0f"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "15f37eeca9ec8317e6386d432d504943"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "8f9d2016239fb042b0964bdd3dcc193e"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "1319b31c918886c040640658481ddb32"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "be1b759384e227260bd57131d5dabae6"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "159fe124f50eec1f88771df2e193b524"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "b60f2126bec729845b18661820e4feeb"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "893a7a4706cfdc19b1a934b4c83e2335"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "a1a17bce901829c8b4ef5f8ff593fb81"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "ee54a1b066b1ecfac66b3b5074b79d73"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "ffd9309891f53bb1bc130fae91e18473"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "19245adef98d8995ab323a37b7c1c2fd"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "f30bd70b34e5ebe086b40e0fdeb666fe"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "322ca7aad5aa2606d047eb2c2a079a2e"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "b62ce856d322caffb130791b4809e454"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "c588e60dc3416c5c51af84bc46e3f80e"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "25e5167acaaa40e2e7c08e423d4ec69b"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "dbbfa8bcdb0add22503106b07ffef3ad"
  },
  {
    "url": "2021/05/07/minmax函数/index.html",
    "revision": "0a39873afaac8e4e336edc372e147282"
  },
  {
    "url": "2021/08/07/javascript-generator-理解和应用/index.html",
    "revision": "631d6e5e9c0d5308a5c8eae77081df8c"
  },
  {
    "url": "2021/08/07/vue3-typescipt/index.html",
    "revision": "4fda1badc1414723eeaef08afab97422"
  },
  {
    "url": "2021/09/17/数据结构——linked-list/index.html",
    "revision": "31f72e9a27363633c44015c59dc258fa"
  },
  {
    "url": "2024/12/09/monorepo-基于pnpm-和-turborepo的最佳实践/index.html",
    "revision": "b649577786f9242f5e4a7558c6adc098"
  },
  {
    "url": "404.html",
    "revision": "9811944601003c88722bc3a57ba6c967"
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
    "url": "assets/js/13.43f9c825.js",
    "revision": "7cee4fd6348b702d36791c41458c387a"
  },
  {
    "url": "assets/js/14.fd911833.js",
    "revision": "cf957f2d7d95381011d50c647edd3a9f"
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
    "url": "assets/js/24.576cec0a.js",
    "revision": "ddad3afc00addd12f41092ba1c6caedd"
  },
  {
    "url": "assets/js/25.94755077.js",
    "revision": "96cbae49dc56e744f53a008c738bee5e"
  },
  {
    "url": "assets/js/26.2733b16f.js",
    "revision": "e9024c6b9a7c370fbdac4a6dc5cfb8d8"
  },
  {
    "url": "assets/js/27.cea65037.js",
    "revision": "9c16324c530eda6ffdaa157ee1244368"
  },
  {
    "url": "assets/js/28.6a0ec835.js",
    "revision": "bb0e09dd32c94fe053ad3dfe2d6d6acc"
  },
  {
    "url": "assets/js/29.812d1b87.js",
    "revision": "9112c265afdcba9e0f30e367808a3437"
  },
  {
    "url": "assets/js/30.d8a32779.js",
    "revision": "5bd330c0a632a18031bddfb41379fac5"
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
    "url": "assets/js/34.520129c6.js",
    "revision": "96bd4cceb535ec9bfc3f813d64039274"
  },
  {
    "url": "assets/js/35.91a83d18.js",
    "revision": "8993ed87cf211225fc8d197e31ea8779"
  },
  {
    "url": "assets/js/36.98166262.js",
    "revision": "f3a310eb57e9fd0226dedcf44ad0fad7"
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
    "url": "assets/js/app.ebb2ca96.js",
    "revision": "7971a926ce6a97e50282167563f9a23f"
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
    "revision": "af9bbb17caa27953662bb21b917bc738"
  },
  {
    "url": "page/2/index.html",
    "revision": "53ef08350aebc7880ad205af8c99019c"
  },
  {
    "url": "page/3/index.html",
    "revision": "e34ba622189d47730b7bd10d894695ba"
  },
  {
    "url": "page/4/index.html",
    "revision": "54648e16678b09439c761dea0e742c15"
  },
  {
    "url": "page/5/index.html",
    "revision": "d5b52807698cdc82be576b112a6a6852"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "902cd41dd38a6f450604b04c7aba7ace"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "bf64a09061473d1b771b88d775f4ba26"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "02dadacca50dfa3c74192cf2bf1f108e"
  },
  {
    "url": "tag/index.html",
    "revision": "eae7dbf74778f9e750abd4374ad922c9"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f70f30152de40021efc1f64b230a7c53"
  },
  {
    "url": "tag/Monorepo/index.html",
    "revision": "9623fd905e67b102073e3105fb77d45e"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "22c104fb25a410fbf6317a69abe67ffc"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "3eb225440edfc4f4af08ce91637580b6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "6ea4755c6861e11c9bea9f56672a2075"
  },
  {
    "url": "tag/数据结构 JavaScript/index.html",
    "revision": "e02e5e4947053e212e6d638cfb3e071e"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "de08cafd17260a623c349d4b38dddb7f"
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
