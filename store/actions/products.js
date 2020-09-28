export const DELETE_USER_PRODUCT = 'DELETE_USER_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const deleteUserProduct = productId => {
    return { type: DELETE_USER_PRODUCT, id: productId }
};

export const addProduct = (title, urlImage, description, price) => {
    return {
        type: ADD_PRODUCT,
        productData: {
            title,
            urlImage,
            description,
            price,     
        }
    }
};

export const updateProduct = (id, title, urlImage, description) => {
    return {
        type: UPDATE_PRODUCT,
        pid: id,
        productData: { 
            title,
            urlImage, 
            description
        }
    }
};