import { createStore } from 'redux';
const initialState = { questions: [] };
function storeReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_QUIZ':
            const Arr = action.payload.map(q => {
                return {
                    question: q.question,
                    Ans: [ q.correct_answer,q.incorrect_answers[0],q.incorrect_answers[1],q.incorrect_answers[2]],
                    correct : q.correct_answer
                }
            })
            return { ...state, questions: Arr };
        default:
            return state;
    }
}
const store = createStore(storeReducer);
// console.log(store);
export default store;