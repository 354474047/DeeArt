import {createRouter, createWebHistory} from 'vue-router'
import Index from '../components/common/foreground/index/Index'

const routes = [
  {
    path: '',
    redirect: '/login'
  }
  ,

  {
    path: '/login',
    name: 'login',
    component: () => import('../components/common/foreground/login/Login')
  }
  ,
  {
    path: '/index',
    name: 'Index',
    component: () => import('../components/common/foreground/index/Index'),
    children: [
      {
        path: 'text',
        component: () => import('@/components/common/foreground/index/userUpload/upload/TextUpload')
      },
      {
        path: 'photo',
        component: () => import('@/components/common/foreground/index/userUpload/upload/PhotoUpload')
      },
      {
        path: 'music',
        component: () => import('@/components/common/foreground/index/userUpload/upload/MusicUpload')
      },
      {
        path: 'video',
        component: () => import('@/components/common/foreground/index/userUpload/upload/VideoUpload')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/common/foreground/About/About')
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import('../components/common/foreground/index/topNavigation/TopNavigation')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/common/foreground/profile/Profile')
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
