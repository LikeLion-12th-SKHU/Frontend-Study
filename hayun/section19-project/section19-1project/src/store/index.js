import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        }
    }

    if (action.type === 'increase') {
        return {
            // action payload 추출하여 counter 컴포넌트에서 유동적으로 값을 바꿀 수 있음. 
            counter: state.counter + action.amount,
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;