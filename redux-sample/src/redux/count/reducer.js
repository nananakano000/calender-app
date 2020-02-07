import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

// ~1-5で追加
export const count = ( state=initState, {type, payload}) => {
    switch (type) {
        case INCREMENT:
            return state + payload;
        case DECREMENT:
            return state - payload;
        default:
            return state;
    }
};