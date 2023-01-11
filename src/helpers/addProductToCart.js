import _ from "lodash";
import { NotificationManager } from "react-notifications";

const addProductToCart = (product, cartData, addToCart) => {
  if (_.isEmpty(cartData)) {
    addToCart(product);

    NotificationManager.success(
      "Product has been added to the cart",
      "Notice!",
      3000
    );
  }

  // <=== However it means the cart already has that product so show notice.
  if (!_.isEmpty(cartData) && !_.includes(cartData, product)) {
    addToCart(product);
    NotificationManager.success(
      "Product has been added to the cart",
      "Notice!",
      3000
    );
    return;
  }

  // <==== If the cart includes the item ====>
  if (!_.isEmpty(cartData) && _.includes(cartData, product)) {
    NotificationManager.warning(
      "Product is already in the cart",
      "Notice!",
      3000
    );
    return;
  }
};

export default addProductToCart;
