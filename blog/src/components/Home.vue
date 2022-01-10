<template>
  <div class="Home">
    <div class="Header">
      <div class="nav">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="">目录</a></li>
          <li><a href="">留言区</a></li>
          <li><a href="">关于我</a></li>
          <li><a href="">链接</a></li>
        </ul>
      </div>
      <div class="nav-name">
        <i>NOI-Q BLOG</i>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <ul>
          <li v-for="c in content" :key="c.id">
            <a href="">{{c.title}}</a>
            <br>
            <i>{{c.introduce}}</i>
            <p>发布时间：{{c.date}}</p>
            <div></div>
          </li>
        </ul>
      </div>
      <div class="user">
        <div class="hr"></div>
        <br>
        <span>博客导航</span>
        <br><br>
        <div class="link">
          <img src="../assets/vr.jpg" alt="">
        </div>
        <br>
        <div class="link2">
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-phone"></i>
          <i class="el-icon-menu"></i>
          <i class="el-icon-link"></i>
        </div>
        <br>

        <div class="hr"></div>
        <br>
        <span>标签</span>
        <br><br>
        <div class="link3">
          <el-button round class="btn">HTML</el-button>
          <el-button round class="btn">CSS</el-button>
          <el-button round class="btn">Javascript</el-button>
          <el-button round class="btn">Vue.js</el-button>
          <el-button round class="btn">Python</el-button>
          <el-button round class="btn">Lua</el-button>
          <el-button round class="btn">Shell</el-button>
          <el-button round class="btn">ArchLinux</el-button>
          <el-button round class="btn">Vim</el-button>
        </div>
        <br>
        <div class="hr"></div>
        <br>
        <span>热门文章</span>
        <br><br>
        <div class="link4">
          <a href="">123456789</a>
          <a href="">123456789</a>
          <a href="">123456789</a>
          <a href="">123456789</a>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <i class="el-icon-s-promotion"></i>
        <i class="el-icon-phone"></i>
        <i class="el-icon-menu"></i>
        <i class="el-icon-link"></i>
      </div>
      <div class="footer-hr"></div>
      <div class="context">Copyright©2022 | by Noi-q</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        content:[
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          },
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          },
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          },
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          },
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          },
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          },
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          },
          {
            id:'001',
            title:'Hello Wrold!',
            introduce:'基于HTML5的在线文档',
            date:Date.now()
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.Home{
  //background-color:skyblue;
  .Header{
    background-color:#323638;
    height:300px;
    overflow:hidden;
    box-shadow:0 5px rgba(136, 166, 181,0.3);
    .nav{
      margin-top:40px;
      //background-color:gray;
      //height:80px;
      ul{
        //height:80px;
        //background-color:red;
        text-align:center;
        list-style:none;
        li{
          display: inline-block;
          a{
            text-decoration: none;
            margin:0 20px;
            color:white;
            font-weight: bold;
            font-size:30px;
          }
        }
        li,a:hover {
          color:#C0C0C0;
        }
      }
    }
    .nav-name{
      margin-top:50px;
      text-align: center;
      font-size:50px;
      color:#5cbded;
    }
  }
  .main{
    user-select:none;
    width: 1300px;
    //background-color:red;
    margin:0 auto;
    overflow: hidden;
    margin-top:60px;
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
    .user{
      //margin-top:20px;
      width:390px;
      //background-color:green;
      float:right;
      .hr{
        border: 1px solid #ddd;
      }
      .link{
        //margin:0 auto;
        text-align: center;
        img{
          width:200px;
          height:200px;
        }
      }
      span{
        color: #575f63;
      }
      .link2{
        //background-color:gray;
        text-align: center;
        i{
          //width:100px;
          background-color:#C0C0C0;
          font-size:50px;
          cursor: pointer;
          margin:0 20px;
          border-radius:50px;
          color:white;
        }
      }
      .link3{
        .btn{
          margin-left:10px;
          margin-bottom: 2px;
          line-height:10px;
        }
      }
      .link4{
        a{
          display: block;
        }
      }
    }
  }
  .footer{
    width:100%;
    height:300px;
    margin-top:30px;
    background-color:gray;
    .footer-link{
      padding:60px;
      text-align: center;
      i{
        //background-color:#C0C0C0;
        font-size:50px;
        cursor: pointer;
        margin:0 20px;
        border-radius:50px;
        color:white;
      }
    }
    .footer-hr{
      width:900px;
      margin:0 auto;
      border: 1px solid #ddd;
    }
    .context{
      //width:100%;
      margin-top: 60px;
      text-align: center;
    }
  }
}

</style>