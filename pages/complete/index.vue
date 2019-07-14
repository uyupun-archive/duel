<template>
  <div class="section">
    <img src="@/assets/family_isan_happy.PNG" alt="和解" class="c-solve">
    <h2 class="h2">和解成立！</h2>
    <router-link to="/">
      <button type="button" class="btn btn-primary btn-position">トップへ</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.section {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.c-solve {
  width: 50%;
  margin-top: 30px;
  margin-bottom: 30px;
  transform: rotate(0);
  animation: logo 5s infinite linear;
}

.h2 {
  padding-top: 50px;
}

.btn-position {
  display: inline-block;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
