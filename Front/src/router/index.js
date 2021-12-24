import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/login"
  },
  {
    // path的值，用于匹配浏览器URL中#后面的部分
    path: "/login",
    name: "Login",
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/superadminsystem',
    name: 'Superadminsystem',
    redirect: "/home",
    component: () => import('../views/superadmin/Superadminsystem.vue'),
    children: [{
        path: '/home',
        name: 'Home',
        component: () => import('../components/home/Home.vue')
      }, {
        path: '/adminlist',
        name: 'Adminlist',
        component: () => import('../components/admin/Adminlist.vue')
      },
      {
        path: '/addadmin',
        name: 'Addadmin',
        component: () => import('../components/admin/Addadmin.vue')
      },
      {
        path: '/adddepartment',
        name: 'Adddepartment',
        component: () => import('../components/admin/Adddepartment.vue')
      }, {
        path: '/departmentlist',
        name: 'Departmentlist',
        component: () => import('../components/admin/Departmentlist.vue')
      },
      {
        path: '/goodslist',
        name: 'GoodsList',
        component: () => import('../components/goods/Goodslist.vue')
      },
      {
        path: '/goodstypelist',
        name: 'Goodstypelist',
        component: () => import('../components/goods/Goodstypelist.vue')
      },
      {
        path: '/addgoods',
        name: 'Addgoods',
        component: () => import('../components/goods/Addgoods.vue')
      },
      {
        path: '/addgoodstype',
        name: 'Addgoodstype',
        component: () => import('../components/goods/Addgoodstype.vue')
      },
      {
        path: '/returngoodslist',
        name: 'Returngoodslist',
        component: () => import('../components/goods/returngoodslist.vue')
      }, {
        path: '/shipmentlist',
        name: 'Shipmentlist',
        component: () => import('../components/goods/Shipmentlist.vue')
      },
      {
        path: '/supplierlist',
        name: 'Supplierlist',
        component: () => import('../components/supplier/Supplierlist.vue')
      },
      {
        path: '/addsupplier',
        name: 'Addsupplier',
        component: () => import('../components/supplier/Addsupplier.vue')
      },
      {
        path: '/userlist',
        name: 'Userlist',
        component: () => import('../components/user/Userlist.vue')
      },
      {
        path: '/adduser',
        name: 'Adduser',
        component: () => import('../components/user/Adduser.vue')
      }

    ]

  }, {
    path: '/adminsystem',
    name: 'Adminsystem',
    redirect: "/adminhome",
    component: () => import('../views/admin/Adminsystem.vue'),
    children: [{
        path: '/adminhome',
        name: 'Adminhome',
        component: () => import('../components/home/Adminhome.vue')
      },
      {
        path: '/admingoodslist',
        name: 'Admingoodslist',
        component: () => import('../components/Admingoods/Admingoodslist.vue')
      },
      {
        path: '/admingoodstypelist',
        name: 'Admingoodstypelist',
        component: () => import('../components/Admingoods/Admingoodstypelist.vue')
      },
      {
        path: '/adminaddgoods',
        name: 'Adminaddgoods',
        component: () => import('../components/Admingoods/Adminaddgoods.vue')
      },
      {
        path: '/adminaddgoodstype',
        name: 'Adminaddgoodstype',
        component: () => import('../components/Admingoods/Adminaddgoodstype.vue')
      },
      {
        path: '/adminreturngoodslist',
        name: 'Adminreturngoodslist',
        component: () => import('../components/Admingoods/Adminreturngoodslist.vue')
      }, {
        path: '/adminshipmentlist',
        name: 'Adminshipmentlist',
        component: () => import('../components/Admingoods/Adminshipmentlist.vue')
      },
    ]

  }, {
    path: '/usersystem',
    name: 'Usersystem',
    redirect: "/userhome",
    component: () => import('../views/users/Usersystem.vue'),
    children: [{
        path: '/userhome',
        name: 'Userhome',
        component: () => import('../components/home/Userhome.vue')
      }, {
        path: '/usergoodslist',
        name: 'Usergoodslist',
        component: () => import('../components/goods/Usergoodslist.vue')
      },
      {
        path: '/shoppingcar',
        name: 'Shoppingcar',
        component: () => import('../components/shoppingcar/Shoppingcar.vue')
      },
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router