<template>
  <div class="section">
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
