<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"               
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router= "true">
    <h3>{{isCollapse?'标题':'出租车轨迹可视化'}}</h3>
    <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path+''">
      <i :class="'el-icon-'+ item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
 
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path+''">
      <template slot="title">
        <i :class="'el-icon-'+ item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
 
<script>
import { computed } from 'vue'; 
import {useStore} from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/view1',
          name: 'view1',
          label: '页面1',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/view2',
          name: 'view2',
          label: '页面2',
          icon: 'user',
          url: 'UserManage/UserManage'
        }
      ]
    }
  },
  computed: {
    noChildren(){
      return this.menu.filter(item => !item.children)
    },
    hasChildren(){
      return this.menu.filter(item => item.children)
     },
    isCollapse(){
      return this.$store.state.isCollapse;
    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
  border: none;
}
.el-menu {
   border: none;
}
.el-menu-item-group__title {
    padding: 0; 
}
 
h3{
    color: aliceblue;
    line-height: 30px; 
}
 
span,.el-menu-item{
  font-size: 16px;
}
 
</style>