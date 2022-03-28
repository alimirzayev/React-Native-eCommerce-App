const initalState = {
    total: 0,
    numberCart:0,
    Carts:[],
}

export default function Reducer(state = initalState, action) {
    switch (action.type) {
        case "ADD_CART" :
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    title:action.payload.title,
                    img:action.payload.img,
                    price:action.payload.price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        title:action.payload.title,
                        img:action.payload.img,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1,
                total: state.total + action.payload.price
            }

            break

        case "INC_QTY":
            let itemFound = state.Carts.find((element) => element.id === action.payload.id);
            state.numberCart++
            itemFound.quantity++;
            return{...state, total: state.total + itemFound.price}
            break
            
        case "DEC_QTY":
            let itemFoundd = state.Carts.find((element) => element.id === action.payload.id);
            let quantity = itemFoundd.quantity;
            if(quantity>1){
                state.numberCart--;
                itemFoundd.quantity--;
                return{...state, total: state.total - itemFoundd.price}
            }
            break

        case "DEL_CART" :
            let itemFounddd = state.Carts.find((element) => element.id === action.payload.id);
            let quantityy = itemFounddd.quantity;
            return{
                    ...state,
                    total: state.total - (itemFounddd.price * quantityy),
                    numberCart:state.numberCart - quantityy,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=itemFounddd.id
                    })
            }
            break
    
    }
    return state
}