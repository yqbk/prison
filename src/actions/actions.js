// If actions is a function, it gets passed the store:
let actions = store => ({
  // Async actions can be pure async/promise functions:
  async getPeople(state) {
    let res = await fetch('http://demo6315956.mockable.io/people');
    return { people: await res.json() };
  }
});

export default actions;
