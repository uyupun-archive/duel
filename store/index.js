export const state = () => ({
  fightName: ''
});

export const mutations = {
  setFightName (state, fightName) {
    state.fightName = fightName;
  }
};
