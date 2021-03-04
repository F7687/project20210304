import Vue from "vue";
import VueRouter from "vue-router";

if (!window.VueRouter) {
  Vue.use(VueRouter);
}
//懒加载
const Home = () => import('../views/Home.vue');
// 网路视频
const netVideo = () => import('../views/netVideo/index.vue');
// 库室管理
const warehouseManagement = () => import('../views/warehouseManagement/index.vue');
// 人员管理
const peopleManagement = () => import('../views/peopleManagement/index.vue');
// 日志管理
const logManagement = () => import('../views/logManagement/index.vue');
// 环境检测
const environmentalMonitoring = () => import('../views/environmentalMonitoring/index.vue');
// 系统设置
const systemSetup = () => import('../views/systemSetup/index.vue');


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/netVideo",
    name: "netVideo",
    component: netVideo,
    meta: {
      keepAlive: false,
      title:'网路视频'
    }
  },
  {
    path: "/warehouseManagement",
    name: "warehouseManagement",
    component: warehouseManagement,
    meta: {
      keepAlive: false,
      title:'库室管理'
    }
  },
  {
    path: "/peopleManagement",
    name: "peopleManagement",
    component: peopleManagement,
    meta: {
      keepAlive: false,
      title:'人员管理'
    }
  },
  {
    path: "/logManagement",
    name: "logManagement",
    component: logManagement,
    meta: {
      keepAlive: false,
      title:'日志管理'
    }
  },
  {
    path: "/environmentalMonitoring",
    name: "environmentalMonitoring",
    component: environmentalMonitoring,
    meta: {
      keepAlive: false,
      title:'环境监测'
    }
  },
  {
    path: "/systemSetup",
    name: "systemSetup",
    component: systemSetup,
    meta: {
      keepAlive: false,
      title:'系统管理'
    }
  },
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  // 清空无用的页面缓存
  let toDepth = to.path.split('/').length
  let fromDepth = from.path.split('/').length
  if (toDepth < fromDepth) {
    // console.log('back...')
    from.meta.keepAlive = false
    to.meta.keepAlive = true
  }
  next()
})
export default router;