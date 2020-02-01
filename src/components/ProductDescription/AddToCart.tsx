import React from "react";

import { useUserDetails } from "@sdk/react";

import { CheckoutContext } from "../../checkout/context";
import { TypedCreateCheckoutMutation } from "../../checkout/queries";
import { CartLine } from "../CartProvider/context";
import AddToCartButton from "./AddToCartButton";

const AddToCart: React.FC<{
  disabled: boolean;
  lines: CartLine[];
  onSubmit: () => void;
}> = ({ disabled, lines, onSubmit }) => {
  const { data: user } = useUserDetails();
  return (
    <CheckoutContext.Consumer>
      {({ checkout, update, loading: checkoutLoading }) => (
        <TypedCreateCheckoutMutation
          onCompleted={async ({ checkoutCreate: { checkout, errors } }) => {
            if (!errors.length) {
              await update({ checkout });
            }
            onSubmit();
          }}
        >
          {(createCheckout, { loading: mutationLoading }) => (
            // <div className="pull-left btn_1 mt-md-0 mt-lg-0">
            //   <button
            //     className="bg_color_3 text-white openSans fw-regular fs-13 rounded-12 border-0 height39"
            //     onClick={() => {
            //       if (user && !checkout) {
            //         createCheckout({
            //           variables: {
            //             checkoutInput: { email: user.email, lines },
            //           },
            //         });
            //       } else {
            //         onSubmit();
            //       }
            //     }}
            //     disabled={disabled || mutationLoading || checkoutLoading}
            //   >
            //     Add to Cart
            //   </button>
            // </div>
            <AddToCartButton
              className="bg_color_3"
              onClick={() => {
                if (user && !checkout) {
                  createCheckout({
                    variables: {
                      checkoutInput: { email: user.email, lines },
                    },
                  });
                } else {
                  onSubmit();
                }
              }}
              // disabled={disabled || mutationLoading || checkoutLoading}
            >
              Add to cart
            </AddToCartButton>
          )}
        </TypedCreateCheckoutMutation>
      )}
    </CheckoutContext.Consumer>
  );
};

export default AddToCart;
