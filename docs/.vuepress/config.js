const path = require('path')
const slugify = require('transliteration').slugify
const tools = require('./theme/util/tools')
// const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  title: '学而思小班课',
  description: '学而思小班课文档',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/tal-sc.min.css' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'UI库', link: '/ui/' },
      { text: '小班(RTC)', link: '/rtc/' },
      { text: '大班(Live)', link: '/live/' },
      { text: 'Native', link: '/native/' },
      { text: 'UC', link: '/uc/' }
      // !isEnvProduction && { text: 'TEST', link: '/test/' }
    ],
    sidebar: {
      '/ui/': getUiSiderBar('UI'),
      '/rtc/': getRtcSiderBar('RTC'),
      '/live/': getLiveSiderBar('LIVE'),
      '/native/': getNativeSiderBar('NATIVE'),
      '/uc/': getUCSiderBar('UC'),
      '/test/': getTestSiderBar('TEST')
    },
    lastUpdated: '上次更新',
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale('zh-CN')
          return moment(timestamp).fromNow()
        }
      }
    ],
    ['@vuepress/register-components'],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'UpdatePopup',
        updatePopup: {
          message: '发现有新内容可用',
          buttonText: '刷 新'
        }
      }
    ],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ]
  ],
  markdown: {
    toc: {
      includeLevel: [2],
      slugify: slugify,
      forceFullToc: true
    },
    anchor: {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    },
    lineNumbers: false,
    extendMarkdown: md => {
      md.use(...tools.createContainer('tip'))
        .use(...tools.createContainer('info'))
        .use(...tools.createContainer('success'))
        .use(...tools.createContainer('danger'))
        .use(...tools.createContainer('error'))
        .use(...tools.createContainer('warning'))
        .use(...tools.createContainer('warn'))
        .use(...tools.createDemoContainer('demo'))
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set('@imgs', path.resolve(__dirname, 'public/')).end()
    // config
    //   .merge({
    //     externals: {
    //       vue: {
    //         root: 'Vue',
    //         commonjs: 'vue',
    //         commonjs2: 'vue',
    //         amd: 'vue'
    //       }
    //     }
    //   })
    //   .end()
  },
  clientRootMixin: path.resolve(__dirname, 'mixin.js')
  // devServer: {
  //   https: true
  // }
}

function getUiSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [['', '关于UI库'], 'quickstart']
    },
    {
      title: '组件',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        'components/button',
        'components/icon',
        'components/dialog',
        'components/toast',
        'components/countdown',
        'components/select',
        'components/tabs',
        'components/dropdown',
        'components/qrcode'
      ]
    },
    {
      title: '插件',
      collapsable: false,
      sidebarDepth: 0,
      children: ['plugins/request', 'plugins/oss', 'plugins/audio', 'plugins/logger', 'plugins/putLogs', 'plugins/messageCenter', 'plugins/recorder']
    }
  ]
}
function getRtcSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [['', '关于RTC']]
    },
    {
      title: '配置',
      collapsable: false,
      sidebarDepth: 0,
      children: [['setconfig', '全局配置']]
    },
    {
      title: '检测',
      collapsable: false,
      sidebarDepth: 0,
      children: [['initDevice', '初始化检测'], ['deviceCheckCallBack', '设备检测回调']]
    },
    {
      title: '初始化',
      collapsable: false,
      sidebarDepth: 0,
      children: ['init']
    },
    {
      title: '退出教室',
      collapsable: false,
      sidebarDepth: 0,
      children: [['room/leaveRoom', '退出教室']]
    },
    {
      title: '设备',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        ['device/getCameraList', '获取摄像头列表'],
        ['device/getMicrophoneList', '获取麦克风/话筒列表'],
        ['device/getSpeakerList', '获取扬声器/音箱/耳机列表'],
        ['device/getSpeakerVolume', '获取扬声器音量'],
        ['device/setCamera', '设置摄像头'],
        ['device/setMicrophone', '设置麦克风'],
        ['device/setSpeaker', '设置扬声器'],
        ['device/setSpeakerVolume', '设置扬声器音量'],
        ['device/setCameraParams', '设置摄像头参数'],
        ['device/changeCameraState', '开关摄像头'],
        ['device/changeMicrophoneState', '开关麦克风']
      ]
    },

    {
      title: '音视频',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        'media/initLocalStream',
        'media/startPushFlow',
        'media/stopPushFlow',
        'media/initPullFlow',
        'media/stopPullFlow',
        'media/startPullFlow',
        'media/stopAllPullFlow',
        'media/changePullFlow',
        'media/pullAudioFlow',
        'media/getLocateVideo',
        'media/getVideoUrl'
      ]
    },
    {
      title: '播放器',
      collapsable: false,
      sidebarDepth: 0,
      children: ['player/setPlayerMuteByUserID', 'player/setPlayerMuteByPlayerID', 'player/destroyPlayerByUserID', 'player/destroyPlayerByPlayerID']
    },
    {
      title: '其他',
      collapsable: false,
      sidebarDepth: 0,
      children: ['getStreamInfo', 'setAppMute', 'setAppVolume', 'getAppVolume', 'logger']
    }
  ]
}
function getLiveSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [['', '关于LIVE']]
    },
    {
      title: '初始化',
      collapsable: false,
      sidebarDepth: 0,
      children: ['init']
    },
    {
      title: '播放器',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        'player/initPlayer',
        'player/startPlayer',
        'player/stopPlayer',
        'player/destroyPlayer',
        'player/changePlayerLine',
        'player/setPlayerLineList',
        'player/setPlayerMute',
        'player/setLivePlayerBufferTime'
      ]
    },
    {
      title: '通用',
      collapsable: false,
      sidebarDepth: 0,
      children: ['sys/getSystemInformation', 'sys/getCurCpuMemInfo', 'sys/jumpPage']
    }
  ]
}
function getNativeSiderBar() {
  return [
    {
      title: 'Native',
      collapsable: false,
      sidebarDepth: 0,
      children: ['']
    },
    {
      title: '通用',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        'sys/setWindowSize',
        'sys/changeWindowDisplayState',
        'sys/closeMainWindow',
        'sys/setWindowSizeLimit',
        'sys/initWindowSize',
        'sys/maximizeWindow',
        'sys/minimizeWindow',
        'sys/normalWindow',
        'sys/addElementDrag',
        'sys/removeElementDrag'
      ]
    },
    {
      title: '屏幕',
      collapsable: false,
      sidebarDepth: 0,
      children: ['screen/snapShot']
    }
  ]
}
function getUCSiderBar() {
  return [
    {
      title: 'UC',
      collapsable: false,
      sidebarDepth: 0,
      children: ['', ['init', '初始化'], 'getDeviceInfo', 'loginTalUC', 'checkLoginType', 'loginByTalID', 'loginByMobile', 'getSmsCode', 'loginOutSystem']
    }
  ]
}
function getTestSiderBar(title) {
  return [
    {
      title,
      collapsable: false,
      sidebarDepth: 0,
      children: [['', 'Demo']]
    }
  ]
}
