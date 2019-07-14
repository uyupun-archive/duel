<template>
  <div class="section">
    <h2 class="h2">和解成立！</h2>
    <div v-for="index in 10" :key="index" class="star">
      <div class="star-cover is-right"></div>
      <div class="star-cover is-left"></div>
    </div>
    <img src="@/assets/family_isan_happy.png" alt="和解" class="c-solve">
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
  width: 80%;
  max-width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.h2 {
  padding-top: 100px;
}

.btn-position {
  display: inline-block;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.star {
  position: relative;
  height: 30px;
  width: 30px;
  background-color: #FFC402;
  opacity: 1;
  animation: star 1s linear infinite;
  &:nth-of-type(2n) {
    animation-delay: 0.5s;
    transform: rotate(25deg) scale(0.5);
  }
  &:nth-of-type(2n - 1) {
    transform: rotate(-25deg) scale(0.5);
  }
  &:nth-of-type(1){
    top: 0;
    left: 0;
  }
  &:nth-of-type(2){
    top: 0;
    left: 0;
  }
  &:nth-of-type(3){
    top: 0;
    left: 0;
  }
  &:nth-of-type(4){
    top: 0;
    left: 0;
  }
  &:nth-of-type(5){
    top: 0;
    left: 0;
  }
  &:nth-of-type(6){
    top: 0;
    left: 0;
  }
  &:nth-of-type(7){
    top: 0;
    left: 0;
  }
  &:nth-of-type(8){
    top: 0;
    left: 0;
  }
  &:nth-of-type(9){
    top: 0;
    left: 0;
  }
  &:nth-of-type(10){
    top: 0;
    left: 0;
  }
  &-cover {
    &:before, &:after {
      background-color: #fff;
      position: absolute;
      content: '';
      display: block;
      height: 18px;
      width: 18px;
      box-sizing: border-box;
    }
    &.is-left {
      &:before {
        top: 18px;
        left: 0;
        border-right: 1px solid #f2c820;
        border-top: 1px solid #f2c820;
        border-top-right-radius: 70%;
      }
      &:after {
        top: 0;
        left: 0;
        border-bottom: 1px solid #f2c820;
        border-right: 1px solid #f2c820;
        border-bottom-right-radius: 70%;
      }
    }
    &.is-right {
      &:before {
        top: 18px;
        left: 18px;
        border-top: 1px solid #f2c820;
        border-left: 1px solid #f2c820;
        border-top-left-radius: 70%;
      }
      &:after {
        top: 0;
        left: 18px;
        border-left: 1px solid #f2c820;
        border-bottom: 1px solid #f2c820;
        border-bottom-left-radius: 70%;
      }
    }
  }
}

@keyframes star {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
