import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {},
});

function cartReducer(state, action) {
    // 업데이트된 상태 반환
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItems = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItems;
        } else {
            updatedItems.push({...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            // remove 시엔 식별은 위한 id 하나만 필요.
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItem, 1);
        } else {
            const updatedItem = {
                ...existingCartItem, 
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'CLEAR_CART') {
        return { ...state, items: [] };
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [ cart, dispatchCartAction ] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }

    function clearCart() {
        dispatchCartAction({ type: 'CLEAR_CART' });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart,
    };

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
