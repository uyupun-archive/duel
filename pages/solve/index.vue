<template>
  <div>
    <div class="c-h20">
      <router-link to="/complete" class="btn btn-primary c-rotateZ180 d-inline-block">和解する</router-link>
    </div>
    <div class="c-h60">
      <p class="c-rotateZ90">和解しますか？</p>
    </div>
    <div class="c-h20">
      <router-link to="/complete" class="btn btn-primary c-translateY125 d-inline-block">和解する</router-link>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.c-rotateZ {
  &180 {
    transform: rotateZ(180deg) translateY(-125%);
  }
  &90 {
    transform: rotateZ(90deg) translateX(50%);
  }
}

.c-translateY125 {
  transform: translateY(125%);
}

.c-h {
  &60 {
    height: 60vh;
  }
  &20 {
    height: 20vh;
  }
}
</style>
