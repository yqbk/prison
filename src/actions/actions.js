let URL = 'http://demo9367428.mockable.io';

let actions = store => ({
  // Async actions can be pure async/promise functions:
  async getPeople(state) {
    let res = await fetch(`${URL}/people`);
    return state.people.length
      ? { people: state.people }
      : { people: await res.json() };
  },

  async getMatches(state) {
    let res = await fetch(`${URL}/matches`);
    return state.matches.length ? state.matches : { matches: await res.json() };
  },

  async getMessages(state) {
    let res = await fetch(`${URL}/messages`);
    return { messages: await res.json() };
  },

  setCurrentIndex: (state, index) => {
    return { ...state, currentIndex: index };
  },

  addMessage: (state, message) => {
    return {
      ...state,
      totalMessages: state.totalMessages + 1,
      messages: [...state.messages, message]
    };
  },
  setCurrentIndex: (state, index) => {
    return { ...state, currentIndex: index };
  },

  like: (state, id) => {
    const result = {
      ...state,
      matches: [
        ...state.matches,
        state.people.find(prisoner => prisoner.id === id)
      ]
    };
    return result;
  },

  dislike: (state, id) => {
    return {
      ...state,
      currentIndex: state.currentIndex + 1
    };
  },

  removeCard: state => {
    return { ...state, people: state.people.slice(1) };
  }
});

export default actions;
