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
const warehouseManagementAmmunitionDepot = () => import('../views/warehouseManagement/ammunitionDepot/index.vue');
const warehouseManagementViewBulletCabinet = () => import('../views/warehouseManagement/viewBulletCabinet/index.vue');

/* 人员管理*/
const peopleManagement = () => import('../views/peopleManagement/index.vue');
// 录入人脸
const peopleManagementInputFace = () => import('../views/peopleManagement/inputFace/index.vue');
// 录入指纹
const peopleManagementInputFingerprint = () => import('../views/peopleManagement/inputFingerprint/index.vue');
// 录入密码
const peopleManagementInputPwd = () => import('../views/peopleManagement/inputPwd/index.vue');
/* 人员管理*/

/* 日志管理*/
const logManagement = () => import('../views/logManagement/index.vue');
const logManagementLogDetail= () => import('../views/logManagement/logDetail/index.vue');
/* 日志管理*/

// 环境检测
const environmentalMonitoring = () => import('../views/environmentalMonitoring/index.vue');

// 系统设置
const systemSetup = () => import('../views/systemSetup/index.vue');
// 系统设置-基本信息
const systemSetupBaseInfo = () => import('../views/systemSetup/baseInfo/index.vue');
// 系统设置-网络设置
const systemSetupNetSetting = () => import('../views/systemSetup/netSetting/index.vue');
// 系统设置-库室设置 
const systemSetupWarehouseSetting = () => import('../views/systemSetup/warehouseSetting/index.vue');
// 系统设置-库室设置 -查看柜体
const systemSetupViewCabinet= () => import('../views/systemSetup/viewCabinet/index.vue');
// 系统设置-库室设置 -查看枪支柜体
const systemSetupViewGunCabinet= () => import('../views/systemSetup/viewGunCabinet/index.vue');
// 系统设置-库室设置 -查看弹库
const systemSetupViewMagazine= () => import('../views/systemSetup/viewMagazine/index.vue');
// 系统设置-库室设置 -查看弹库柜
const systemSetupViewMagazineCabinet= () => import('../views/systemSetup/viewMagazineCabinet/index.vue');
// 系统设置-库室设置 -去皮校准
const systemSetupTareCalibration= () => import('../views/systemSetup/tareCalibration/index.vue');

// 系统设置-报警设置
const systemSetupCallPoliceSetting = () => import('../views/systemSetup/callPoliceSetting/index.vue');
// 系统设置-环境设置
const systemSetupEnvironmentSetting = () => import('../views/systemSetup/environmentSetting/index.vue');
// 系统设置-验证设置
const systemSetupVerifySettings = () => import('../views/systemSetup/verifySettings/index.vue');
// 系统设置-关于系统
const systemSetupAboutSystem = () => import('../views/systemSetup/aboutSystem/index.vue');
// 系统设置-时间设置
const systemSetupTimeSetting = () => import('../views/systemSetup/timeSetting/index.vue');
// 系统设置-密码设置
const systemSetupPasswordSetting = () => import('../views/systemSetup/passwordSetting/index.vue');
// 系统设置-延时设置
const systemSetupDelaySetting = () => import('../views/systemSetup/delaySetting/index.vue');

/* 系统调试 hardwareTest */  
// 网络设置 systemDebugging-netSetting
const systemDebugging=()=>import('../views/systemDebugging/index.vue');
const systemDebuggingHardwareTest=()=>import('../views/systemDebugging/hardwareTest/index.vue');
const systemDebuggingNetSetting=()=>import('../views/systemDebugging/netSetting/index.vue');

/* 系统调试 */

