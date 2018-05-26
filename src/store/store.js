import createStore from 'unistore';

let initialState = {
  people: [],
  matches: []
};

export let store = createStore(initialState);
