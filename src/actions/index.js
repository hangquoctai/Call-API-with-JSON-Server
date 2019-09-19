import * as Types from "../contants/ActionType";
import callApi from "../utils/apiCaller";

export const actFetchProduct = products => {
  return {
    type: Types.FETCH_PRODUCT,
    products
  };
};
export const actFetchProductRequest = () => {
  return dispathch => {
    return callApi("products", "GET", null).then(res => {
      dispathch(actFetchProduct(res.data));
    });
  };
};
export const actDeleteProductRequest = id => {
  return dispatch => {
    return callApi(`products/${id}`, "DELETE", null).then(res => {
      dispatch(actDeleteProduct(id));
    });
  };
};
export const actDeleteProduct = id => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  };
};
export const actAddProductRequest = (products) => {
    return dispatch => {
        return callApi('products',"POST",products).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}
export const actAddProduct = (products) => {
    return {
        type:Types.ADD_PRODUCT,
        products
    }
}
