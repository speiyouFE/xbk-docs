const path = require('path')
const slugify = require('transliteration').slugify
const tools = require('./theme/util/tools')

module.exports = {
  title: '学而思在线小班课',
  description: '学而思在线小班课文档',
  dest: './dist',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: 'UI', link: '/ui/' },
      { text: '小班', link: '/rtc/' },
      { text: '大班', link: '/live/' },
      { text: 'Native', link: '/native/' }
      //{ text: 'TEST', link: '/test/' }
    ],
    sidebar: {
      // '/ui/': getUiSiderBar('UI'),
      '/rtc/': getRtcSiderBar('RTC'),
      '/live/': getLiveSiderBar('LIVE'),
      '/native/': getNativeSiderBar('NATIVE')
    }
  },
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
        .use(...tools.createContainer('warning'))
        .use(...tools.createDemoContainer('demo'))
    }
  }
}

function getUiSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [['', '关于UI'], 'quickstart']
    },
    {
      title: '组件',
      collapsable: false,
      sidebarDepth: 0,
      children: ['color', 'button']
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
        'media/stopAllPullFlow',
        'media/startPullFlow',
        'media/setPlayerMute',
        'media/pullAudioFlow',
        'media/playDestroy',
        'media/getLocateVideo',
        'media/getVideoUrl'
      ]
    },
    {
      title: '其他',
      collapsable: false,
      sidebarDepth: 0,
      children: ['getStreamInfo', 'logger']
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
      children: ['player/initPlayer', 'player/startPlayer', 'player/stopPlayer', 'player/destroyPlayer', 'player/changePlayerLine', 'player/setPlayerLineList', 'player/setPlayerMute']
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
      children: ['sys/setWindowSize', 'sys/changeWindowDisplayState', 'sys/closeMainWindow', 'sys/setWindowSizeLimit', 'sys/initWindowSize', 'sys/addElementDrag', 'sys/removeElementDrag']
    }
  ]
}
