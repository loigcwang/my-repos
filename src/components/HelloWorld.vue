<template>
  <div>
    <header class="header-top">
      <div class="img">
        <img :title="title" width="100" :src="users.avatar_url" :alt="alt" />
        <!-- 头像 -->
      </div>
      <div class="users">
        <h1 class="name">{{ users.name }}</h1>
        <!-- 名称-->
      </div>
      <div class="qianming">
        <div class="autograph">
          {{ users.bio }}
        </div>
      </div>
      <div class="nax">
        <ul>
          <li>
            <a :href="users.repos_url">
              <p class="reposa">{{ users.public_repos }}</p>
              <p class="reposa">Repos</p>
              <!-- fork和个人仓库 -->
            </a>
          </li>

          <li>
            <a :href="users.followers_url">
              <p class="contnt">{{ users.followers }}</p>
              <p class="fontsize">Followes</p>
              <!-- 跟随者 -->
            </a>
          </li>

          <li>
            <a :href="users.starred_url">
              <p class="contnt">{{ users.followers }}</p>
              <p class="fontsize">Starred</p>
              <!-- start仓库 -->
            </a>
          </li>
          <li>
            <a :href="users.following_url">
              <p class="contnt">{{ users.following }}</p>
              <p class="fontsize">Following</p>
              <!-- 被跟随者 -->
            </a>
          </li>
          <li>
            <a :href="users.following">
              <p class="contnt">{{ users.following }}</p>
              <p class="fontsize">Start</p>
            </a>
            <!-- 点赞仓库 -->
          </li>
        </ul>
      </div>
      <!-- github个人信息 -->
    </header>

    <div>
      <li>
          <p class="reposa">{{ usersrepos.name }}</p>
          <p class="reposa">Repos</p>
          <!-- fork和个人仓库 -->
      </li>
    </div>
  </div>
</template>

<script>
// 引入API接口
import { getUserInfo, Repositories } from "../API/index";
export default {
  data() {
    //参数
    return {
      alt: "xxx",
      title: "test",
      users: {},
      usersrepos: [{
        name:" ",
      }],
    };
  },
  // 调动接口的方法
  mounted() {
    // reqCategoryList().then((data) => {
    //   // console.log("数据内容>>>>>", data.data);
    //   this.tableData = data.data;
    // });
    // 个人信息
    getUserInfo().then((data) => {
      console.log(data.data);
      // this.tableData = data.data;
      this.users = data.data;
    });
    // 仓库信息
    Repositories().then((data) => {
      console.log(data.data);
      // this.tableData = data.data;
      this.usersrepos = data.data;
      console.log('------------', this.usersrepos)

    });
  },
};
</script>

<style >
.header-top {
  position: relative;
  padding: 1.875rem 0.9375rem 0 0.9375rem;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 1px 0 0 rgb(0 0 0 / 10%);
  text-align: center;
}
.header-top .img {
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f8f8f8;
  border: 0.0625rem solid #ebebeb;
}
.header-top.users .name {
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  font-size: 1.875rem;
  line-height: 1.875rem;
  height: 1.875rem;
}
.header-top.nax {
  text-align: center;
  border-top: 1px solid #efefef;
  padding: 0 0 0.9375rem 0;
  margin-top: 1.5625rem;
}
.header-top.nax ul {
  margin: 0.8125rem auto 0;
  display: table;
  table-layout: fixed;
}
ul,
li {
  list-style: none;
}
.header-top .nax {
  text-align: center;
  border-top: 1px solid #efefef;
  padding: 0 0 0.9375rem 0;
  margin-top: 1.15rem;
}
.header-top .nax .repos {
  color: #bd081c !important;
}
.header-top .nax ul {
  margin: 0.8125rem auto 0;
  display: table;
  table-layout: fixed;
}
.header-top .nax ul li {
  display: table-cell;
  width: 6.25rem;
}
.header-top .nax ul li span {
  color: #bd081c !important;
}
.header-top .nax .contant {
  font-size: 1rem;
  font-weight: bold;
}
.header-top .nax ul a {
  color: #333;
}
.fontsize {
  font-size: 0.75rem;
  color: #9a9a9a;
}
.reposa {
  /* font-size: .75rem; */
  color: #bd081c !important;
}
a {
  text-decoration: none;
}
.contnt {
  font-size: 1rem;
  font-weight: bold;
}
.header-top .nax .contnt {
  font-weight: bold;
}
</style>