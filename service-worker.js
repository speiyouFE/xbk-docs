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
    "url": "404.html",
    "revision": "38747acd6fc82e7b41d898bcbf41d472"
  },
  {
    "url": "assets/css/0.styles.3e12e6fa.css",
    "revision": "96a9c792005e44463b15d09af5fe45fc"
  },
  {
    "url": "assets/fonts/feather.3d2fa2e5.woff",
    "revision": "3d2fa2e544004aef2ea641698b715af6"
  },
  {
    "url": "assets/fonts/feather.6a750f01.ttf",
    "revision": "6a750f0119ba9c8ab8a994a4796599a6"
  },
  {
    "url": "assets/img/bg.dc1e8779.jpg",
    "revision": "dc1e877946dd4568404a432623fca8fc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c0f456a7.js",
    "revision": "c9d5b1fbadb816b110b01c8fca54ba2d"
  },
  {
    "url": "assets/js/100.32566c7d.js",
    "revision": "72faca2cf8935a63c97c0408954c6e98"
  },
  {
    "url": "assets/js/101.6f629435.js",
    "revision": "5b558b73e9714fdb6d52d50fa4af9cbf"
  },
  {
    "url": "assets/js/102.d5770be1.js",
    "revision": "bfbc88273a5affc9df0ac59ac4e55b7e"
  },
  {
    "url": "assets/js/103.92436be4.js",
    "revision": "d005816c7b4b342addd43bbaa9c15f5c"
  },
  {
    "url": "assets/js/104.897bf38a.js",
    "revision": "54a437dd25bc653b670115eaf2d3ed6c"
  },
  {
    "url": "assets/js/105.4cfa7943.js",
    "revision": "094b156b9f46914fa1d1c5a9c4b5cb66"
  },
  {
    "url": "assets/js/106.aee490e2.js",
    "revision": "6445bdc8544926185dbc45758908887f"
  },
  {
    "url": "assets/js/107.d5f4ca27.js",
    "revision": "ab5ff7dff89d0582603ac8e275b767a9"
  },
  {
    "url": "assets/js/11.e93c6f1c.js",
    "revision": "f79059e4395292667479656b07de8585"
  },
  {
    "url": "assets/js/12.53c86914.js",
    "revision": "b0874471789b8187763ba947e76a33f6"
  },
  {
    "url": "assets/js/13.10170721.js",
    "revision": "2cf6175d37ec36ee2b1ffd7925aa905a"
  },
  {
    "url": "assets/js/14.2bf21abe.js",
    "revision": "324a40ad1813ee0e7e9457f6b4993268"
  },
  {
    "url": "assets/js/15.91205027.js",
    "revision": "2b28a5d0c53864397cea1b173a3d6997"
  },
  {
    "url": "assets/js/16.1f07edb1.js",
    "revision": "e6c393ace61505001b7b68b976eee71b"
  },
  {
    "url": "assets/js/17.97f5089f.js",
    "revision": "bfd9df9e53c7487a40cc92fdfea87530"
  },
  {
    "url": "assets/js/18.5a15324a.js",
    "revision": "767f58b1229104bc68595707db10e7cb"
  },
  {
    "url": "assets/js/19.f810ab5f.js",
    "revision": "e5b740c8d68d50860da94bec1454493d"
  },
  {
    "url": "assets/js/2.3f510c8f.js",
    "revision": "b71e34d6cbb8fde4da292039e9a83be2"
  },
  {
    "url": "assets/js/20.47b2a30a.js",
    "revision": "fd4fa20bbc06aaab57a5cf35029b8f9e"
  },
  {
    "url": "assets/js/21.1a3a805f.js",
    "revision": "5bf0fea1bd3bfb4ca2a7fc87a0b75da1"
  },
  {
    "url": "assets/js/22.bd7ec992.js",
    "revision": "db59f1ffbc16f53d8c46919e88971031"
  },
  {
    "url": "assets/js/23.ac0abb05.js",
    "revision": "b203a1be06d08cc5b5bebcd66bbaf3bd"
  },
  {
    "url": "assets/js/24.f28c6129.js",
    "revision": "a2525194dbd1e8fe3b0e0837e64dfde3"
  },
  {
    "url": "assets/js/25.88de7fd3.js",
    "revision": "5f98e3d8a8d8f23c240c6995cff62e14"
  },
  {
    "url": "assets/js/26.31a9f62d.js",
    "revision": "78d8425eb0806a06a2568057159254f7"
  },
  {
    "url": "assets/js/27.417f9419.js",
    "revision": "5b618b034e222b1a8de392889eba8ac9"
  },
  {
    "url": "assets/js/28.cf01065b.js",
    "revision": "1cd7feba89cec2a9f5b08673664ff81e"
  },
  {
    "url": "assets/js/29.30b61c52.js",
    "revision": "3b3f358686c6a175ae8a4005376374a9"
  },
  {
    "url": "assets/js/3.16feac87.js",
    "revision": "73660fb4755ac0c7c1aeb059a60695de"
  },
  {
    "url": "assets/js/30.05fc5ea9.js",
    "revision": "daedc812063bda11443fa5f8d7a6e119"
  },
  {
    "url": "assets/js/31.78f2dc30.js",
    "revision": "b62c1a8bf958dbd2d95fccdb088a05db"
  },
  {
    "url": "assets/js/32.8e71d205.js",
    "revision": "63e84bf2925b2e5fbc66050495b2fe5f"
  },
  {
    "url": "assets/js/33.5179564f.js",
    "revision": "f17c3104c385b0f9acac3d519f00d06b"
  },
  {
    "url": "assets/js/34.2dee3fb4.js",
    "revision": "fe96aaeee82fa2af6dd91e69cfbed51f"
  },
  {
    "url": "assets/js/35.a0f78a55.js",
    "revision": "ee42321519cad8c5889ed5bfdae8983b"
  },
  {
    "url": "assets/js/36.5d41e83c.js",
    "revision": "f0ca6c1195bbfff99f36d7ac3ecd11e3"
  },
  {
    "url": "assets/js/37.fa1cb29f.js",
    "revision": "4a12240edcebe58192f6ad6d695990e6"
  },
  {
    "url": "assets/js/38.059b7160.js",
    "revision": "0ba5dc405aa2a4007411fe97c3532110"
  },
  {
    "url": "assets/js/39.4adc0fe6.js",
    "revision": "98b82c7d5493cfbcecb1fab5eef4f5c4"
  },
  {
    "url": "assets/js/4.203c94f0.js",
    "revision": "087697f0d7a4ad707cdc46629b88a218"
  },
  {
    "url": "assets/js/40.992086a9.js",
    "revision": "a4ac27675e20c9d2f6ed49bdedd3caa6"
  },
  {
    "url": "assets/js/41.d68961ac.js",
    "revision": "4df4e5ab75a5f7e7631c0542e82722bf"
  },
  {
    "url": "assets/js/42.3893880c.js",
    "revision": "a4f86547042905830b6d19e2a8681c73"
  },
  {
    "url": "assets/js/43.f7b6e38f.js",
    "revision": "eddf0424bb76de8487dd87f31eeffb5c"
  },
  {
    "url": "assets/js/44.870996a3.js",
    "revision": "5116db7762d7228e77e805ab938edee9"
  },
  {
    "url": "assets/js/45.1e967f9e.js",
    "revision": "a00b5d0e8610d9b2c872a3bdaa30e5b3"
  },
  {
    "url": "assets/js/46.7389c1f3.js",
    "revision": "c5257b512f40ecb47aa27d05bfd004c2"
  },
  {
    "url": "assets/js/47.557c8c02.js",
    "revision": "9d962b819674c057dde30b3c05fd907b"
  },
  {
    "url": "assets/js/48.80dabe63.js",
    "revision": "f42d7e77a6188471998e7fd4ea5d2c03"
  },
  {
    "url": "assets/js/49.5f91056f.js",
    "revision": "afc2a2968a38e7f62e66dc01d4d6e966"
  },
  {
    "url": "assets/js/5.2fac3569.js",
    "revision": "801306be338650a3575a14332ca02bc9"
  },
  {
    "url": "assets/js/50.ae1f5526.js",
    "revision": "3853f64d0cbc2c97c390c18f8190c035"
  },
  {
    "url": "assets/js/51.d00dde36.js",
    "revision": "c2c033dbbb0e5eee07b3678badd0b4db"
  },
  {
    "url": "assets/js/52.dbb14666.js",
    "revision": "c138fb7b957ab8392effba770ddbadf2"
  },
  {
    "url": "assets/js/53.221536f3.js",
    "revision": "ebce968e4928c61deb3d78e1c8644209"
  },
  {
    "url": "assets/js/54.8a149cd3.js",
    "revision": "184d90bc322c36c9011a6371d15f9213"
  },
  {
    "url": "assets/js/55.4f53a8b2.js",
    "revision": "79bde647bf70121377276a00f8991d83"
  },
  {
    "url": "assets/js/56.a827e470.js",
    "revision": "b1ddebb8b42d51f5fde9777cd433d67f"
  },
  {
    "url": "assets/js/57.177221dd.js",
    "revision": "2f0c86bfbf57edfc8aa60cffa41ab53f"
  },
  {
    "url": "assets/js/58.c312fd18.js",
    "revision": "87d814d18c37ed1a05c8369c95063ed0"
  },
  {
    "url": "assets/js/59.a4a1d37b.js",
    "revision": "8dacf36bbd0b2340a1a82b5a8e9e55b1"
  },
  {
    "url": "assets/js/6.2fa7610f.js",
    "revision": "e276ae16a52f9f302aeeb68c70ba0fdb"
  },
  {
    "url": "assets/js/60.e32b28f0.js",
    "revision": "3b83d0bc6b0becae89c1dc5aa1e49796"
  },
  {
    "url": "assets/js/61.0bc1baf6.js",
    "revision": "5afc27cf7e47fe953b2d7dcee147913e"
  },
  {
    "url": "assets/js/62.dc68cc80.js",
    "revision": "0605f31cbf5ea4f99f8fe5069968c28d"
  },
  {
    "url": "assets/js/63.0a8cbb4a.js",
    "revision": "f77f146037c5004e0ab136da7915e728"
  },
  {
    "url": "assets/js/64.86f41233.js",
    "revision": "3d3a579c3401ef1e8f8aa55d22b8b333"
  },
  {
    "url": "assets/js/65.6d894881.js",
    "revision": "d7616cad016c8d664cc32030b009ab00"
  },
  {
    "url": "assets/js/66.f605c0a1.js",
    "revision": "2ffe21821f7188b43b55e32fa448b3f2"
  },
  {
    "url": "assets/js/67.31a19e5d.js",
    "revision": "47e227425dbb9755a4ea233f80ceb790"
  },
  {
    "url": "assets/js/68.42db57da.js",
    "revision": "da1e8c387d5a63441cdc4b27fd033afa"
  },
  {
    "url": "assets/js/69.5f7bd14c.js",
    "revision": "52ec7801786bcf08a929d0c9ad0a2c4f"
  },
  {
    "url": "assets/js/7.41135ba8.js",
    "revision": "fdcc1d99007a70f49e1a5be974aa4e17"
  },
  {
    "url": "assets/js/70.08b93671.js",
    "revision": "c5731c670a08c400db13d94b07b22bb5"
  },
  {
    "url": "assets/js/71.d5833c85.js",
    "revision": "934510ab57001dd4b0aa51c1010fbf74"
  },
  {
    "url": "assets/js/72.0e47f939.js",
    "revision": "6e417c4c45213acc424ce3db2bbcf36d"
  },
  {
    "url": "assets/js/73.632e1a51.js",
    "revision": "14799d6d849842f5b0e4a5be6d0685e1"
  },
  {
    "url": "assets/js/74.42b4e1de.js",
    "revision": "3cd7bb6a65aa0e7bde08be98041b532c"
  },
  {
    "url": "assets/js/75.446d1671.js",
    "revision": "dd5b5217462b7be7f5f558bd377ca156"
  },
  {
    "url": "assets/js/76.0e18c10e.js",
    "revision": "45687469d758fedcd5751e7e20bac018"
  },
  {
    "url": "assets/js/77.52b66de3.js",
    "revision": "06d64d6588c7dbceb19e8a3843ca5eec"
  },
  {
    "url": "assets/js/78.13a36b48.js",
    "revision": "10760471b2bbca80042705d0e6874381"
  },
  {
    "url": "assets/js/79.ce7cf41d.js",
    "revision": "ec46367ce9e7634e7b2ab3a86a4f9d4e"
  },
  {
    "url": "assets/js/8.8b9714e6.js",
    "revision": "6d4942653fdff4bc6778fb4173804f52"
  },
  {
    "url": "assets/js/80.033be2c9.js",
    "revision": "b16fe264f57e634e5b8b0d67938b83ce"
  },
  {
    "url": "assets/js/81.2cd5a872.js",
    "revision": "2ccf7089a2727862079c42a711d5d19c"
  },
  {
    "url": "assets/js/82.53e36d11.js",
    "revision": "a9893ceca8099cc6c618b5013432f8eb"
  },
  {
    "url": "assets/js/83.5cffecf8.js",
    "revision": "11b95d7168875c5bf71307c25a019bcd"
  },
  {
    "url": "assets/js/84.ec945b22.js",
    "revision": "0f3e5ccff93f6709a2f68ee52fa0fe7b"
  },
  {
    "url": "assets/js/85.fa2d032e.js",
    "revision": "ee36c973e5b86190ce2d2663ac175e31"
  },
  {
    "url": "assets/js/86.b060e737.js",
    "revision": "3440b62bc3efc44767af904ca901039e"
  },
  {
    "url": "assets/js/87.4fa42963.js",
    "revision": "246018e3e2d57acf05a6df5dd37c15c9"
  },
  {
    "url": "assets/js/88.fbf0b04a.js",
    "revision": "6618a5e865a557be945500b4b5b79459"
  },
  {
    "url": "assets/js/89.0693eeea.js",
    "revision": "7323b04481a5b4161583e735f9ddb25b"
  },
  {
    "url": "assets/js/9.360cf661.js",
    "revision": "ac993e50475e0b19ec0fbb3030b00c06"
  },
  {
    "url": "assets/js/90.05da5a94.js",
    "revision": "1644af5ca70b844308d5a1a20cf2cd35"
  },
  {
    "url": "assets/js/91.cd0da3b3.js",
    "revision": "1529c719759de944b674e5f97bb40cc8"
  },
  {
    "url": "assets/js/92.dfe1e8ca.js",
    "revision": "d3be5f503d0bca957bfdc69cb2c8bf6f"
  },
  {
    "url": "assets/js/93.672b1412.js",
    "revision": "7a7aae8a93b48f0f4c1ec3b6a3d35999"
  },
  {
    "url": "assets/js/94.c64b13ab.js",
    "revision": "1caf9f4d67286af416183cdb603a2066"
  },
  {
    "url": "assets/js/95.4f2402af.js",
    "revision": "ee485511bf45ea5379e700b6a1b868f4"
  },
  {
    "url": "assets/js/96.b76956cd.js",
    "revision": "bd96a5d430462692c32ead793704eb40"
  },
  {
    "url": "assets/js/97.458c5fad.js",
    "revision": "b6160cf89eb5738fb8b80bff99281947"
  },
  {
    "url": "assets/js/98.fb6a73d7.js",
    "revision": "907eafb101efa43e7e4cc8471c1f291a"
  },
  {
    "url": "assets/js/99.4bbf4283.js",
    "revision": "6df461a613e5b07f44b24444654f564e"
  },
  {
    "url": "assets/js/app.1029c1e1.js",
    "revision": "6aa9ee257d7feb87d3b24eca40567272"
  },
  {
    "url": "bg.jpg",
    "revision": "dc1e877946dd4568404a432623fca8fc"
  },
  {
    "url": "index.html",
    "revision": "8d5f3c6513b6ee137ba8827c47b4ea14"
  },
  {
    "url": "live/index.html",
    "revision": "9247734f8d8a7c30866a0ace23a8f46e"
  },
  {
    "url": "live/init.html",
    "revision": "23f8c09b63baa7e338a08f6f7272d1a8"
  },
  {
    "url": "live/player/changePlayerLine.html",
    "revision": "8b5a0f6930b6c8a536a2b9e015e3cd51"
  },
  {
    "url": "live/player/destroyPlayer.html",
    "revision": "713fa1fd03fc141faacc64aab4a4e917"
  },
  {
    "url": "live/player/initPlayer.html",
    "revision": "5bf50060c7f619e44b1a2987851a6706"
  },
  {
    "url": "live/player/setLivePlayerBufferTime.html",
    "revision": "a0d18103b558788ce144f220afd7864e"
  },
  {
    "url": "live/player/setPlayerLineList.html",
    "revision": "346c0779ee621e23044073369459578b"
  },
  {
    "url": "live/player/setPlayerMute.html",
    "revision": "1c83d7aaa6002e804e81f1f0ce6be48c"
  },
  {
    "url": "live/player/startPlayer.html",
    "revision": "8c3f149e8461b944f81f5f46db23961f"
  },
  {
    "url": "live/player/stopPlayer.html",
    "revision": "6c080819460d6288fdbbb62ab3d35224"
  },
  {
    "url": "live/sys/getCurCpuMemInfo.html",
    "revision": "a6c7fb5f427bad23009a55040c059928"
  },
  {
    "url": "live/sys/getSystemInformation.html",
    "revision": "66d9ee8f8836f5a30a6fba328a84eef3"
  },
  {
    "url": "live/sys/jumpPage.html",
    "revision": "3fa98f5ad84e4b89048bba8c61c01c23"
  },
  {
    "url": "native/index.html",
    "revision": "9a6c9d4f7cb93d1f0344a34c499ee8d4"
  },
  {
    "url": "native/screen/snapShot.html",
    "revision": "8b760e505daaba11710e829ec0a884bf"
  },
  {
    "url": "native/sys.html",
    "revision": "45061baa8c7bf13dbf3f88c284b3b0c6"
  },
  {
    "url": "native/sys/addElementDrag.html",
    "revision": "584bdb07bf3881e998b603e829a18969"
  },
  {
    "url": "native/sys/changeWindowDisplayState.html",
    "revision": "cb1382145c356edde37de34cb7b81c01"
  },
  {
    "url": "native/sys/closeMainWindow.html",
    "revision": "7b31567547fbab2a0f560d4538a49b43"
  },
  {
    "url": "native/sys/initWindowSize.html",
    "revision": "81c52a8939e42ef0f592068e8ff05620"
  },
  {
    "url": "native/sys/maximizeWindow.html",
    "revision": "199e1b532bbcc026cb7f84d183362dc5"
  },
  {
    "url": "native/sys/minimizeWindow.html",
    "revision": "3e180a6148fee14808129aa9c6792e34"
  },
  {
    "url": "native/sys/normalWindow.html",
    "revision": "20a024faab4640d6e7113902580d7303"
  },
  {
    "url": "native/sys/removeElementDrag.html",
    "revision": "984a9dcebb054433bba7575e28a2a491"
  },
  {
    "url": "native/sys/setWindowSize.html",
    "revision": "4d73d67cb7a9a5f5fc2858f5470615ff"
  },
  {
    "url": "native/sys/setWindowSizeLimit.html",
    "revision": "fd64d2a69f4537756e17d4f4dbced761"
  },
  {
    "url": "rtc/device/changeCameraState.html",
    "revision": "3139dc53219e0b97ef59208e3f0dd25c"
  },
  {
    "url": "rtc/device/changeMicrophoneState.html",
    "revision": "0451d833bd4b439029060cdae1996763"
  },
  {
    "url": "rtc/device/getCameraList.html",
    "revision": "f83603b8c7b14c49e77de96756bc1f05"
  },
  {
    "url": "rtc/device/getMicrophoneList.html",
    "revision": "3a3ea76258f9e265a0a802d688e93d25"
  },
  {
    "url": "rtc/device/getSpeakerList.html",
    "revision": "dd64cf925871819a8ee4e91a521b71eb"
  },
  {
    "url": "rtc/device/getSpeakerVolume.html",
    "revision": "1dcd6cfc0cfa5265ba26ceda98b7ca7c"
  },
  {
    "url": "rtc/device/setCamera.html",
    "revision": "8b4bfbb71b888b801edd9545f7d0b9d3"
  },
  {
    "url": "rtc/device/setCameraParams.html",
    "revision": "8e2f883ead55b49fc27133eb0869d10f"
  },
  {
    "url": "rtc/device/setMicrophone.html",
    "revision": "818190ad3241321a8259088b5ee67d22"
  },
  {
    "url": "rtc/device/setSpeaker.html",
    "revision": "b32ea500dd52eed5795947d1d6651f7a"
  },
  {
    "url": "rtc/device/setSpeakerVolume.html",
    "revision": "c919cc37a7b9b6c5b8d5c928c3d31cc1"
  },
  {
    "url": "rtc/deviceCheckCallBack.html",
    "revision": "a08e015a5ef0f3733a7e7b4d03c28681"
  },
  {
    "url": "rtc/getAppVolume.html",
    "revision": "51a20c340676b09809a4f02486102283"
  },
  {
    "url": "rtc/getStreamInfo.html",
    "revision": "3e5b9708337f044fb6ebbab602f598e3"
  },
  {
    "url": "rtc/index.html",
    "revision": "9d8287e5c9d41bdeba042f8bafa5871d"
  },
  {
    "url": "rtc/init.html",
    "revision": "d7bde6d78ba2d7c21d7449724db41a61"
  },
  {
    "url": "rtc/initDevice.html",
    "revision": "fbb841424b58c0519e91f7505ac2a45c"
  },
  {
    "url": "rtc/logger.html",
    "revision": "6bfac726fed45f495944aea380de72ae"
  },
  {
    "url": "rtc/media/changePullFlow.html",
    "revision": "66e55ffee8b060bec7c5eebd4c35291f"
  },
  {
    "url": "rtc/media/getLocateVideo.html",
    "revision": "73fa85ee81cd4f300d939994c28a1a7a"
  },
  {
    "url": "rtc/media/getVideoUrl.html",
    "revision": "3d08f982ab97630a3fb489e510bdde0b"
  },
  {
    "url": "rtc/media/initLocalStream.html",
    "revision": "ede1007e305bda957d11769d99f45529"
  },
  {
    "url": "rtc/media/initPullFlow.html",
    "revision": "9ee524d5f370767d9dac3c8de5757901"
  },
  {
    "url": "rtc/media/pullAudioFlow.html",
    "revision": "b41c9784aa8becb5897e888d2d974e5f"
  },
  {
    "url": "rtc/media/pullAudioOnly.html",
    "revision": "9a1c6ac020df17f02988ff76b6a55371"
  },
  {
    "url": "rtc/media/startPullFlow.html",
    "revision": "f3c325d76552363a463afcedb7f3d802"
  },
  {
    "url": "rtc/media/startPushFlow.html",
    "revision": "b3df2864c2a7615d37c1904d20a3ab31"
  },
  {
    "url": "rtc/media/stopAllPullFlow.html",
    "revision": "aada4c1bdcf7ca2862f049dfd844f90f"
  },
  {
    "url": "rtc/media/stopPullFlow.html",
    "revision": "03eb29d6438618910cd013e7e2f23a3e"
  },
  {
    "url": "rtc/media/stopPushFlow.html",
    "revision": "7ef8091798505199d01fc5d956a1f2ea"
  },
  {
    "url": "rtc/player/destroyPlayerByPlayerID.html",
    "revision": "6964c8f735c6ee7b3b15198cb0eb1a9e"
  },
  {
    "url": "rtc/player/destroyPlayerByUserID.html",
    "revision": "3f7434437e5b730d1b9040e554a22da3"
  },
  {
    "url": "rtc/player/setPlayerMuteByPlayerID.html",
    "revision": "8bfea791bc71d68b0a6d107c58b9786a"
  },
  {
    "url": "rtc/player/setPlayerMuteByUserID.html",
    "revision": "7a69964d5beb4162760a54806bd4c090"
  },
  {
    "url": "rtc/room/leaveRoom.html",
    "revision": "dc8b842cdcd6b050c745d887eef1948c"
  },
  {
    "url": "rtc/setAppMute.html",
    "revision": "a2f8fcbe5b10e3738b923bb88a5c7343"
  },
  {
    "url": "rtc/setAppVolume.html",
    "revision": "ed507bb26d69518de3e014abb32425a9"
  },
  {
    "url": "rtc/setconfig.html",
    "revision": "a1abae89f699ead602586ef583f6460a"
  },
  {
    "url": "tal-sc.min.css",
    "revision": "75b0a40497eeca46769ead0ad68bc1ab"
  },
  {
    "url": "test/index.html",
    "revision": "e98c2703d4ccf13d8bf42088b2c7a1a7"
  },
  {
    "url": "uc/checkLoginType.html",
    "revision": "f66a320d0ba5a251dcd60db42c4a7b45"
  },
  {
    "url": "uc/getDeviceInfo.html",
    "revision": "d6ac6dde0a037ef03de568cf6fe12bd4"
  },
  {
    "url": "uc/getSmsCode.html",
    "revision": "dd7cf75bb90b2701bef1e6c748233fa1"
  },
  {
    "url": "uc/index.html",
    "revision": "1bcbe3883dee254962867ff3eb08ea8a"
  },
  {
    "url": "uc/init.html",
    "revision": "03ab1d1fe8248fad144e76dba608d4c8"
  },
  {
    "url": "uc/loginByMobile.html",
    "revision": "0f4b0f45fc95dc37eeca7254690f59df"
  },
  {
    "url": "uc/loginByTalID.html",
    "revision": "98f0705835bd98d2d3ec2bcaa32e7294"
  },
  {
    "url": "uc/loginOutSystem.html",
    "revision": "151b9f2cc4997c5fd932ce64431619f0"
  },
  {
    "url": "uc/loginTalUC.html",
    "revision": "f9b437146d3bac2fa6a0f79e4cfe59cf"
  },
  {
    "url": "ui/components/button.html",
    "revision": "ba30c351f64c0b12e70df77339ee0b71"
  },
  {
    "url": "ui/components/color.html",
    "revision": "27d71e0e88b6b88345c01cec7652b1b7"
  },
  {
    "url": "ui/components/countdown.html",
    "revision": "138d8774611ab86ea4a40d933fd70894"
  },
  {
    "url": "ui/components/dialog.html",
    "revision": "ac1f062b3ca6977a6783a5c0c9f83f80"
  },
  {
    "url": "ui/components/dropdown.html",
    "revision": "da8da661877b919e7fcc65f785aaaa3d"
  },
  {
    "url": "ui/components/icon.html",
    "revision": "aa6bbf0b38c1fba292bef092950491d9"
  },
  {
    "url": "ui/components/qrcode.html",
    "revision": "c38ef3a5b81a98b7a6b6779dfc176acb"
  },
  {
    "url": "ui/components/select.html",
    "revision": "b887886cfc63f24ea9405ee16a456841"
  },
  {
    "url": "ui/components/tabs.html",
    "revision": "8b01a68d4eb6e80aa451ceb0889a0f6b"
  },
  {
    "url": "ui/components/toast.html",
    "revision": "ca0a374c316a78d9d3c50bfaf2200d60"
  },
  {
    "url": "ui/index.html",
    "revision": "5fe95514335a5805bcc907dddd40efb1"
  },
  {
    "url": "ui/plugins/audio.html",
    "revision": "003e2a4a08f5d6ccc1bb1d8440682a8f"
  },
  {
    "url": "ui/plugins/logger.html",
    "revision": "fcc9367b7277553c2b1258800d2d22e3"
  },
  {
    "url": "ui/plugins/messageCenter.html",
    "revision": "bd5e6866e4691ad0171a6107cd29718a"
  },
  {
    "url": "ui/plugins/oss.html",
    "revision": "7548cd77f31da216659c29efc910b311"
  },
  {
    "url": "ui/plugins/putLogs.html",
    "revision": "50d5776fe597560b084b48725d5cf79a"
  },
  {
    "url": "ui/plugins/recorder.html",
    "revision": "b78ea63a37d8ceb76d605f2372ce0940"
  },
  {
    "url": "ui/plugins/request.html",
    "revision": "02f7ba0247c21b009a16bc396adef91d"
  },
  {
    "url": "ui/quickstart.html",
    "revision": "132af2c0d948e1de71f988f257c5cc74"
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
