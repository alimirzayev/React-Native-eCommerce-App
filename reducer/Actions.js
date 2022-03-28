export const addToCart = e => {
    return {type: "ADD_CART", payload: e}
}

export const removeToCart = e => {
    return {type: "DEL_CART", payload: e}
}