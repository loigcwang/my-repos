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
      <!-- <div class="qianming">
        <div class="autograph">
          {{ users.bio }}
        </div>
      </div> -->
      <div class="nax">
        <ul>
          <li>
            <a :href="users.repos_url">
              <p class="reposa">{{ users.public_repos }}</p>
              <p class="reposa">Repo</p>
              <!-- user -->
            </a>
          </li>

          <li>
            <a :href="users.followers_url">
              <p class="contnt">{{ users.followers }}</p>
              <p class="fontsize">Followes</p>
              <!-- Followes -->
            </a>
          </li>

          <li>
            <a :href="users.starred_url">
              <p class="contnt">{{ users.followers }}</p>
              <p class="fontsize">Starred</p>
              <!-- Star -->
            </a>
          </li>
          <li>
            <a :href="users.following_url">
              <p class="contnt">{{ users.following }}</p>
              <p class="fontsize">Following</p>
              <!-- Following -->
            </a>
          </li>
          <li>
            <a :href="users.following_url">
              <p class="contnt">{{ users.following }}</p>
              <p class="fontsize">Start</p>
            </a>
            <!-- Start -->
          </li>
        </ul>
      </div>
      <!-- github user -->
    </header>

    <div>
      <ul class="my-repos">
        <div class="card-item">
          <li class="namebbb" v-for="wang in repos" :key="wang.name">
            <p class="name-repos">{{ wang.name }}</p>
            <span class="language" v-if="repos">{{
              lan.repos
            }}</span>
            <span class="wenben">{{ wang.description }}</span>
          </li>

          <!-- repos -->
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入API接口
import { getUserInfo, getRepos } from "../API/index";
export default {
  data() {
    //参数
    return {
      alt: "xxx",
      title: "test",
      users: {},
      repos: [],
      usersstart: [],
    };
  },
  // 调动接口的方法
  mounted() {
    // reqCategoryList().then((data) => {
    //   // console.log("数据内容>>>>>", data.data);
    //   this.tableData = data.data;
    // });
    // github users
    getUserInfo().then((data) => {
      // console.log(data.data);
      // this.tableData = data.data;
      this.users = data.data;
      console.log("---github个人信息---", this.users);
    });
    // repos
    getRepos(1, 100).then((data) => {
      console.log(data);
      // this.tableData = data.data;
      this.repos = data.data;
      console.dir(this.repos[0]);
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
  margin-top: 1.5625rem;
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
.name {
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  font-size: 1.875rem;
  line-height: 1.875rem;
  height: 1.875rem;
}
.my-repos {
  padding: 1.25rem;
}

/* .my-repos .namebbb {
      padding: 0.3125rem;
    width: 25%;
    float: left;
    margin: 0;
} */
.my-repos li {
  padding: 0.3125rem;
  width: 25%;
}
.card-item {
  background-color: #fff;
  border-radius: 0.3125rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 22%);
  padding: 0.625rem;
}
.wenben {
  height: 4.25rem;
  padding: 0.625rem 0 0.9375rem 0;
  display: block;
  overflow: hidden;
  color: #323232;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  line-height: 1.125rem;
}
</style>