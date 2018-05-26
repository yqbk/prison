let URL = 'http://demo6315956.mockable.io';

let actions = store => ({
  // Async actions can be pure async/promise functions:
  async getPeople(state) {
    let res = await fetch(`${URL}/people`);
    return { people: await res.json() };
  },

  async getMatches(state) {
    let res = await fetch(`${URL}/matches`);
    return { matches: await res.json() };
  }
});

export default actions;
