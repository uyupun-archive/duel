<template>
  <div>
    <div class="mt-4 reverse">
      <p>2:00</p>
      <router-link to="/solve">
        <button class="btn btn-primary">話し終わる</button>
      </router-link>
    </div>
    <div class="cards"></div>
    <div class="mt-4">
      <p>2:00</p>
      <router-link to="/solve">
        <button class="btn btn-primary">話し終わる</button>
      </router-link>
    </div>
  </div>
</template>
<style>
.cards {
  width: 60%;
  height: 300px;
  border-style:solid; 
}
.reverse {
  transform:rotate(180deg);
}
</style>
