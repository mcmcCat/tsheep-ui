export default {
  base: process.env.NODE_ENV === "production" ? "/tsheep-ui/" : "/",
  // 主题配置
  themeConfig: {
    // 站点标题 (页面左上角标题)
    siteTitle: "TwoYoung UI", //设置成false后，可用logo代替
    // logo: 'imgUrl',
    // 导航栏
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/Basic/Button/" },
    ],
    // 社交平台地址
    socialLinks: [
      // github
      { icon: "github", link: "https://gitee.com/geeksdidi" },
    ],
    // 侧边栏
    sidebar: {
      // 指南
      "/guild/": [
        {
          text: "基础",
          collapsed: false, //折叠按钮，默认展开
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          collapsed: false,
          items: [
            {
              text: "主题切换",
              link: "/guild/theme",
            },
          ],
        },
      ],
      // 组件
      "/components/": [
        {
          text: "Basic 基础组件",
          collapsed: false,
          items: [
            {
              text: "Button 按钮",
              link: "/components/Basic/Button/",
            },
            {
              text: "Icon 图标",
              link: "/components/Basic/Icon/",
            },
            {
              text: "Selector 下拉菜单",
              link: "/components/Basic/Selector/",
            },
            {
              text: "Message 消息提示",
              link: "/components/Basic/Message/",
            },
          ],
        },
        {
          text: "Form 表单组件",
          collapsed: false,
          items: [
            {
              text: "Input 输入框",
              link: "/components/Form/Input/",
            },
            {
              text: "Checkbox 多选框",
              link: "/components/Form/Checkbox/",
            },
          ],
        },
      ],
    },
  },
};
