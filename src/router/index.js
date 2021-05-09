import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue';

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path : '/users', component: Users
        }
      ]
    }
  ]
})

// 挂载路由导航守卫 beforeEach 函数
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 从那个路径跳转而来
  // next 为回调函数，表示放行
  // next() 放行    next('/login') 强制跳转
  if (to.path === '/login') return next();
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token')

  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router
