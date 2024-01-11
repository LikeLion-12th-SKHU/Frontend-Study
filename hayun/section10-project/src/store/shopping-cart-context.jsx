import { createContext, useReducer } from 'react';

import { DUMMY_PRODUCTS } from '../dummy-products.js';

//  리액트 컴포넌트가 들어있는 객체 -> 대문자 시작
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
});

// 속성 등에 접근할 필요가 없기 때문에 컴포넌트 함수 밖에 선언.
function shoppingCartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];
    
        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
    
        if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find(
                (product) => product.id === action.payload
            );
            updatedItems.push({
              id: action.payload,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
        }
    
        return {
            ...state, // not needed here because we have only one value
            items: updatedItems,
        };
    }

    if (action.type === 'UPDATE_ITEM') {
        const updatedItems = [...state.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.productId
            );
    
            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };
        
            updatedItem.quantity += action.payload.amount;
        
            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }
        
            return {
                ...state, // 데이터 손실이 없도록 한번 더 지난 상태 복사.
                items: updatedItems,
            };
    }
    return state;
}

export default function CartContextProvider({ children }) {
    const [ shoppingCartState, shoppingCartDispatch ] = useReducer(
        shoppingCartReducer, 
        {
            items: [],
        }
    );

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id,
        });
    }
    
    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM',
            payload: {
                // 프로퍼티 이름이 값을 가진 변수와 같다면 하나만 써도 됨.
                productId,
                amount,
            }
        });
    }
    
    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updatedItemQuantity: handleUpdateCartItemQuantity,
    };

    return (
        <CartContextProvider value={ctxValue}>{children}</CartContextProvider>
    );
}