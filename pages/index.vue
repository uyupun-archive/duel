<template>
  <div>
    <h1 class="h1">Duel</h1>
    <input type="text" placeholder="争いの種" class="form-control" v-model="fightName" />
    <router-link to="/duel">
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
