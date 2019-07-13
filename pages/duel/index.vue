<template>
  <div>
    <div class="reverse">
      <p>2:00</p>
      <router-link to="/solve">
        <button class="btn btn-primary">話し終わる</button>
      </router-link>
    </div>

    <div class="deck mt-4 mb-4"></div>

    <div>
      <p>2:00</p>
      <router-link to="/solve">
        <button class="btn btn-primary">話し終わる</button>
      </router-link>
    </div>
  </div>
</template>
<style>
.deck {
  cursor: pointer;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  height: 450px;
  border-radius: 5px;
  border: 8px solid #333333;
  background: repeating-linear-gradient(45deg, #dc143c 0px, #dc143c 15px, #fffafa 15px, #fffafa 30px);
}
.reverse {
  transform:rotate(180deg);
}
</style>
