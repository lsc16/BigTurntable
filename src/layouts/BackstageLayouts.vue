<template>
    <el-container>
        <el-header>
            <el-header style="text-align: right; font-size: 12px">

            </el-header>
        </el-header>
        <el-container>
            <el-aside width="256px">
                <el-menu
                    router
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    class="pageMenu"
                >
                    <el-menu-item v-for="(item,index) in routes" :key="item.name+index" :index="item.path">
                        <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="pageContainer">
                <router-view class="pageRouterView" />
                <el-footer class="pageFooter">
                    Copyright © 练习模板
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
  export default {
    name: "BackstageLayouts",
    data() {
      return {
        backstage:'',
        routes:[],
      }
    },
    created(){
      const backstage=this.$route.path.split('/')[1];
      if(backstage){
        let routes=this.$router.options.routes;
        routes=JSON.parse(JSON.stringify(routes.find((obj)=>obj.path.indexOf(backstage)>=0)));
        if(routes){
          this.routes=routes.children.map((obj)=>{
            return {
              path:`/${backstage}/${obj.path}`,
              name:obj.name,
            };
          });
          console.log('this.routes',this.routes,this.$router.options.routes)
        }
      }
    }
  };
</script>

<style scoped>
    .pageMenu{
        height: calc(100vh - 60px);
        overflow: auto;
    }
    .pageRouterView{
        min-height: calc(100vh - 120px);
    }
    .pageContainer{
        height: calc(100vh - 60px);
        overflow: auto;
    }
    .pageFooter{
        background-color: #545C64;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
</style>
