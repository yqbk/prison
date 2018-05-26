import createStore from 'unistore';

let initialState = {
  people: [],
  matches: [],
  messages: [],
  totalMessages: 0
};

export let store = createStore(initialState);