// 钥匙管理 
const keyManagement = () => import('../views/keyManagement/index.vue');
// 选择验证方式
const keyManagementVerification = () => import('../views/keyManagement/verification/index.vue');
const keyManagementMultiFace = () => import('../views/keyManagement/multiFace/index.vue');
const keyManagementMultiFaceFingerprint = () => import('../views/keyManagement/multiFaceFingerprint/index.vue');
const keyManagementFacePwd = () => import('../views/keyManagement/facePwd/index.vue');
const keyManagementFingerprintPwd = () => import('../views/keyManagement/fingerprintPwd/index.vue');
const keyManagementDynamicPwd = () => import('../views/keyManagement/dynamicPwd/index.vue');
const keyManagementVerifyIdentidy = () => import('../views/keyManagement/verifyIdentidy/index.vue');


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
      { //弹药库
        path: "/warehouseManagement/ammunitionDepot",
        name: "warehouseManagement-ammunitionDepot",
        component: warehouseManagementAmmunitionDepot,
        meta: {
          keepAlive: false,
          title: '库室管理'
        },
      },
      {
        path: "/warehouseManagement/viewBulletCabinet",
        name: "warehouseManagement-viewBulletCabinet",
        component: warehouseManagementViewBulletCabinet,
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
    path: "/peopleManagement/inputFace",
    name: "peopleManagement-inputFace",
    component: peopleManagementInputFace,
    meta: {
      keepAlive: false,
      title: '录入人脸管理'
    },
  },
  {
    path: "/peopleManagement/inputFingerprint",
    name: "peopleManagement-inputFingerprint",
    component: peopleManagementInputFingerprint,
    meta: {
      keepAlive: false,
      title: '录入指纹管理'
    },
  },
  {
    path: "/peopleManagement/inputPwd",
    name: "peopleManagement-inputPwd",
    component: peopleManagementInputPwd,
    meta: {
      keepAlive: false,
      title: '录入密码管理'
    },
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
    path: "/logManagement/logDetail",
    name: "logManagement-logDetail",
    component: logManagementLogDetail,
    meta: {
      keepAlive: false,
      title: '日志详情'
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
    children: [{
        path: "/systemSetup/aboutSystem",
        name: "systemSetup-aboutSystem",
        component: systemSetupAboutSystem,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 基本信息
        path: "/systemSetup/baseInfo",
        name: "systemSetup-baseInfo",
        component: systemSetupBaseInfo,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 网络设置
        path: "/systemSetup/netSetting",
        name: "systemSetup-netSetting",
        component: systemSetupNetSetting,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 库室设置 
        path: "/systemSetup/warehouseSetting",
        name: "systemSetup-warehouseSetting",
        component: systemSetupWarehouseSetting,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 库室设置 -查看柜体
        path: "/systemSetup/viewCabinet",
        name: "systemSetup-viewCabinet",
        component: systemSetupViewCabinet,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 库室设置 -查看枪支柜体
        path: "/systemSetup/viewGunCabinet",
        name: "systemSetup-viewGunCabinet",
        component: systemSetupViewGunCabinet,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
			{
        // 库室设置 -查看弹库
        path: "/systemSetup/viewMagazine",
        name: "systemSetup-viewMagazine",
        component: systemSetupViewMagazine,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 库室设置 -查看弹仓
        path: "/systemSetup/viewMagazineCabinet",
        name: "systemSetup-viewMagazineCabinet",
        component: systemSetupViewMagazineCabinet,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      }, 
      {
        // 库室设置 -去皮校准
        path: "/systemSetup/tareCalibration",
        name: "systemSetup-tareCalibration",
        component: systemSetupTareCalibration,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      }, 
      {
        // 报警设置 
        path: "/systemSetup/callPoliceSetting",
        name: "systemSetup-callPoliceSetting",
        component: systemSetupCallPoliceSetting,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 环境设置 
        path: "/systemSetup/environmentSetting",
        name: "systemSetup-environmentSetting",
        component: systemSetupEnvironmentSetting,
        meta: {
          keepAlive: false,
          title: '系统设置'
        },
      },
      {
        // 验证设置 
        path: "/systemSetup/verifySettings",
        name: "systemSetup-verifySettings",
        component: systemSetupVerifySettings,
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
  {
    path: "/keyManagement/verification",
    name: "keyManagement-verification",
    component: keyManagementVerification,
    meta: {
      keepAlive: false,
      title: '选择验证方式'
    },
  },
  {
    path: "/verification/multiFace",
    name: "keyManagement-multiFace",
    component: keyManagementMultiFace,
    meta: {
      keepAlive: false,
      title: '多人人脸验证'
    },
  },
  {
    path: "/verification/multiFaceFingerprint",
    name: "keyManagement-multiFaceFingerprint",
    component: keyManagementMultiFaceFingerprint,
    meta: {
      keepAlive: false,
      title: '人脸+指纹验证'
    },
  },
  {
    path: "/verification/facePwd",
    name: "keyManagement-facePwd",
    component: keyManagementFacePwd,
    meta: {
      keepAlive: false,
      title: '人脸+密码验证'
    },
  },
  {
    path: "/verification/fingerprintPwd",
    name: "keyManagement-fingerprintPwd",
    component: keyManagementFingerprintPwd,
    meta: {
      keepAlive: false,
      title: '指纹+密码验证'
    },
  },
  {
    path: "/verification/dynamicPwd",
    name: "keyManagement-dynamicPwd",
    component: keyManagementDynamicPwd,
    meta: {
      keepAlive: false,
      title: '动态密码'
    },
  },
  {
    path: "/verification/verifyIdentidy",
    name: "keyManagement-verifyIdentidy",
    component: keyManagementVerifyIdentidy,
    meta: {
      keepAlive: false,
      title: '请验证管理员身份信息'
    },
  },
  {
    path: "/systemDebugging",
    name: "systemDebugging",
    component: systemDebugging,
    meta: {
      keepAlive: false,
      title: '系统调试'
    },
    children:[
      {
        path: "/systemDebugging/netSetting",
        name: "systemDebugging-netSetting",
        component: systemDebuggingNetSetting,
        meta: {
          keepAlive: false,
          title: '系统调试'
        },
      },
      {
        path: "/systemDebugging/hardwareTest",
        name: "systemDebugging-hardwareTest",
        component: systemDebuggingHardwareTest,
        meta: {
          keepAlive: false,
          title: '系统调试'
        },
      },
    ]
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
    from.meta.keepAlive = false
    to.meta.keepAlive = true
  }
  next()
})
export default router;