import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product';
import { DELETE_USER_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } from '../actions/products';

const initialState = {
    Products: PRODUCTS,
    UserProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER_PRODUCT:
            const id = action.id;
            return {
                ...state,
                Products: state.Products.filter(product => product.id !== id),
                UserProducts: state.Products.filter(product => product.id !== id)
            }
        case ADD_PRODUCT:
            const newProduct = new Product(new Date().toString(), 'u1', action.productData.title,
                action.productData.urlImage, action.productData.description, action.productData.price);
            return {
                ...state,
                Products: state.Products.concat(newProduct),
                UserProducts: state.UserProducts.concat(newProduct)
            }
        case UPDATE_PRODUCT:
            // FIRST FIND THE INDEX OF THE CURRENT PRODUCT
            const prdUsrIndex = state.UserProducts.findIndex(prod => prod.id === action.pid);
            const updatedProduct = new Product(action.pid, state.UserProducts[prdUsrIndex].ownerId,
                action.productData.title, action.productData.urlImage, action.productData.description,
                state.UserProducts[prdUsrIndex].price);
            // CREATE A COPY
            const updateAvailableUserProducts = [...state.UserProducts];
            updateAvailableUserProducts[prdUsrIndex] = updatedProduct;

            const updateAvailableProducts = [...state.Products];
            const prdIndex = state.Products.findIndex(prod => prod.id === action.pid);
            updateAvailableProducts[prdIndex] = updatedProduct;
            
            return {
                ...state,
                Products: updateAvailableProducts,
                UserProducts: updateAvailableUserProducts
            }
        default:
            return state;
    }

}

export default productsReducer;