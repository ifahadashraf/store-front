import * as React from "react";
import { Link } from "react-router-dom";

import { ProductListItem } from "../../components";
import { generateProductUrl } from "../../core/utils";
import { ProductDetails_product_category_products_edges } from "./types/ProductDetails";

const OtherProducts: React.FC<{
  products: ProductDetails_product_category_products_edges[];
}> = ({ products }) => (
  <div className="product-page__other-products">
    <div className="container">
      {/* <h4 className="product-page__other-products__title">
        Other products in this category
      </h4> */}
      <div className="col-lg-12 title_bar_center">
        <h2 className="fw-bold title_size_25 tab_title_size_25 mob_title_size_30 playFairDisplay text_color_1 mt-2 mb-0 text-center pl-sm-3 pr-sm-3 pl-md-5 pr-md-5">
          Explore..
        </h2>
      </div>
      <div className="product-page__other-products__grid">
        {products.map(({ node: product }) => (
          <Link
            to={generateProductUrl(product.id, product.name)}
            key={product.id}
          >
            <ProductListItem product={product} key={product.id} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default OtherProducts;
