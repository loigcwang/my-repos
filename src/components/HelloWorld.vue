<template>
  <div>
    <img src="https://avatars.githubusercontent.com/u/81006817?v=4" alt="我的头像"/>
    <div>{{ users.name }}</div>
  </div>
</template>

<script>
import { getUserInfo, reqCategoryList } from "../API/index";

export default {
  data() {
    return {
      users: {},
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      console.log("数据内容>>>>>", data.data);
      this.tableData = data.data;
    });
    getUserInfo().then((data) => {
      console.log("数据内容>>>>>", data.data);
      // this.tableData = data.data;
      this.users = data.data;
    });
  },
};
</script>
<style >
.header {
  position: relative;
  padding: 1.875rem 0.9375rem 0 0.9375rem;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 1px 0 0 rgb(0 0 0 / 10%);
  text-align: center;
}
.background {
  background: #fff;
}
.header {
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f8f8f8;
  border: 0.0625rem solid #ebebeb;
}
.header img {
  width: 6.25rem;
  height: 6.25rem;
}
</style>