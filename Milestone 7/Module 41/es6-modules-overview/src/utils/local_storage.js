const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

const addToLS = id => {
    const storedCart = getStoredCart();
    storedCart.push(id);
    localStorage.setItem('cart', JSON.stringify(storedCart));
}

export {getStoredCart, addToLS};