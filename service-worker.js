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
    "revision": "bd035317493a1d1d0f22a1bea410e4f0"
  },
  {
    "url": "2018/04/29/css-父级元素高度为-0-解决方案/index.html",
    "revision": "7a23f0fc04bc298bbb11cf7b022dfef3"
  },
  {
    "url": "2018/05/03/javascript-原型理解/index.html",
    "revision": "d2f719f8712053937fa2c612a56e43c2"
  },
  {
    "url": "2018/05/05/csss实现滑动操作/index.html",
    "revision": "f13d319ebab5e563f7fb7191ad4b8939"
  },
  {
    "url": "2018/09/26/just-do-it/index.html",
    "revision": "4101cce6c6262c5a63ff8cbffcc96ea9"
  },
  {
    "url": "2018/11/03/难念的经/index.html",
    "revision": "ad35140e5900aa94b2a7a346d7f2cccb"
  },
  {
    "url": "2018/12/01/困境/index.html",
    "revision": "cb8fe733a534d9e4de03f2316cb6ba78"
  },
  {
    "url": "2019/01/27/css术语/index.html",
    "revision": "a03f0c26e97b75d006710fbdce408ed5"
  },
  {
    "url": "2019/01/27/前端神器——emment/index.html",
    "revision": "37ebc7131d734a41c8edf10a549d16a5"
  },
  {
    "url": "2019/01/27/风/index.html",
    "revision": "1e23a20fbc1f1347ad46afe1a1df8cf6"
  },
  {
    "url": "2019/03/16/javascript-数组/index.html",
    "revision": "9bf7908d924c963a0b1e93159aab4f1b"
  },
  {
    "url": "2019/03/30/我所理解的html语义化/index.html",
    "revision": "d66e7050693c856885d37c23483c6873"
  },
  {
    "url": "2019/04/02/写给自己看的grid布局教程/index.html",
    "revision": "3147276500283accff9db85346dd6bca"
  },
  {
    "url": "2019/05/26/vue之作用域插槽/index.html",
    "revision": "4b217c6e45f73969ec4432a8c12d434e"
  },
  {
    "url": "2019/09/22/web-components-简明教程/index.html",
    "revision": "b50c65ff200e5b7962c2490b1b06f343"
  },
  {
    "url": "2020/01/11/正则表达式学习小记/index.html",
    "revision": "d7cc272390ff76735a95631abd531712"
  },
  {
    "url": "2021/04/17/javascript设计模式与开发实践/index.html",
    "revision": "5a7440038661bf5ec246eeb595924ba4"
  },
  {
    "url": "2021/04/24/工厂模式/index.html",
    "revision": "1a9bbc9a3e7652cc4910a74e9e7aab64"
  },
  {
    "url": "2021/05/07/minmax函数/index.html",
    "revision": "ce46bb172aa7b43f0db7d8bc873a17d1"
  },
  {
    "url": "2021/08/07/javascript-generator-理解和应用/index.html",
    "revision": "b7c2c45203e6a4e0698a9d116388d130"
  },
  {
    "url": "2021/08/07/vue3-typescipt/index.html",
    "revision": "8a354ab8db629f266dbc818076a4f8e4"
  },
  {
    "url": "2021/09/17/数据结构——linked-list/index.html",
    "revision": "5bb04eb6d9b7ae5ea81ab83a76b203b0"
  },
  {
    "url": "404.html",
    "revision": "75bba57f86af71c3da2156f1192e239c"
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
    "url": "assets/js/app.ff2a176b.js",
    "revision": "9651aaa0bdcb37598411dc13ab9be42d"
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
    "revision": "fe7fa09072aed3ff7e4464ed4c0bac04"
  },
  {
    "url": "page/2/index.html",
    "revision": "937b5a63b996918bbf220c72fbae04ec"
  },
  {
    "url": "page/3/index.html",
    "revision": "3088684e74eccc9bed958f0d5f1db37c"
  },
  {
    "url": "page/4/index.html",
    "revision": "e51783592015b396869700cd87e6f58a"
  },
  {
    "url": "page/5/index.html",
    "revision": "0bd676c642320dcea45f4ab942d72135"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "6ee60d23b50915cf173d64711c79b50b"
  },
  {
    "url": "tag/Design Patters/index.html",
    "revision": "bd1e8f3f314c9990f9fb47d44f2ba845"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "cba4cf74eaed4bd5caef4ac41bcc463d"
  },
  {
    "url": "tag/index.html",
    "revision": "92a8e28b4b13868e57fb3d1535d2c2d1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "7d74e0bb0496cd600a31fcbd656cc399"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "56d0d9a532062ab0a3990c9216e5f5fb"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "c8d5cb2b1811b15e72c035902d096b8e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "6654db8686365d2a8aef3a34ca5cefa4"
  },
  {
    "url": "tag/数据结构 JavaScript/index.html",
    "revision": "0e665709fae8187fc64d76ea7a29c37a"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "08d469b77a4c644538da3c7fe045060c"
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
