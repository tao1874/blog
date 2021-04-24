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
    "revision": "1c9de60634863664f8dc1f99c2cc955d"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "0f01376df6c7a9c9278339edef0d3b4c"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "2c8d9203309fbfa504c0d138d52598d6"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "b5f460d04b27b0c5bddb75a6fe663c8b"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "de82648b636f954a8514e0fc5cd01334"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "1e8952f421b156702896bbecefd49600"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "9af4d34319697ffbe110a87dae349bba"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "a8a7ea6bdcb8ba4353b93b125adc6808"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "085c55c98057c4c6751b0bc324a45264"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "3852abe696a413aab51aa1577f002ff2"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "748cd1ca637de0ee0e9fa5ce4c16f746"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "c80c52d77e33d2924d11b9f11073211f"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "98d180f1ecc460cde17c0eab063d5131"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "c6942d2e51d02da85fde325782b07b58"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "7742fabd8856d52914dbe06bb33bfe67"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "fef0c76dd76c36d27d23e5319702a48d"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "703e1360051aeb04880cd463890d6fcf"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "b9b144f556d8c6c00ebb6bb2709412af"
  },
  {
    "url": "404.html",
    "revision": "790f91c2a188b494ff83c8eb88805242"
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
    "url": "assets/js/1.c8c89571.js",
    "revision": "00bb740ac6a353dd758877637bc48277"
  },
  {
    "url": "assets/js/10.e2219682.js",
    "revision": "cff0f887fcaaa40d4e2b70c6ab40c2a0"
  },
  {
    "url": "assets/js/11.37e3faf3.js",
    "revision": "185ea8590da60e32252dfd682de4894d"
  },
  {
    "url": "assets/js/12.57eaae95.js",
    "revision": "df04a18af8d2b72826b88038018f2e44"
  },
  {
    "url": "assets/js/13.8b96acb0.js",
    "revision": "0e3cd2d99048aefa8647859a95fca19f"
  },
  {
    "url": "assets/js/14.6bea25ff.js",
    "revision": "d75685c6fd313f1a2dfd9b124444be02"
  },
  {
    "url": "assets/js/15.15eea581.js",
    "revision": "7bee54ff312b0eeabf2a63bce6c42326"
  },
  {
    "url": "assets/js/16.4394c0c3.js",
    "revision": "6d2dc9857c09aff6ff3317e2e48e9546"
  },
  {
    "url": "assets/js/17.31ca53b5.js",
    "revision": "3d647b03958f23dc87020d4290b2a20a"
  },
  {
    "url": "assets/js/18.cb919d7f.js",
    "revision": "0eba96e24ea1b9eedc82291b47e70dfd"
  },
  {
    "url": "assets/js/19.fe1ad4e7.js",
    "revision": "b45f90a162853cfda1bb37c11d49653d"
  },
  {
    "url": "assets/js/20.b74df552.js",
    "revision": "3a77529d582a1890de4c554230bec425"
  },
  {
    "url": "assets/js/21.3b2dbac3.js",
    "revision": "3e104422869b154ecd5b335182111c01"
  },
  {
    "url": "assets/js/22.cd1e23ee.js",
    "revision": "28f6fa1886a19545bc56418aba7bf7b2"
  },
  {
    "url": "assets/js/23.35e590cf.js",
    "revision": "a2a63068494d125c6738a17e435224ac"
  },
  {
    "url": "assets/js/24.bf44808f.js",
    "revision": "dc9e3d82f39aeb6578015b0378a3e369"
  },
  {
    "url": "assets/js/25.2dd0542d.js",
    "revision": "a70861e4923127908c9608219029aca1"
  },
  {
    "url": "assets/js/26.7ad17089.js",
    "revision": "ac8d5e1a343e781fb2064d9cd50d5b48"
  },
  {
    "url": "assets/js/27.9fac4d84.js",
    "revision": "ce0b92c7aa694a15112a975396a285d0"
  },
  {
    "url": "assets/js/28.2623f9d7.js",
    "revision": "6585f346db97117d8376c7f01e095afa"
  },
  {
    "url": "assets/js/29.ed9b613c.js",
    "revision": "ef28b71e607a3ced485ca4202af27a2a"
  },
  {
    "url": "assets/js/30.1022ea26.js",
    "revision": "7c18f396679bf08d7bbb1cea6355b01b"
  },
  {
    "url": "assets/js/31.6ad4f060.js",
    "revision": "ff512d290989f2625f3ef31d513b320d"
  },
  {
    "url": "assets/js/32.9cec61bd.js",
    "revision": "d698301e11d18c6604df8d0ee31bab29"
  },
  {
    "url": "assets/js/33.fd10ec2e.js",
    "revision": "206027bb6d83c4209202de128ca1a17e"
  },
  {
    "url": "assets/js/4.6f2e2bc2.js",
    "revision": "9bd8401a353165c3ea9672847f8e203d"
  },
  {
    "url": "assets/js/5.6d2d1f17.js",
    "revision": "ef42864c12bf2b6a2fb8f4d2dee2b280"
  },
  {
    "url": "assets/js/6.dd681279.js",
    "revision": "286862e97e32d8ca62bd75ef7081fac0"
  },
  {
    "url": "assets/js/7.170c1fef.js",
    "revision": "0ed1f2f6482d961fa7059022979fc6f7"
  },
  {
    "url": "assets/js/8.77d576c5.js",
    "revision": "d7523bb4293f443e51ff125a10453efa"
  },
  {
    "url": "assets/js/9.5be4f9a3.js",
    "revision": "bb241f9b8a7bd82ac5f9d2bdc5bd5a52"
  },
  {
    "url": "assets/js/app.b23f45ae.js",
    "revision": "3dcfbf0aefcf61d94ed09ebb60f7c723"
  },
  {
    "url": "assets/js/vuejs-paginate.90bd32d2.js",
    "revision": "4afab9e377c9635d0b11d9ff4e706bfd"
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
    "revision": "d61819bbc7508de3fe78ff562cc3186e"
  },
  {
    "url": "page/2/index.html",
    "revision": "598814f6b36d194e9c90009a7a1a13fe"
  },
  {
    "url": "page/3/index.html",
    "revision": "99af7330797493e7854a6af493e8c48b"
  },
  {
    "url": "page/4/index.html",
    "revision": "5f3bad95c6f63e42a1e8f32777734d88"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "e6c259c688c6d5628713e9b65bff4746"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "c7aafad0f9d2332d140ace3cb6259452"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "44aa947c69f9c8780e1c25067b8c9c53"
  },
  {
    "url": "tag/index.html",
    "revision": "972af1b361f123006f40390409d92c50"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "05c88ca9e7c59b8f6324f8954b7d56de"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "4d81422068b67f57d83faa52e3c1920c"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "d63f581214c49f3de7ab5f8302dba5d7"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a08f59308db1873ce3bbc5abed30c7af"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "a91440791a90cfaa3a6deed39b68ecaa"
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
