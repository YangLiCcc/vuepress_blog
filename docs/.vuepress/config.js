module.exports = {
  title: '小羊', // 博客标题
  palette: '/styles/palette.styl', // 自定义博客样式
  theme: 'reco', // vuepress挂载的主题
  // 主题相关设置
  themeConfig: {
    type: 'myHome', // 自定义首页容器
    mode: 'dark', // 主题样式默认为dark，即暗夜模式
    codeTheme: 'tomorrow', // 代码主题为tomorrow
    author: '小羊同学', // 作者
    authorAvatar: '/avatar.jpg', // 作者头像
    // 博客自定义Logo
    logo: '/logo.png',
    // 搜索框设置
    search: true,
    serchMaxSuggestions: 10,
    // 自动形成侧边栏
    sidebar: 'auto',
    // 备案号
    record: '浙ICP备2021039952号-1',
    // 项目开始时间
    startYear: '2022-01-17',
    head: [
      // favicon图标设置
      [
        'link',
        {
          rel: 'icon',
          href: 'logo.png'
        }
      ],
      [
        'meta', 
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,user-scalable=no'
        }
      ]
    ],
    // 导航栏设置
    // text：导航标题内容
    // icon：图标样式
    // items：子导航
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '关于我',
        link: '/about/',
        icon: 'reco-faq'
      },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/YangLiCcc",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // 博客设置
    // location：在导航栏菜单中的位置
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    }
  },
  // markdown相关设置
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // 引用插件
  plugins: [
    [
      'cursor-effects', 
      {
        size: 2,
        shape: 'star'
      }
    ],
    [
      
      'dynamic-title',
      {
        showText: "(/≧▽≦/)欢迎帅哥美女!",
        hideText: "(●—●)呜呜,不要走嘛!!"
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['whiteCat'],
        clean: true
      }
    ],
    [
      'sakura',
    ],
    [
      'ribbon-animation',
      {
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      }
    ],
    [
      "meting",
      {
        meting: {
          server: 'netease',
          type: 'playlist',
          mid: '7071612615',
        },
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          aotuplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: 'blueviolet',
          // 随机播放
          order: 'random',
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0
        },
        mobile: {
          cover: false
        }
      },
    ]
  ]
}