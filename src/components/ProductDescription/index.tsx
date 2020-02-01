import "./scss/index.scss";

import * as React from "react";

import { TextField } from "@components/molecules";
import { ProductVariantPicker } from "@components/organisms";
import {
  ProductDetails_product_attributes,
  ProductDetails_product_pricing,
  ProductDetails_product_variants,
  ProductDetails_product_variants_pricing,
} from "@sdk/queries/types/ProductDetails";
import { IProductVariantsAttributesSelectedValues } from "@types";

import { CartContext, CartLine } from "../CartProvider/context";
import AddToCart from "./AddToCart";

interface ProductDescriptionProps {
  productVariants: ProductDetails_product_variants[];
  selectedAttributes: ProductDetails_product_attributes[];
  name: string;
  pricing: ProductDetails_product_pricing;
  children: React.ReactNode;
  addToCart(varinatId: string, quantity?: number): void;
}

interface ProductDescriptionState {
  quantity: number;
  variant: string;
  variantStock: number;
  variantPricing: ProductDetails_product_variants_pricing;
  eachVariantPricingRange: {
    min: number;
    max: number;
    currency: string;
  };
}

class ProductDescription extends React.Component<
  ProductDescriptionProps,
  ProductDescriptionState
> {
  constructor(props: ProductDescriptionProps) {
    super(props);

    this.state = {
      eachVariantPricingRange: this.getEachVariantPricingRange(),
      quantity: 1,
      variant: "",
      variantPricing: null,
      variantStock: null,
    };
  }

  getEachVariantPricingRange = () => {
    const { productVariants } = this.props;

    if (productVariants && productVariants.length) {
      const currency = productVariants[0].pricing.price.gross.currency;
      let min = productVariants[0].pricing.price.gross.amount;
      let max = productVariants[0].pricing.price.gross.amount;

      for (let index = 1; index < productVariants.length; index++) {
        const variant = productVariants[index];
        const variantAmount = variant.pricing.price.gross.amount;

        if (variantAmount < min) {
          min = variantAmount;
        } else if (variantAmount > max) {
          max = variantAmount;
        }
      }

      return {
        currency,
        max,
        min,
      };
    } else {
      return null;
    }
  };

  getLocalPriceFormat = (amount: number, currency: string) => {
    return amount.toLocaleString(undefined, {
      currency,
      style: "currency",
    });
  };

  getProductPrice = () => {
    const { pricing } = this.props;
    const { variantPricing, eachVariantPricingRange } = this.state;

    if (variantPricing) {
      const { amount, currency } = variantPricing.price.gross;
      return this.getLocalPriceFormat(amount, currency);
    } else if (eachVariantPricingRange) {
      const { min, max, currency } = eachVariantPricingRange;
      if (min === max) {
        return this.getLocalPriceFormat(min, currency);
      } else {
        return `${this.getLocalPriceFormat(
          min,
          currency
        )} - ${this.getLocalPriceFormat(max, currency)}`;
      }
    } else {
      const {
        start: {
          gross: { amount: min, currency },
        },
        stop: {
          gross: { amount: max },
        },
      } = pricing.priceRange;
      if (min === max) {
        return this.getLocalPriceFormat(min, currency);
      } else {
        return `${this.getLocalPriceFormat(
          min,
          currency
        )} - ${this.getLocalPriceFormat(max, currency)}`;
      }
    }
  };

  onVariantPickerChange = (
    _selectedAttributesValues?: IProductVariantsAttributesSelectedValues,
    selectedVariant?: ProductDetails_product_variants
  ) => {
    if (selectedVariant) {
      this.setState({
        variant: selectedVariant.id,
        variantPricing: selectedVariant.pricing,
        variantStock: selectedVariant.stockQuantity,
      });
    } else {
      this.setState({ variant: "", variantPricing: null });
    }
  };

  handleSubmit = () => {
    this.props.addToCart(this.state.variant, this.state.quantity);
  };

  canAddToCart = (lines: CartLine[]) => {
    const { variant, quantity, variantStock } = this.state;
    const cartLine = lines.find(({ variantId }) => variantId === variant);
    const syncedQuantityWithCart = cartLine
      ? quantity + cartLine.quantity
      : quantity;
    return quantity !== 0 && variant && variantStock >= syncedQuantityWithCart;
  };

  getNewView = (name, quantity) => (
    <>
      <h2 className="fw-bold playFairDisplay text_color_1 mb-3 fs-25">
        {name}
      </h2>
      <div className="fw-light fs-16 lh-30 text_color_5 mb-3">
        <span>{this.getProductPrice()}</span>
        <br />
        <div className="pull-mob-left">
          <span>= £23.10</span>
        </div>
        <div className="pull-mob-right mt-sm-2">
          <span>including 20% VAT</span>
        </div>
        <div className="clearfix"></div>
      </div>
      <form method="post" action="cart.html">
        <div className="mob_order_div">
          <h3 className="fw-bold openSans text_color_5 mb-2 fs-16 order2">
            Size
          </h3>
          <div className="radio_selector sizesSelctor pull-left mr-sm-3 mb-2 order3">
            <input type="radio" id="250g" name="productSize" value="250g" />
            <label>250g</label>
            <input
              type="radio"
              id="500g"
              name="productSize"
              value="500g"
              checked
            />
            <label>500g</label>
            <input type="radio" id="750g" name="productSize" value="750g" />
            <label>750g</label>
            <input type="radio" id="1kg" name="productSize" value="1kg" />
            <label>1kg</label>
          </div>
          <div className="radio_selector typeSelector pull-left order1 mb-3">
            <input
              type="radio"
              id="looseTea"
              name="productType"
              value="Loose Tea"
              checked
            />
            <label>Loose Tea</label>
            <input
              type="radio"
              id="teaBags"
              name="productType"
              value="Tea Bags"
            />
            <label>Tea Bags</label>
          </div>
          <div className="clearfix"></div>
          <div className="fw-bold fs-12 lh-30 text_color_5 openSans order4">
            <span>SKU: EI100595</span>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="fw-bold openSans text_color_5 mb-2 fs-16">Quantity</h3>
          {/* <TextField
            type="number"
            min="1"
            value={quantity || ""}
            onChange={e =>
              this.setState({ quantity: Math.max(1, Number(e.target.value)) })
            }
          /> */}
          <div className="pull-left mr-sm-3 mr-mob-1 mb-mob-1">
            <div className="quantity_checker">
              <input
                type="number"
                className="height39 rounded-10"
                placeholder="10"
                value={quantity || ""}
                onChange={e =>
                  this.setState({
                    quantity: Math.max(1, Number(e.target.value)),
                  })
                }
              />
            </div>
          </div>
          {/* <div className="pull-left btn_1 mt-md-0 mt-lg-0">
            <button className="bg_color_3 text-white openSans fw-regular fs-13 rounded-12 border-0 height39">
              Add to Cart
            </button>
          </div> */}
          <CartContext.Consumer>
            {({ lines }) => (
              <AddToCart
                onSubmit={this.handleSubmit}
                lines={lines}
                disabled={!this.canAddToCart(lines)}
              />
            )}
          </CartContext.Consumer>
          <div className="clearfix"></div>
        </div>
      </form>
    </>
  );

  render() {
    const { name } = this.props;
    const { quantity } = this.state;

    return this.getNewView(name, quantity);
  }

  render1() {
    const { children, name, selectedAttributes } = this.props;
    const { quantity } = this.state;

    return (
      <div className="product-description">
        <h3>{name}</h3>
        <h4>{this.getProductPrice()}</h4>
        <div>
          {selectedAttributes.map(
            ({ attribute, values }) =>
              values.length > 0 && (
                <div
                  className="product-description__selected-attributes"
                  key={attribute.id}
                >
                  <span>{`${attribute.name}: `}</span>
                  <span>{values.map(({ name }) => name).join(", ")}</span>
                </div>
              )
          )}
        </div>
        <div className="product-description__variant-picker">
          <ProductVariantPicker
            productVariants={this.props.productVariants}
            onChange={this.onVariantPickerChange}
            selectSidebar={true}
          />
        </div>
        <div
          className="product-description__quantity-input"
          style={{
            display: "flex",
          }}
        >
          <TextField
            type="number"
            label="Quantity"
            min="1"
            value={quantity || ""}
            onChange={e =>
              this.setState({ quantity: Math.max(1, Number(e.target.value)) })
            }
          />
          <CartContext.Consumer>
            {({ lines }) => (
              <AddToCart
                onSubmit={this.handleSubmit}
                lines={lines}
                disabled={!this.canAddToCart(lines)}
              />
            )}
          </CartContext.Consumer>
        </div>
        <div className="product-description__about">
          <h4>Description</h4>
          {children}
        </div>
      </div>
    );
  }
}

export default ProductDescription;
