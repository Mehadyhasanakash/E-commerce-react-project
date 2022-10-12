const productReducer = (state, action) =>{

    switch (action.type) {
        case "SET_LODDING":
            
            return{
                ...state,
                isLodding: true,

            };

            case "API_ERROR" :
                return{
                    ...state,
                    isLodding: false,
                    isError: true,
                };

                case "MY_API_DATA" :
                    const featureData = action.payload.filter((currentElement) =>{
                            return currentElement.featured === true;
                            

                    })

                    return{
                        ...state,
                        isLodding: false,
                        product : action.payload,
                        futureProduct : featureData,
                    }
    
        default:
            return{
                ...state
            }
    }



    return state;
};

export default productReducer