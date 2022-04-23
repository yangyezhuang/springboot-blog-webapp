<template>
  <div>
    <el-footer>
      <div class="footer">
        <div>
          <h4 style="margin: 0">Sun博客</h4><br>
          <a href="https://blog.csdn.net/qq_47183158">CSDN</a> |
          <a href="https://github.com/yangyezhuang">Github</a> |
          <a href="http://localhost:8080/admin">后台管理</a>
          <br>
          <!--  <img src="../../assets/image/logo1.png" alt="" style="height: 40px"> -->
          <p>Copyright © 2022 Yang Yezhuang. All Rights Reserved.</p>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.el-footer {
  padding: 0;
}

.footer {
  height: 90px;
  background-color: white;
}

p {
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
}

a {
  font-size: 15px;
  text-decoration: none;
  color: black;
}

</style>
