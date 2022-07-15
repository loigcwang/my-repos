<template>
  <div>
    <header class="header-top">
      <div class="img">
        <img :title="title" width="120" :src="users.avatar_url" :alt="alt" />
        <!-- 头像 -->
      </div>
      <div class="users">
        <h1 class="name">{{ users.name }}</h1>
        <!-- 名称-->
      </div>
      <div class="autograph">
        {{ users.bio }}
      </div>
      <div class="nax">
        <ul>
          <li>
            <span class="contant"> {{ users.followers }}</span>
            <span class="label">Repos</span>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
// 引入API接口
import { getUserInfo, reqCategoryList } from "../API/index";

export default {
  data() {
    //参数
    return {
      alt: "xxx",
      title: "test",
      users: {},
    };
  },
  // 两种调动接口的方法
  mounted() {
    reqCategoryList().then((data) => {
      // console.log("数据内容>>>>>", data.data);
      this.tableData = data.data;
    });
    getUserInfo().then((data) => {
      console.log(">>>>>>>>>>", data.data);
      // this.tableData = data.data;
      this.users = data.data;
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

.header-top .nax ul li span {
  color: #bd081c !important;
}
.header-top .nax .contant {
  font-size: 1rem;
  font-weight: bold;
}
</style>