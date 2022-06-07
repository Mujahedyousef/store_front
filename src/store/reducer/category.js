export const initialState = {
    categoryList: [{ id: 1, category: "Food", description: "We are making the best meal for you, Enjoy" },
    { id: 2, category: "Electronics", description: "Now you can be selecting the best...  " }],
    activeCategory: "",
    
};

export default function categoryReducer(state = initialState, action) {
    let { type, payload } = action;
    console.log(state);
    switch (type) {
        case "SET_ACTIVE_CATEGORY":
            console.log("payload", payload);
            console.log("state", state);
            return {
                ...state,
                activeCategory: payload
            };
        default:
            return state;
    }
}

export function selectCategory(payload) {
    return {
        type: "SET_ACTIVE_CATEGORY",
        payload: payload
    }

}




