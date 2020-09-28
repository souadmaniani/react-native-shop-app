import Order from '../../models/order';
import { ADD_ORDER } from '../actions/order';

const initialState = {
    orders: []
}

export default (state= initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const items = action.items;
            const totalAmount = action.total;
            const order = new Order(new Date().toString(), items, totalAmount, new Date());
            return {
                ...state,
                orders: state.orders.concat(order)
            };
    
        default:
            return state;
    }
}