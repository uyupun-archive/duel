<template>
  <div class="section">
    <b-modal id="turn-modal" hide-header hide-footer>
      <h3 class="h3 text-center">1ターン目</h3>
      <b-button variant="primary" block @click="$bvModal.hide('turn-modal')">OK</b-button>
    </b-modal>

    <div class="reverse c-h15">
      <p class="mb-2">2:00</p>
      <router-link to="/solve">
        <button class="btn btn-primary">話し終わる</button>
      </router-link>
    </div>

    <div class="deck c-h70"></div>

    <div class="c-h15 c-translateY50">
      <p class="mb-2">2:00</p>
      <router-link to="/solve">
        <button class="btn btn-primary">話し終わる</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showTurnModal() {
      this.$bvModal.show('turn-modal')
    }
  },
  mounted() {
    this.showTurnModal();
  }
}
</script>

<style lang="scss" scoped>
.section {
  overflow: hidden;
}

.deck {
  cursor: pointer;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  border: 8px solid #333333;
  box-sizing: border-box;
  background: repeating-linear-gradient(45deg, #dc143c 0px, #dc143c 15px, #fffafa 15px, #fffafa 30px);
}

.reverse {
  transform:rotate(180deg) translateY(10%);
}

.c-h {
  &15 {
    height: 15vh;
  }
  &70 {
    height: 70vh;
  }
}

.c-translateY {
  &50 {
    transform: translateY(10%);
  }
}
</style>
