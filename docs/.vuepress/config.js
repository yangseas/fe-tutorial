module.exports = {
  title: 'fe-tutorial',
  description: '前端学习笔记',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  base: '/fe-tutorial/',
  themeConfig: {
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      { text: '数据结构', link: '/dataStructure/' },
      { text: '算法', link: '/algorithm/' },
      { text: 'JavaScript', link: '/javaScript/' },
      { text: 'Webpack', link: '/webpack/' },
      { text: '个人博客', link: 'https://yangseas.github.io/' },
      { text: 'github', link: 'https://github.com/yangseas' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/algorithm/': [
        {
          title: '算法',
          collapsable: false,
          sidebarDepth: 2,
          children: []
        },
        {
          title: '递归',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['递归/递归', '理解递归']
          ]
        },
        {
          title: '排序',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['排序/排序', '排序算法介绍'],
            '排序/冒泡、插入和选择排序',
            '排序/归并排序和快速排序',
            '排序/桶排序、计数排序和基数排序',
            '排序/排序优化'
          ]
        },
        {
          title: '二分查找',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '二分查找/二分查找',
            '二分查找/二分查找的变形'
          ]
        },
        {
          title: '哈希算法',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '哈希算法/哈希算法'
          ]
        },
        {
          title: '字符串匹配',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '字符串匹配/BK算法和RK算法',
            '字符串匹配/BM算法',
            '字符串匹配/KMP算法'
          ]
        },
        {
          title: '贪心算法',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '贪心算法/贪心算法'
          ]
        },
        {
          title: '分治算法',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '分治算法/分治算法'
          ]
        },
        {
          title: '回溯算法',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '回溯算法/回溯算法'
          ]
        },
        {
          title: '动态规划',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '动态规划/动态规划'
          ]
        }
      ],
      '/dataStructure/': [
        {
          title: '数据结构',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '介绍']
          ]
        },
        {
          title: '数组',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['数组/数组', '介绍'],
            '数组/练习'
          ]
        },
        {
          title: '链表',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['链表/链表', '介绍'],
            '链表/练习'
          ]
        },
        {
          title: '栈',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['栈/栈', '介绍'],
            '栈/练习'
          ]
        },
        {
          title: '队列',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['队列/队列', '介绍'],
            '队列/练习'
          ]
        },
        {
          title: '跳表',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '跳表/跳表'
          ]
        },
      ],
      '/javaScript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '介绍'],
            '执行环境和执行栈',
            '作用域和闭包',
            'this',
            '原型链',
            '深拷贝和浅拷贝',
            '节流函数和防抖函数',
            '函数柯里化',
            '高阶函数',
            'EventEmitter',
            '实现ES5继承',
            '实现call,apply和bind',
            '实现Promise',
            '实现instanceof',
            '实现异步打印',
            '数组去重,扁平化和最值',
            '数组乱序',
            '懒加载',
            '滚动加载',
            '虚拟滚动'
          ]
        },
        {
          title: 'RegExp',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'RegExp/正则表达式',
            'RegExp/RegExp的属性和方法',
            'RegExp/应用'
          ]
        }
      ],
      '/webpack/': [
        {
          title: 'Webpack',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '介绍'],
            'webpack打包过程',
          ]
        },
        {
          title: 'vue-cli2模板解析',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['vue-cli2介绍', '介绍'],
            'vue-cli2模板解析',
          ]
        }
      ],
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true]
  ]
}