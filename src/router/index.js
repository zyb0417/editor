import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Table from '@/components/Table'
import Ue from '@/components/Ue'
import Pagination from '@/components/Pagination'
import Breadcrumb from '@/components/Breadcrumb'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    // {
    //   path: '/ue',
    //   name: 'Ue',
    //   component: Ue
    // }
  ]
})
