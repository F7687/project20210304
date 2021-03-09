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
const warehouseManagementIndex = () => import('../views/warehouseManagement/index/index.vue');
const warehouseManagementViewGunCabinet = () => import('../views/warehouseManagement/viewGunCabinet/index.vue');
// 人员管理
const peopleManagement = () => import('../views/peopleManagement/index.vue');
// 日志管理
const logManagement = () => import('../views/logManagement/index.vue');
// 环境检测
const environmentalMonitoring = () => import('../views/environmentalMonitoring/index.vue');
// 系统设置
const systemSetup = () => import('../views/systemSetup/index.vue');
// 系统设置-关于系统
const systemSetupAboutSystem = () => import('../views/systemSetup/aboutSystem/index.vue');
// 系统设置-时间设置
const systemSetupTimeSetting = () => import('../views/systemSetup/timeSetting/index.vue');
// 系统设置-密码设置
const systemSetupPasswordSetting = () => import('../views/systemSetup/passwordSetting/index.vue');
// 系统设置-延时设置
const systemSetupDelaySetting = () => import('../views/systemSetup/delaySetting/index.vue');

// 钥匙管理
const keyManagement = () => import('../views/keyManagement/index.vue');


const routes = [{
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
      title: '网路视频'
    }
  },
  {
    path: "/warehouseManagement",
    name: "warehouseManagement",
    component: warehouseManagement,
    meta: {
      keepAlive: false,
      title: '库室管理'
    },
    children: [{
        path: "/warehouseManagement/index",
        name: "warehouseManagement-index",
        component: warehouseManagementIndex,
        meta: {
          keepAlive: false,
          title: '库室管理'
        },
      },
      {
        path: "/warehouseManagement/viewGunCabinet",
        name: "warehouseManagement-viewGunCabinet",
        component: warehouseManagementViewGunCabinet,
        meta: {
          keepAlive: false,
          title: '库室管理'
        },
      },
    ]
  },
  {
    path: "/peopleManagement",
    name: "peopleManagement",
    component: peopleManagement,
    meta: {
      keepAlive: false,
      title: '人员管理'
    }
  },
  {
    path: "/logManagement",
    name: "logManagement",
    component: logManagement,
    meta: {
      keepAlive: false,
      title: '日志管理'
    }
  },
  {
    path: "/environmentalMonitoring",
    name: "environmentalMonitoring",
    component: environmentalMonitoring,
    meta: {
      keepAlive: false,
      title: '环境监测'
    }
  },
  {
    path: "/systemSetup",
    name: "systemSetup",
    component: systemSetup,
    meta: {
      keepAlive: false,
      title: '系统设置'
    },
    children: [
      {
        path: "/systemSetup/aboutSystem",
        name: "systemSetup-aboutSystem",
        component: systemSetupAboutSystem,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 时间设置
        path: "/systemSetup/timeSetting",
        name: "systemSetup-timeSetting",
        component: systemSetupTimeSetting,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 密码设置
        path: "/systemSetup/passwordSetting",
        name: "systemSetup-passwordSetting",
        component: systemSetupPasswordSetting,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 延时设置
        path: "/systemSetup/delaySetting",
        name: "systemSetup-delaySetting",
        component: systemSetupDelaySetting,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
    ]
  },
  {
    path: "/keyManagement",
    name: "keyManagement",
    component: keyManagement,
    meta: {
      keepAlive: false,
      title: '钥匙管理'
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