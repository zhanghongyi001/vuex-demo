const routes = [
  {
    name: "Home", // 制冷系统控制常用设备
    path: "/Home/index",
    meta: {
      title: "位置设置",
    },
    component: () => import("./Home"),
  },

];
export default routes;
