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
    "revision": "a4210851547f3250c26f5db524cf910c"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "7bbca60dff50926203c56b08242b99bd"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "e027e7a8cb0e5d53381442963311ebab"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "9b356c2a9612a3ed67db166e5cb1f571"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "7481cf77e7f7fef57624f33583c52c3c"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "ca6cbce2339c45f9a6c678080904f76e"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "b1f6802627143cc47c1905e63a5bff48"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "bdca87c4162590238ead803c6e680efc"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "a114424d93ea11c33bf0607ebf33c41d"
  },
  {
    "url": "2019/01/27/数据结构——linked-list/index.html",
    "revision": "b27a00291d097b49f15e798e9dd2f402"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "a95897c5059f4e5e8799734dd8af79b2"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "cdd9475a9b5f70154bb232e9f4b2ed25"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "0c46533cfd36428e1bc2fcb4a5a3503f"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "3ad73b90171b2a344c6f9a99d1096a90"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "281fc3611c86041482ca02e7144a5501"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "08fc2351e917815374d6e97f76086443"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "24c474e92073a25fd438bf09a7ac26d2"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "6527312876f34b21786f4608c476db3e"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "531a0b0c788ec4ef42f7be2682a9f781"
  },
  {
    "url": "2021/05/07/minmax函数/index.html",
    "revision": "17dfbdae2a31b71264c93f9ae298d142"
  },
  {
    "url": "2021/08/07/javascript-generator-理解和应用/index.html",
    "revision": "a08910ae36864eb9f5b5bca0cb9d8249"
  },
  {
    "url": "2021/08/07/vue3-typescipt/index.html",
    "revision": "6faf85aef16867f238f8db7930493cdd"
  },
  {
    "url": "404.html",
    "revision": "7721841876fd9cf64d430289aeacdee8"
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
    "url": "assets/js/10.dbc83bae.js",
    "revision": "e241bf04e7cc7ac0268dc9e5fbb1202d"
  },
  {
    "url": "assets/js/11.d29e8def.js",
    "revision": "594ac4d42a3c029a79852190561c37f4"
  },
  {
    "url": "assets/js/12.2cd540ab.js",
    "revision": "a6bfc5d4d316d99f19fccabeca849bfe"
  },
  {
    "url": "assets/js/13.017ca10d.js",
    "revision": "a66b2678020e96de33c18ad50c9e0882"
  },
  {
    "url": "assets/js/14.1a9ad75b.js",
    "revision": "a6d359a1ce7a8f597655c9daae26d95d"
  },
  {
    "url": "assets/js/15.1e991f54.js",
    "revision": "b944fbaed646c6afb0ef0f189a286729"
  },
  {
    "url": "assets/js/16.71f3f887.js",
    "revision": "d5affd3f79e769e5eafb639ea94116ff"
  },
  {
    "url": "assets/js/17.6375f141.js",
    "revision": "46d9e47b07748851c4e390da514b4a4a"
  },
  {
    "url": "assets/js/18.ac3c320c.js",
    "revision": "b6d0c2cc04db2c34ee161f6b01890fce"
  },
  {
    "url": "assets/js/19.a3cd194b.js",
    "revision": "5fa4f726dcb43f6121bf808f427666c2"
  },
  {
    "url": "assets/js/20.57691652.js",
    "revision": "a4a522760e5ee045864d69c01531d07d"
  },
  {
    "url": "assets/js/21.afb07aa6.js",
    "revision": "dc480f6d4022064232db826c4c474ffe"
  },
  {
    "url": "assets/js/22.41961d7c.js",
    "revision": "1d6825722c6bcd80f3d14c73edcf8e28"
  },
  {
    "url": "assets/js/23.9dc3fe8d.js",
    "revision": "ca14f98fad34df164ded27068d638f4a"
  },
  {
    "url": "assets/js/24.d11b1358.js",
    "revision": "503d5e0ea9b256a69e8caa48f07a149f"
  },
  {
    "url": "assets/js/25.406b2c9e.js",
    "revision": "082b71f69321456531fe5e87734d3ec0"
  },
  {
    "url": "assets/js/26.e533bfd2.js",
    "revision": "be2ecf9f4631d850a911e55b10973238"
  },
  {
    "url": "assets/js/27.8f0466ad.js",
    "revision": "7f0c028e3948d1257175010c94095a34"
  },
  {
    "url": "assets/js/28.191cbc3e.js",
    "revision": "928d4a56e067a27eda15c266f10dc939"
  },
  {
    "url": "assets/js/29.482112aa.js",
    "revision": "2e53ffeef908e3846372d666e6bafff6"
  },
  {
    "url": "assets/js/30.abdd728f.js",
    "revision": "67c6c150a945d8a6a5ccb358655feea1"
  },
  {
    "url": "assets/js/31.0e8a90f8.js",
    "revision": "93a3cfa19ccc32c1aefec51a14dec49a"
  },
  {
    "url": "assets/js/32.07ec67b5.js",
    "revision": "491fce6fe919814ea1fa730e9a9e660a"
  },
  {
    "url": "assets/js/33.dc9a7fae.js",
    "revision": "34ff4516f548e3f06b041621a7c75d31"
  },
  {
    "url": "assets/js/34.24050132.js",
    "revision": "cea87f4cdfbba19870c6f24d9df4be92"
  },
  {
    "url": "assets/js/35.f0992fab.js",
    "revision": "c152268b21dc110fb889b46d4762204a"
  },
  {
    "url": "assets/js/36.9170fbd9.js",
    "revision": "bb5a10f9b89f34bec31d9aeb4f21e012"
  },
  {
    "url": "assets/js/37.765159e3.js",
    "revision": "7aa1764452c10d2dbb632662a65b2c2f"
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
    "url": "assets/js/6.67acc32e.js",
    "revision": "f7f6a4a676c39a55f0f1256848562317"
  },
  {
    "url": "assets/js/7.ceb297b5.js",
    "revision": "63e417b3b0fd25152d9d976f1b4fa6cb"
  },
  {
    "url": "assets/js/8.5b14c090.js",
    "revision": "9aa266af04ebb95cdd7312dc4d074d3a"
  },
  {
    "url": "assets/js/9.2b43479a.js",
    "revision": "f73fefc0af24dee30435f6924b5b198b"
  },
  {
    "url": "assets/js/app.1397a08d.js",
    "revision": "6c27e9703374c0466b4989814ad57693"
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
    "revision": "167dc6380e632538c795d679c3e97637"
  },
  {
    "url": "page/2/index.html",
    "revision": "62a4579bb7b419fb1d19f1c507efab66"
  },
  {
    "url": "page/3/index.html",
    "revision": "f8abb11e641293b7df06bcd9280d449f"
  },
  {
    "url": "page/4/index.html",
    "revision": "9d0f6bf84db0bce5cf6a00e829d47427"
  },
  {
    "url": "page/5/index.html",
    "revision": "ee2dd016d9ceb5664eb47b37cbb4492a"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b0bde5caf8e66519df01dc70b3bd2652"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "c4e462208f0f72616ff64efcefce0134"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "caf92325780f65511853534912bd39d3"
  },
  {
    "url": "tag/index.html",
    "revision": "8223f78762ae547cc0ce8b7a7af8f3d2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1cbd433880e4c0ee8b2ad7fbb7f8b09b"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "7bc8beb6b1e687da825c71fa85a98942"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "c802860e7ebb07529a5eece0baa73d56"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "587ae4aa3c7b00e8c5b2dd366ea16fb4"
  },
  {
    "url": "tag/数据结构 JavaScript/index.html",
    "revision": "8f7d6647f85e53b75d8ee283fadb35c0"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b91c2e7c4bec67355bca5bffe2720c8f"
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
