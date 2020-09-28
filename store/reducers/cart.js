import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/cart';
import { ADD_ORDER } from '../actions/order';
import { DELETE_USER_PRODUCT } from '../actions/products';
import CartItem from '../../models/cart';


const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let updateOrNewCartItem;
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            if (state.items[addedProduct.id]) {
                updateOrNewCartItem = new CartItem(state.items[addedProduct.id].quantity + 1, prodPrice, prodTitle, state.items[addedProduct.id].sum + prodPrice);
            }
            else {
                updateOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updateOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
            };
        case DELETE_FROM_CART:
            const id = action.id;
            const selectedProduct = state.items[id];
            const currQuantity = selectedProduct.quantity;
            const prdPrice = selectedProduct.productPrice;
            const prdTitle = selectedProduct.productTitle;
            const sum = selectedProduct.sum;
            let updatedCartState;
            if (currQuantity > 1) {
                let updatedItem = new CartItem(currQuantity - 1, prdPrice, prdTitle, sum - prdPrice);
                updatedCartState = { ...state.items, [id]: updatedItem };
            } else {
                updatedCartState = { ...state.items }
                delete updatedCartState[id];
            }
            return {
                ...state,
                items: updatedCartState,
                totalAmount: state.totalAmount - prdPrice
            };
        case ADD_ORDER:
            return initialState;
        case DELETE_USER_PRODUCT:
            const pid = action.id;
            const updatedItems = { ...state.items };  
            if (!updatedItems[pid]) {
                return state;
            }
            const total = state.items[pid].sum;
            delete updatedItems[pid];
            return {
                ...state,
                items: updatedItems,
                totalAmount: state.totalAmount - total
            }

        default:
            return state;
    }
}