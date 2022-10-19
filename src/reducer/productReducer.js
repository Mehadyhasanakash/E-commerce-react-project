const ProductReducer = (state, action) => {
// import SingleProduct from './../SingleProduct';
    // if (action.type === "SET_LOADING") {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
  
    // if (action.type === "API_ERROR") {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }
  
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA":
        const featureData = action.payload.filter((curElem) => {
          return curElem.featured === true;
        });
  
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featureProducts: featureData,
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

        // SingleProduct
        case "SET_SINGLELOADING":
          return {
            ...state,
            isSingleLoading: true,
          };

          case "SET_SINGALE_PRODUCT":
            return{
              ...state,
              isSingleLoading: false,
              singaleProduct: action.payload,
            };
            case "SET_SINGLE_ERROR":
              return {
                ...state,
                isSingleLoading: false,
                isError: true,
              };

      
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;