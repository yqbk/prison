let URL = 'http://demo9367428.mockable.io';

let actions = store => ({
  // Async actions can be pure async/promise functions:
  async getPeople(state) {
    let res = await fetch(`${URL}/people`);
    return { people: await res.json() };
  },

  async getMatches(state) {
    let res = await fetch(`${URL}/matches`);
    return { matches: await res.json() };
  },

  async getMessages(state) {
    let res = await fetch(`${URL}/messages`);
    return { messages: await res.json() };
  },

  setCurrentIndex: (state, index) => {
    console.log('ustawiam index', index);
    return { currentIndex: index };
  },

  removeCard: state => {
    console.log('usuwam karte', state.people.length);

    return { ...state, people: state.people.slice(1) };
  },

  insertMessage: state => {
    console.log('Adding a message');
    return {
      ...state,
      totalMessages: state.totalMessages + 1
    };
  }
});

export default actions;
