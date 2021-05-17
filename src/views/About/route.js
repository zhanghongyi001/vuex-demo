const routes = [
  {
    name: "About", // 制冷系统控制常用设备
    path: "/About/index",
    meta: {
      title: "位置设置",
    },
    component: () => import("./About"),
  },

];
export default routes;
