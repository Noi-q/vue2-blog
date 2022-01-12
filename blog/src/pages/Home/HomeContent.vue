<template>
  <div>
    <div class="content">
      <ul>
        <li v-for="(c,index) in content" :key="index">
          <a href="">{{c.title}}</a>
          <br>
          <i>{{c.introduce}}</i>
          <p>发布时间：{{c.date}}</p>
          <div></div>
        </li>
      </ul>
    </div>
    <!-- 全局组件 -->
    <Nav/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "HomeContent",
    mounted(){
      console.log(mapState,this)
    },
    computed:{
      ...mapState({
        'content':state=>state.Home.content
      })
    }
  }
</script>

<style lang="less" scoped>
.content{
  width:900px;
  //background-color:gray;
  float:left;
  //text-align: center;
  ul{
    li{
      margin-top:10px;
      a{
        text-decoration: none;
        color:black;
        //line-height:20px;
        font-size:38px;
      }
      a:hover{
        color:#276b8c;
      }
      i{
        //line-height:20px;
        font-size:16px;
        color:gray;
      }
      i:hover{
        color:#276b8c;
        cursor: pointer;
      }
      div{
        margin-top:20px;
        border: .5px solid #ddd;
      }
    }
  }
}
</style>