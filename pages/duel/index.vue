<template>
  <div class="section">
    <b-modal id="turn-modal" hide-header hide-footer>
      <h3 class="h3 text-center">{{ $store.state.turnCount }}ターン目</h3>
      <b-button variant="primary" block @click="$bvModal.hide('turn-modal')">OK</b-button>
    </b-modal>

    <b-modal id="card-modal" hide-header hide-footer>
      <p class="text-center">効果: hogehoge</p>
      <b-button variant="primary" block @click="$bvModal.hide('card-modal')">OK</b-button>
    </b-modal>

    <div class="reverse c-h15">
      <p class="mb-2">
        <span>{{ $store.state.playerA }}: </span>
        <span>2:00</span>
      </p>
      <button class="btn btn-primary" :disabled="isTargetPlayerA" @click="endOpinion()">主張終了</button>
    </div>

    <div class="deck c-h70" @click="draw()"></div>

    <div class="c-h15 c-translateY50">
      <p class="mb-2">
        <span>{{ $store.state.playerB }}: </span>
        <span>2:00</span>
      </p>
      <button class="btn btn-primary" :disabled="isTargetPlayerB" @click="endOpinion()">主張終了</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTargetPlayerA: true,
      isTargetPlayerB: true,
      canDraw: true,
    }
  },
  methods: {
    // ターンの表示
    showTurnModal() {
      this.$bvModal.show('turn-modal')
      this.canOperatePlayer();
    },
    // プレイヤーを操作できる状態にする
    canOperatePlayer() {
      if (this.$store.state.turnCount % 2 !== 0) {
        this.isTargetPlayerA = false;
        return;
      }
      this.isTargetPlayerB = false;
    },
    // ドローする
    draw() {
      if (this.canDraw === true) this.$bvModal.show('card-modal')
      this.canDraw = false;
    },
    // カウントダウン
    countDown() {
      // TODO
    },
    // 話の終了
    endOpinion() {
      this.$store.commit('setTurnCount', this.$store.state.turnCount);
      this.$router.push('/solve');
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
