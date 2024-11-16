// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue'
import View1 from '../views/view1.vue';
import View2 from '@/views/view2.vue';

const routes = [  
  {  
    path : "/",
    name: 'home',
    component: Index
  },
  {  
    path : "/view1",
    name: 'view1',
    component: View1
  },
  {  
    path : "/view2",
    name: 'view2',
    component: View2
  }
];  

const router = createRouter({  
  history: createWebHistory(),  
  routes,  
});  

export default router;  