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
    "revision": "5a58650ded1794d1c8d2b877ca8056ee"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "86fc2df8bd2306738087aac181d18799"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "fb808483d34df3d36643928ca1073886"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "60128b1da063e79f085f77dcb12494dc"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "d7a34cb4620431818355db5309bb4b95"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "91773aeb5aff3b9337fc502e559fc91c"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "953c95219bb9cf7f7867c220bcc14fa4"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "fb5a70673d97e049c50ce53b0d4b739d"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "5de2f64e0564acefc9d8a42cdea0bc31"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "67f14ff9573b8315f62803aaae46ed0b"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "978e2725c440f7a7c9e4498dda0c332f"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "eb35664200a32c89512c8e123469b4f2"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "441180dfc5d56ac82eeb1f5bfcb4966b"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "be80d3895d1a5433e2d9e73ae8527d28"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "270b80bf2a72ee314a0d241618a6a814"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "cf5faef34d093b9a24d204f0825ee50b"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "4250d84f5a5e7efb228c037358b63665"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "d963fac2289d14fdb6d43a76009a41a6"
  },
  {
    "url": "2021/05/07/minmax函数/index.html",
    "revision": "65ef16fd9ed9e4253674e91d130d6f2f"
  },
  {
    "url": "2021/08/07/javascript-generator-理解和应用/index.html",
    "revision": "3382eba9d330a507711e5cca185a624f"
  },
  {
    "url": "2021/08/07/vue3-typescipt/index.html",
    "revision": "be42320764e3cc41e888417a42b8e14f"
  },
  {
    "url": "404.html",
    "revision": "14664321f53b4403bf0473b62fde3675"
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
    "url": "assets/js/10.ae34c053.js",
    "revision": "5e1503f7d03230e05a7451c1cb1ffc0e"
  },
  {
    "url": "assets/js/11.d74ed900.js",
    "revision": "66f6c1ace748f87204e8b19e069c64a1"
  },
  {
    "url": "assets/js/12.4393cb0a.js",
    "revision": "14f96454ed521ed4daaae3390388e9ab"
  },
  {
    "url": "assets/js/13.c3fb12fe.js",
    "revision": "46351e1fef70b4a01b8b6e9415c56908"
  },
  {
    "url": "assets/js/14.1a9ad75b.js",
    "revision": "a6d359a1ce7a8f597655c9daae26d95d"
  },
  {
    "url": "assets/js/15.a6013174.js",
    "revision": "884b6c5d30c929bcaab0c98c633e3219"
  },
  {
    "url": "assets/js/16.b5ad1c7f.js",
    "revision": "e7a0fcfa79462eda0145fb75ab74faa0"
  },
  {
    "url": "assets/js/17.5ac5d5dd.js",
    "revision": "0dad15f352b0ebc122bbeb9c6fbc2575"
  },
  {
    "url": "assets/js/18.7974b92b.js",
    "revision": "50b3c508a38afa7a29086a81032a8e0f"
  },
  {
    "url": "assets/js/19.4553676f.js",
    "revision": "6722ec27d7518e78df94a0257d033f33"
  },
  {
    "url": "assets/js/20.53e687e4.js",
    "revision": "05467d753b5288e031808c425eb01d5c"
  },
  {
    "url": "assets/js/21.afb07aa6.js",
    "revision": "dc480f6d4022064232db826c4c474ffe"
  },
  {
    "url": "assets/js/22.8feda873.js",
    "revision": "ca317035d261068d563b2d02df83c303"
  },
  {
    "url": "assets/js/23.9a0719b4.js",
    "revision": "3096e274a9719e7564a6b4c1bac05ce0"
  },
  {
    "url": "assets/js/24.019c6fc6.js",
    "revision": "2833f1870d861f3f7d0e63caec070de4"
  },
  {
    "url": "assets/js/25.a46b12f3.js",
    "revision": "6079da31a297f26f595d0267cd5c6a1f"
  },
  {
    "url": "assets/js/26.f90ac4cd.js",
    "revision": "0b222adc5283805758c0c2224f830f60"
  },
  {
    "url": "assets/js/27.42697b6a.js",
    "revision": "2bfb3b073fd12a260dc8642fff3da27e"
  },
  {
    "url": "assets/js/28.443d890b.js",
    "revision": "a969801ec8ea97accd766fa4921c781f"
  },
  {
    "url": "assets/js/29.65e0a74a.js",
    "revision": "5b52adcf8627e47fa1332303ca319717"
  },
  {
    "url": "assets/js/30.abdd728f.js",
    "revision": "67c6c150a945d8a6a5ccb358655feea1"
  },
  {
    "url": "assets/js/31.1b1a0be3.js",
    "revision": "0b822afd1250339441e4d083be616e0a"
  },
  {
    "url": "assets/js/32.0c39cf59.js",
    "revision": "17add01a3de7c10eb125dc1745ae8a15"
  },
  {
    "url": "assets/js/33.3cfa1ff8.js",
    "revision": "68269393da25c854f57e2375a02c16dd"
  },
  {
    "url": "assets/js/34.82768a55.js",
    "revision": "eb1358c22915574af66888e9de0ecece"
  },
  {
    "url": "assets/js/35.dace5833.js",
    "revision": "09787b6a8d2f20ec1b099628a26e9779"
  },
  {
    "url": "assets/js/36.ca0e122b.js",
    "revision": "4518bc60c77c123b385efe6fab8a3a29"
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
    "url": "assets/js/6.9e66ff82.js",
    "revision": "07eb08ae6a973719a86d3e82b036bcf0"
  },
  {
    "url": "assets/js/7.10a566fe.js",
    "revision": "5680784e2c8e928155874d30d464bf74"
  },
  {
    "url": "assets/js/8.5b14c090.js",
    "revision": "9aa266af04ebb95cdd7312dc4d074d3a"
  },
  {
    "url": "assets/js/9.3e749e25.js",
    "revision": "9897b3bf95dddb2e11e00cd731a8be19"
  },
  {
    "url": "assets/js/app.28e2beed.js",
    "revision": "b105ab356cfbfba91787cb3ce63f5af0"
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
    "revision": "591f68bf19718c391023ed6352db9790"
  },
  {
    "url": "page/2/index.html",
    "revision": "b822b1bee069945899c4cb80fc3cecac"
  },
  {
    "url": "page/3/index.html",
    "revision": "f3ebdf94d29881af75170266b796696e"
  },
  {
    "url": "page/4/index.html",
    "revision": "29135dd1eb134de28a0705a042522d52"
  },
  {
    "url": "page/5/index.html",
    "revision": "99b9d66b5efeefc4264f9ab5d6beffa5"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "749977f2f56edd2a09a932e9e4200206"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "cf05a4de7443cd379b1a6bf7c4d8bd0e"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "0832c67a7294a2ae7b2c0a0a357cc1b2"
  },
  {
    "url": "tag/index.html",
    "revision": "c6806780b6ff39b80a10835d4fb5788d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "bfb97b3282b1bacdad34cd65244afe14"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "7861fbff54db444899ead11058989a6a"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "ef9cd26732d0d74e5e0a959caf8a530b"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "d0a3c4777f87ab63d60a9861dfe788f5"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3b941a5e734f05cc4c231bd991e29a17"
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
