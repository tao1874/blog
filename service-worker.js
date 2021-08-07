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
    "revision": "91ad5b137bdfdc52155c401fde9bb405"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "446b92f59e096b165892a08cafe9b23c"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "dd7567068c9772e70618b39f43eb5c25"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "226de2e2209df3e940121af1f7a2dfa8"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "e5e75b7d2e694dad28a406a519bb28be"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "9d31660d2963cbbbe8ba9ba497f5c598"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "afc193df198d650440663b191993996f"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "964d813a8e6a4277e4d15712ffe2ec0b"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "a1a912eb3e6dc3bdd736b31a1f411eec"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "b7769ca1caa8ff889d75b86524feac96"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "f6fffcceb6e1150462c5a44ebfca29fd"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "29f75d0249fc136e4631974f2f2f68d2"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "d6b02a025e6b57e85d42fc5453d8872e"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "1d9f311358b619b69b9db66941c5d75b"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "3a8440e3c8c0b67f6b12fb33261276b8"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "1101f5d8c1e85e7925b7a220e4bf7f43"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "8a6b4b80c325da3707843fd9c216f026"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "374fc0c190e73b784d43e107825229d5"
  },
  {
    "url": "2021/05/07/minmax函数/index.html",
    "revision": "009ddc22402f23ad7f69d0cf17ab1bfe"
  },
  {
    "url": "2021/08/07/javascript-generator-理解和应用/index.html",
    "revision": "8b009d087905343314916b5172eb4de3"
  },
  {
    "url": "404.html",
    "revision": "aa17a9527e842f5aae7bc5e1112154e3"
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
    "url": "assets/js/13.477fa9d5.js",
    "revision": "f3076fc353b758af6b48dde68a61a1ca"
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
    "url": "assets/js/27.8a7ac207.js",
    "revision": "d7a901f3efd7f7a9542905ba1bf9d11a"
  },
  {
    "url": "assets/js/28.55911aff.js",
    "revision": "dcd8083c359b20639702fad1a5e54914"
  },
  {
    "url": "assets/js/29.c343bc01.js",
    "revision": "43fbc68f3b36dd4bf4f4456ca8035f6a"
  },
  {
    "url": "assets/js/30.22e4c1df.js",
    "revision": "17ffd882a69f25e4b8dfd5fc1a56773f"
  },
  {
    "url": "assets/js/31.8307a4d6.js",
    "revision": "a191b589c54c329ebbdeb73116a5fdf2"
  },
  {
    "url": "assets/js/32.13bb4047.js",
    "revision": "ae40f27b58f355daecbb304f448000cd"
  },
  {
    "url": "assets/js/33.3b65d0c4.js",
    "revision": "ca67410f2dd66965a8d273189f1a7beb"
  },
  {
    "url": "assets/js/34.2327f892.js",
    "revision": "05c616568e88ed5d136dbc47da5243a3"
  },
  {
    "url": "assets/js/35.aba9590b.js",
    "revision": "004a96ce445b3a4e4ac3b1d91ef61eb5"
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
    "url": "assets/js/6.131e866f.js",
    "revision": "d184033c60401909b0369ccb8c950356"
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
    "url": "assets/js/app.dadac0f8.js",
    "revision": "04dd53990b20be1808b2b730b6ae0fd9"
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
    "revision": "24e40770017a631d4f77de8ef17e3d2d"
  },
  {
    "url": "page/2/index.html",
    "revision": "a048ee9ec2b8b94e871e69571bb2ca08"
  },
  {
    "url": "page/3/index.html",
    "revision": "eae8662f72111742a9e47735da7a4713"
  },
  {
    "url": "page/4/index.html",
    "revision": "bc4ccf5a97d5c18f6a80f19fd9ecddf0"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "001d155038efe44be9eed84c67a0e167"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "f6f42aa3768e6a8f6febff392faf0084"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "1598b6a2b31d1e1237daa3d721947015"
  },
  {
    "url": "tag/index.html",
    "revision": "4d5081c02db387631ef352c2a4898e70"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3b44b677b305d2fa0c439ef7493491e0"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "c4a4214b656c472f2b885d5473a9baa7"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "d983c934bcc49a5da6fac1099b88c073"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "acbc4988a325c1aec4a5c60d805fe3e3"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "311ecc441acf1db84c2433401a4b430d"
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
