export default {
  pages: [
    "pages/index/index",
    'pages/mine/index',
    "pages/swiper/index",
    "pages/todo-list/index"
],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: 'pages/index/index',
        text: '้ฆ้กต',
        iconPath: 'assets/imgs/home.png',
        selectedIconPath: 'assets/imgs/home_active.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: 'ๆ็',
        iconPath: 'assets/imgs/mine.png',
        selectedIconPath: 'assets/imgs/mine_active.png',
      },
    ]
  }
};
