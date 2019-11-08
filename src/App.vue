<template>
  <div class="mwWrapper">
    <router-view/>
  </div>
</template>

<script>
// import * as cd from './web.config/getCode.js'
export default {
  name: "App",
  created() {
    // window.location.href = cd.weixin;
    this.$get("/api/docs/api/id/64").then(
      res => {
        console.log(res);
      }
    );
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

ol,
ul,
li {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-family: "Open Sans Bold";
}

a {
  text-decoration: none;
}

address,
em,
i {
  font-style: normal;
}

small {
  font-size: 12px;
}

input,
textarea,
select,
button {
  font: inherit;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 30px #ffffff inset !important;
  box-shadow: 0 0 0px 30px #ffffff inset !important;
}

body {
  font: 14px/1 "Open Sans Regular";
  background-color: #eeeeee;
}

.mwWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eeeeee;
}
</style>
