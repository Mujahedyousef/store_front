

export const initialState = {
    productAdd: [],
    count: 0
}

export default function reducerCart(state = initialState, action) {
    let indexOf;
    let { type, payload } = action
    switch (type) {
        case 'ADD_PRODUCT_CART':
            console.log(11111111111, payload);
            let increaseCount = state.count >= 0 ? state.count + 1 : 0
            let newAddCart = [...state.productAdd]
            let productName = payload.name
            console.log(222222222, productName);
            newAddCart.push({ "name": productName, "count": increaseCount })
           
            return {
                productAdd: newAddCart, count: increaseCount
            }
        case 'DELETE_PRODUCT_CART':
            
            let decreaseCount = state.count >= 0 ? state.count - 1 : 0;
            let cart = [...state.productAdd];

            for(let i=0;i<cart.length;i++){
                if(cart[i].count===payload.count){
                    indexOf=i;
                }
            }
            cart.splice(indexOf,1)
            return {
                productAdd: cart,
                count: decreaseCount
            }


        default:
            return state;
    }
}


export function addAction(product) {
    return {
        type: "ADD_PRODUCT_CART",
        payload: product
    }
}

export function deleteAction(product) {
    return {
        type: "DELETE_PRODUCT_CART",
        payload: product
    }
}