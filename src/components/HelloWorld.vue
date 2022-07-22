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

          <li class="followes">
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
        <div class="flex">
          <li class="card-item" v-for="wang in repos" :key="wang.name">
            <a :href="wang.html_url">
              <p class="wang">{{ wang.name }}</p>
            </a>

            <span class="language">{{ wang.language }}</span>
            <div class="dex">
              <span>
                <a :href="wang.starUrl" class="star">
                  Star
                  <i class="count">{{ wang.stargazers_count }}</i>
                </a>
              </span>
              <span>
                <a :href="wang.forkUrl" class="star">
                  Fork
                  <i class="count">{{ wang.forks }}</i>
                </a>
              </span>
              <span>
                <a :href="wang.html_url" class="star">
                  Home
                  <i class="count">{{ wang.forks }}</i>
                </a>
              </span>
            </div>
            <span class="wenben">{{ wang.description }}</span>
            <div class="clear"></div>
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
      this.repos = data.data.map((item) => {
        return {
          ...item,
          starUrl: `https://github.com/${item.full_name}/stargazers`,
          forkUrl:  `https://github.com/${item.full_name}/network/members`,
        };
      });
      console.dir(this.repos[0]);
    });
  },
};
</script>

<style >
.clear {
  clear: both;
}
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
  width: 23%;
  /* float: left; */
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
.my-repos.card-item a {
  float: left;
  font-size: 1rem;
}
.card-item:hover {
  box-shadow: 0 1px 2px 0 rgba(0, 105, 255, 0.69);
}
.wang {
  float: left;
  color: #33374b;
  font-weight: 800;
  font-size: 1rem;
}
.language {
  display: block;
  line-height: 1.4375rem;
  height: 1.4375rem;
  font-size: 0.875rem;
  text-align: right;
  color: #8e8e8e;
}
.flex {
  gap: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.dex {
  padding-top: 0.625rem;
}
.my-repos .flex .card-item .dex .star {
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.1875rem;
  padding-left: 0.3125rem;
  line-height: 1.125rem;
  display: inline-block;
  font-size: 0.75rem;
  background-color: #efefef;
  color: #000;
  overflow: hidden;
  margin-left: 4px;
}
.my-repos .flex .card-item .dex .star:hover {
    color: #bd081c;
    background-color: #ffecec;
    border: .0625rem solid #bd081c
}
.my-repos .flex .card-item .dex .count {
  line-height: 1.125rem;
  display: inline-block;
  padding: 0 0.3125rem;
  background-color: #fff;
  margin-left: 0.3125rem;
  font-style: inherit;
  font-weight: bold;
}
</style>