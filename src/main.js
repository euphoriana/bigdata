import { createApp } from 'vue';  
import App from './App.vue';  
import {   
    Button, Container, Aside, Header, Main, Radio,   
    RadioGroup, RadioButton, Menu, Submenu, MenuItem,   
    MenuItemGroup, Row, Col, Avatar, Dropdown,   
    DropdownMenu, DropdownItem, Card, Table,   
    TableColumn, Calendar, Divider   
} from 'element-plus';  
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'; // Element Plus 样式  
import { createRouter, createWebHistory } from 'vue-router';  
import router from './router/router_Config';  
import store from './store'; // 导入 Vuex store  

// 创建应用实例  
const app = createApp(App);  

// 使用 Element Plus 组件  
app.use(Button);  
app.use(Container);  
app.use(Aside);  
app.use(Header);  
app.use(Main);  
app.use(Radio);  
app.use(RadioGroup);  
app.use(RadioButton);  
app.use(Menu);  
app.use(Submenu);  
app.use(MenuItem);  
app.use(MenuItemGroup);  
app.use(Row);  
app.use(Col);  
app.use(Avatar);  
app.use(Dropdown);  
app.use(DropdownMenu);  
app.use(DropdownItem);  
app.use(Card);  
app.use(Table);  
app.use(TableColumn);  
app.use(Calendar);  
app.use(Divider);  

// 将路由添加到应用实例中  
app.use(router);  
app.use(store);
app.use(ElementPlus); 
// 禁用生产提示  
app.config.productionTip = false;  

// 挂载应用  
app.mount('#app');