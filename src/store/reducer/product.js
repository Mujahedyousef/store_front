export const initialState = {
  products: [
    {
      id: 1,
      category: "Food",
      name: "Grilled Salmon ",
      price: 10,
      quantity: 10,
      description: "There are plenty of delicious ways to marinate fish for grilling but were partial to this sweet and savory salmon marinade Salmon filets are seasoned with lemon pepper garlic powder and salt then marinated in a delicious combination of the following ingredients",
      image: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__480.jpg",
    },
    
    {
      id: 2,
      category: "Food",
      name: "Burger",
      price: 10,
      quantity: 10,
      description: "a popular sandwich made from ground meats that are formed into a patty cooked and placed between two halves of a bun. Although the most common Burger is made with meat there are many alternatives that do not include meat such as tofu or ground vegetables",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg",
    },
    ,
    {
      id: 3,
      category: "Food",
      name: "Grilled chicken",
      price: 10,
      quantity: 10,
      description: "a popular sandwich made from ground meats that are formed into a patty cooked and placed between two halves of a bun. Although the most common Burger is made with meat there are many alternatives that do not include meat such as tofu or ground vegetables",
      image: "https://cdn.pixabay.com/photo/2014/04/05/11/19/turkey-315079__340.jpg",
    },
    {
      id: 4,
      category: "Electronics",
      name: "Mobile",
      price: 100,
      quantity: 10,
      description: "A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls todays mobile phones do a lot more accommodating web browsers",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461__340.jpg",
    },
    {
      id: 5,
      category: "Electronics",
      name: "Laptop",
      price: 100,
      quantity: 10,
      description: "is a small personal computer. They are designed to be more portable than traditional desktop computers with many of the same abilities. Laptops are able to be folded flat for transportation and have a builtin keyboard and touch pad",
      image: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg",
    },
    {
      id: 6,
      category: "Electronics",
      name: "Screen",
      price: 100,
      quantity: 10,
      description: "is the physical surface on which visual information is presented. This surface is usually made of glass. The screen size is measured from one corner to the opposite corner diagonally. Common screen sizes for desktop display",
      image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__340.jpg",
    }

  ],
  selectedProducts: []
};

export default function reducerProducts(state = initialState, action) {
  let selectedProduct = [];
  let { type, payload } = action;
  console.log(state);
  switch (type) {
    case "SELECT_PRODUCT":
    
      selectedProduct = state.products.filter(
        (product) => product.category === payload
      );
      return {
        ...state,
        selectedProducts: selectedProduct,
      };

    case "DECREASE_QUANTITY":
      console.log(11111,payload);
     let decreaseQuantity=[...state.selectedProducts];
     let afterDecrease=decreaseQuantity.map(element=>{
       if(element.name===payload.name)
       {
        element.quantity=element.quantity>0?element.quantity-1:'Sold Out'
        return element;
     }
     return element
    })
    return{
      ...state,
      selectedProducts:afterDecrease
    }


    case "INCREASE_QUANTITY":
      let increaseProduct=[...state.selectedProducts];
      let afterIncrease=increaseProduct.map(element=>{
        if(element.name===payload.name)
        {
          element.quantity=element.quantity+1
          return element
        }
        return element;
      })
       return {
        ...state,
        selectedProducts:afterIncrease
       } 

    default:
      return state;
  }
}

export const selectedProduct = (name) => {
  return {
    type: "SELECT_PRODUCT",
    payload: name,
  };
};

export const decreaseQuantity = (name) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: name,
  };
};

export const increaseQuantity = (name) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: name,
  };
};




