<template>
  <div>
    <h1 class="c-h1">Duel</h1>
    <div class="c-logo">ロゴ</div>
    <input type="text" placeholder="争いの種" class="form-control c-textBox" v-model="fightName" />
    <router-link to="/duel" class="link">
      <button type="button" class="btn btn-primary" :disabled="validateFightName()">スタンバイ</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fightName: '',
    }
  },
  methods: {
    validateFightName() {
      if (this.fightName.length >= 5 && this.fightName.length <= 20) return false;
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
.c-h1 {
  padding-top: 30px;
  margin-bottom: 50px;
}

.c-logo {
  margin-bottom: 30px;
}

.c-textBox {
  margin-bottom: 30px;
}
</style>
