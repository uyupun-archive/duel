<template>
  <div class="section">
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
