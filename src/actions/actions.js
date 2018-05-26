let URL = 'http://demo9367428.mockable.io';

let actions = store => ({
    // Async actions can be pure async/promise functions:
    async getPeople(state) {
        let res = await fetch(`${URL}/people`);
        return { people: await res.json() };
    },

    async getMatches(state) {
        let res = await fetch(`${URL}/matches`);
        console.log('matches 2 ', state.matches);
        return state.matches.length ? state.matches : { matches: await res.json() };
    },

    setCurrentIndex: (state, index) => {
        return { ...state, currentIndex: index };
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
    },
    setCurrentIndex: (state, index) => {
        return { ...state, currentIndex: index };
    },

    like: (state, id) => {
        return {
            ...state,
            matches: [...state.matches, state.people.find(prisoner => prisoner.id === id)]
        };
    },

    removeCard: state => {
        return { ...state, people: state.people.slice(1) };
    }
});

export default actions;
