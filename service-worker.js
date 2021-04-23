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
    "revision": "ec7811220e967b64c9c7e8f49fac01b4"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "ca8b1f7e95ffd676d47467ff4fc6c57a"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "e7fc85d888269e620446b5b1244e2b46"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "a9c0e7edb2d6fcff60b1472f53939046"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "59a2b7b68e52d157b051f7702112fac0"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "df2c24e7dcd27b0d2d598abd798deb08"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "b97e1e3662d0605163d8bf4db8b81a69"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "4460e4db997d4d6a85964952a9b4715c"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "0566e5ea6698dc8b40c45f2d9f849f06"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "356e3ae46d64f1a72942f0fe319b3a0b"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "2debc7d98b19ce514eaa955b42d57dc2"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "8c0b40dde9a75a6610ef410c62731c38"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "bce71d1137a20c5f1065df6dca47c243"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "8f6fac4aead7fd68b26396daa5c048be"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "6edfb5d8d9c06c38cdb24105ddbf8f18"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "29bfca3ff73ab527f674bbff776bc5ed"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "bb287327b58d17f539ed0c2c952c83d6"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "cd7ed697392b9b6c59b941e99cb05578"
  },
  {
    "url": "404.html",
    "revision": "21aa7053e852ced3ea400943c58d5b8c"
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
    "url": "assets/js/app.fdc5c915.js",
    "revision": "4dcbff529c2c491ffdd274b4ef525a46"
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
    "revision": "04a42e7865ad5f811ded3e45fd863f38"
  },
  {
    "url": "page/2/index.html",
    "revision": "e4597873eca28d4966fe0d1c8f1bd545"
  },
  {
    "url": "page/3/index.html",
    "revision": "4174dbdd91d5b447cc45c953020ae7ca"
  },
  {
    "url": "page/4/index.html",
    "revision": "9c939992f137e12650f47b3fd29b089d"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b946f555e920042ad9add050290e2212"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "8518500ed825c8d97c3e5c897c257254"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "b3a80f6908472cafbbf3cc4e2df71ec5"
  },
  {
    "url": "tag/index.html",
    "revision": "283bfafab345765499509cb9f1e7ba3a"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "918c058e98d2e82e68db74817eaa6eb4"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "d6dc9bc8dab925d588bc11ba8b8e60e5"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "9153889d2f00abfa0f11d773809e37e5"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bcd3cf0bfe086f6a30dd82da71d55ecc"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "e8884cb2fe6efc3450639e910de316bb"
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
