import "./scss/index.scss";

// import classNames from "classnames";
import * as React from "react";
// import { Link } from "react-router-dom";

import { ProductsFeatured } from "../../components";
// import { generateCategoryUrl } from "../../core/utils";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage,
} from "./types/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

// import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  // const categoriesExist = () => {
  //   return categories && categories.edges && categories.edges.length > 0;
  // };

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <div
        className="home-page__hero"
        style={{
          backgroundImage: `url('/src/img/banners/home-banner.jpg')`,
        }}
        // style={
        //   backgroundImage
        //     ? { backgroundImage: `url(${backgroundImage.url})` }
        //     : null
        // }
      >
        <div className="home-page__hero-text" style={{ color: "white" }}>
          <h1 className="text-white  fw-bold playFairDisplay">
            A Taste In Demand since 1704
          </h1>
          <p
            className="openSans fw-regular text-white"
            style={{ color: "white" }}
          >
            Tantalise your taste buds with the taste of pure tea directly from
            the fields of India. This is dummy text what do you think...
          </p>
          <div className="banner_btn mt-4">
            <a
              className="bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15"
              href="#"
            >
              View Ranges
            </a>
          </div>
          {/* <div>
            <span className="home-page__hero__title">
              <h1>Final reduction</h1>
            </span>
          </div>
          <div>
            <span className="home-page__hero__title">
              <h1>Up to 70% off sale</h1>
            </span>
          </div> */}
        </div>
        {/* <div className="home-page__hero-action">
          {loading && !categories ? (
            <Loader />
          ) : (
            categoriesExist() && (
              <Link
                to={generateCategoryUrl(
                  categories.edges[0].node.id,
                  categories.edges[0].node.name
                )}
              >
                <Button>Shop sale</Button>
              </Link>
            )
          )}
        </div> */}
      </div>
      <ProductsFeatured />
      <div className="home-page__categories">
        <div className="container">
          <div className="">
            <div className="mt-mob-4 mt-lg-5 pt-lg-3 mt-md-3">
              <div className="mob_container">
                <div className="row diplay_vr_center order_div">
                  <div className="col-lg-5 col-sm-12 col-md-6 text-left pr-lg-5 mb-mob-4 pb-mob-1 mb-sm-5 order1">
                    <div className="title_arrow mb-3">
                      <img src="/src/img/title-bar.jpg" alt="Title Bar" />
                    </div>
                    <h2 className="fw-bold title_size_40 playFairDisplay text_color_1 mb-2 mob_title_size_30">
                      A Heritage of Quality since 1700
                    </h2>
                    <p className="openSans fs-16 fw-light lh-30 text_color_5 pr-lg-2">
                      Once the largest supplier of tea to the world the East
                      India Tea House has been perhaps one of the best kept
                      secrets in the Food Beverage Industry with its historical
                      past shaping the continents we live in today there no is
                      company that can match our quality experience.
                    </p>
                    <div className="btn_1 mt-4">
                      <a
                        className="bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15"
                        href="#"
                      >
                        Our History
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-12 col-md-6 img_sqaure text-lg-right order2">
                    <img
                      src="src/img/heritage-quality.png"
                      alt="Heritage of Quality"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-mob-5 pt-mob-4 mt-lg-5 pt-lg-3 mt-md-3 mt-sm-5 animated standby fadeInUp">
              <div className="mob_container">
                <div className="row diplay_vr_center order_div">
                  <div className="col-lg-7 col-sm-12 col-md-6 img_sqaure pl-lg-0 text-lg-left order2">
                    <img src="/src/img/serving-masonry.png" alt="Servings" />
                  </div>
                  <div className="col-lg-5 col-sm-12 col-md-6 pl-lg-5 mb-mob-4 pb-mob-1 order1 mb-sm-5 mob-text-right">
                    <div className="title_arrow mb-3">
                      <img src="/src/img/title-bar.jpg" alt="Title Bar" />
                    </div>
                    <h2 className="fw-bold title_size_40 playFairDisplay text_color_1 mb-2 mob_title_size_30">
                      However you're serving..
                    </h2>
                    <p className="openSans fs-16 fw-light lh-30 text_color_5 pl-lg-0">
                      We supply tea in all shapes and forms from around the
                      world to match every ambience possible. Whether you're
                      serving tea at 5000ft in the air, or in a boutique hotel
                      we have something for you!
                    </p>
                    <div className="btn_1 mt-4">
                      <a
                        className="bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15"
                        href="#"
                      >
                        Recipes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-mob-5 pt-mob-4 mt-lg-5 pt-lg-5 mt-md-3 mt-sm-5 animated standby fadeInUp">
              <div className="mob_container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title_arrow mb-3">
                      <img src="/src/img/title-bar.jpg" alt="Title Bar" />
                    </div>
                    <h2 className="fw-bold title_size_40 playFairDisplay text_color_1 mb-2 mob_title_size_30">
                      A Platter of our Trade Services
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7 col-sm-12 mb-mob-4 pb-mob-1 mb-sm-5">
                    <p className="openSans fs-16 fw-light lh-30 text_color_5 pr-lg-0">
                      Give your hospitality experience the edge with any one of
                      our specialised services ranging from the wholesale of the
                      widest range of tea's, or opt for our consultancy services
                      which includes sourcing, tea training, flavour
                      development, compliance auditing and brand experience
                      development. We also offer a complete private label
                      service for brands looking for a more end to end service
                      for their tea.
                    </p>
                    <div className="btn_1 mt-4">
                      <a
                        className="bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15"
                        href="#"
                      >
                        Our History
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-12 img_masongry_style1 pl-lg-0 pr-lg-0">
                    <div className="img_box pull-left img01">
                      <img src="/src/img/wholesale.png" alt="Wholesale" />
                      <div className="overlay_text">
                        <h4>
                          <a
                            className="playFairDisplay fw-bold text-white"
                            href="#"
                          >
                            Wholesale
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="img_box pull-left img02">
                      <img src="/src/img/consultancy.png" alt="Consultancy" />
                      <div className="overlay_text">
                        <h4>
                          <a
                            className="playFairDisplay fw-bold text-white"
                            href="#"
                          >
                            Consultancy
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="img_box pull-left img03">
                      <img
                        src="/src/img/private-label.png"
                        alt="Private Label"
                      />
                      <div className="overlay_text">
                        <h4>
                          <a
                            className="playFairDisplay fw-bold text-white"
                            href="#"
                          >
                            Private Label
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="img_box pull-left img04">
                      <img
                        src="/src/img/storage-distribution.png"
                        alt="Storage Distribution"
                      />
                      <div className="overlay_text">
                        <h4>
                          <a
                            className="playFairDisplay fw-bold text-white"
                            href="#"
                          >
                            Storage Distribution
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-lg-5 pt-lg-5 mt-md-5 mt-sm-5 mb-5 mb-lg-5 mt-mob-5 pb-lg-3 pt-mob-3 animated standby fadeInUp"
              style={{ marginTop: "900px" }}
            >
              <div className="row">
                <div className="col-lg-12 title_bar_center">
                  <h2 className="fw-bold title_size_40 mob_title_size_30 playFairDisplay text_color_1 mb-3 text-center pl-sm-3 pr-sm-3 pl-md-5 pr-md-5">
                    Latest NewsArticles
                  </h2>
                  <p className="text-center text_color_5 fs-16 fw-light lh-30 sub_container_60">
                    A leading manufacturer in flexible packaging, Established
                    for over 40 Years, we're trusted by the biggest consumer
                    brands! A leading manufacturer in flexible packaging
                  </p>
                </div>
              </div>
              <div className="mob_container">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-md-12 text-left pl-mob-0 pr-mob-0">
                    <div>
                      <div className="thumbnail_slider3 colm-4 mt-mob-3 mt-sm-4 mt-md-5">
                        <div>
                          <div>
                            <div
                              id="news_slider"
                              className="carousel slide mobImgHeight174"
                            >
                              <div className="carousel-inner">
                                <div
                                  className="img_content_grid active carousel-item"
                                  data-slide-number="0"
                                >
                                  <div className="fixed_size_img_1">
                                    <a href="#">
                                      <img
                                        src="src/img/post-img.jpg"
                                        alt="Post Image"
                                      />
                                    </a>
                                  </div>
                                  <div className="content_box mob-text-left">
                                    <h3 className="mt-4 mb-2 lh-30">
                                      <a
                                        href="#"
                                        className="fw-bold fs-25 openSans text_color_1"
                                      >
                                        Our tea is now available in all Hilton
                                        Hotels in the UK!
                                      </a>
                                    </h3>
                                    <p className="fw-light openSans fs-16 lh-30">
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands! A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="img_content_grid carousel-item"
                                  data-slide-number="1"
                                >
                                  <div className="fixed_size_img_1">
                                    <a href="#">
                                      <img
                                        src="src/img/post-img.jpg"
                                        alt="Post Image"
                                      />
                                    </a>
                                  </div>
                                  <div className="content_box mob-text-left">
                                    <h3 className="mt-4 mb-2 lh-30">
                                      <a
                                        href="#"
                                        className="fw-bold fs-25 openSans text_color_1"
                                      >
                                        Our tea is now available in all Hilton
                                        Hotels in the UK!
                                      </a>
                                    </h3>
                                    <p className="fw-light openSans fs-16 lh-30">
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands! A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="img_content_grid carousel-item"
                                  data-slide-number="2"
                                >
                                  <div className="fixed_size_img_1">
                                    <a href="#">
                                      <img
                                        src="src/img/post-img.jpg"
                                        alt="Post Image"
                                      />
                                    </a>
                                  </div>
                                  <div className="content_box mob-text-left">
                                    <h3 className="mt-4 mb-2 lh-30">
                                      <a
                                        href="#"
                                        className="fw-bold fs-25 openSans text_color_1"
                                      >
                                        Our tea is now available in all Hilton
                                        Hotels in the UK!
                                      </a>
                                    </h3>
                                    <p className="fw-light openSans fs-16 lh-30">
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands! A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <a
                                  className="carousel-control-prev"
                                  href="#news_slider"
                                  role="button"
                                  data-slide="prev"
                                >
                                  <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                  ></span>
                                  <span className="sr-only">Previous</span>
                                </a>
                                <a
                                  className="carousel-control-next"
                                  href="#news_slider"
                                  role="button"
                                  data-slide="next"
                                >
                                  <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                  ></span>
                                  <span className="sr-only">Next</span>
                                </a>
                              </div>

                              <div className="carousel-indicators">
                                <div className="row">
                                  <div className="col-xs-4">
                                    <div className="item">
                                      <a
                                        id="carousel-selector-0"
                                        className="selected"
                                        data-slide-to="0"
                                        data-target="#news_slider"
                                      >
                                        <div className="img_content_grid">
                                          <div className="fixed_size_img_1">
                                            <a href="#">
                                              <img
                                                src="src/img/post-img.jpg"
                                                alt="Post Image"
                                              />
                                            </a>
                                          </div>
                                          <div className="content_box pr-lg-2">
                                            <h3 className="mt-3 mb-2 lh-30">
                                              <a
                                                href="#"
                                                className="fw-bold fs-22 openSans text_color_1"
                                              >
                                                Our tea is now available in all
                                                Hilton Hotels in the UK!
                                              </a>
                                            </h3>
                                            <p className="fw-light openSans fs-16 lh-30">
                                              A leading manufacturer in flexible
                                              packaging, Established for over 40
                                              Years, we're trusted by the
                                              biggest consumer brands! A leading
                                              manufacturer in flexible
                                              packaging, Established for over 40
                                              Years, we're trusted by the
                                              biggest consumer brands!
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-xs-4">
                                    <div className="item">
                                      <a
                                        id="carousel-selector-1"
                                        className="selected"
                                        data-slide-to="1"
                                        data-target="#news_slider"
                                      >
                                        <div className="img_content_grid">
                                          <div className="fixed_size_img_1">
                                            <a href="#">
                                              <img
                                                src="src/img/post-img.jpg"
                                                alt="Post Image"
                                              />
                                            </a>
                                          </div>
                                          <div className="content_box pr-lg-2">
                                            <h3 className="mt-3 mb-2 lh-30">
                                              <a
                                                href="#"
                                                className="fw-bold fs-22 openSans text_color_1"
                                              >
                                                Our tea is now available in all
                                                Hilton Hotels in the UK!
                                              </a>
                                            </h3>
                                            <p className="fw-light openSans fs-16 lh-30">
                                              A leading manufacturer in flexible
                                              packaging, Established for over 40
                                              Years, we're trusted by the
                                              biggest consumer brands! A leading
                                              manufacturer in flexible
                                              packaging, Established for over 40
                                              Years, we're trusted by the
                                              biggest consumer brands!
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-xs-4">
                                    <div className="item">
                                      <a
                                        id="carousel-selector-0"
                                        className="selected"
                                        data-slide-to="2"
                                        data-target="#news_slider"
                                      >
                                        <div className="img_content_grid">
                                          <div className="fixed_size_img_1">
                                            <a href="#">
                                              <img
                                                src="src/img/post-img.jpg"
                                                alt="Post Image"
                                              />
                                            </a>
                                          </div>
                                          <div className="content_box pr-lg-2">
                                            <h3 className="mt-3 mb-2 lh-30">
                                              <a
                                                href="#"
                                                className="fw-bold fs-22 openSans text_color_1"
                                              >
                                                Our tea is now available in all
                                                Hilton Hotels in the UK!
                                              </a>
                                            </h3>
                                            <p className="fw-light openSans fs-16 lh-30">
                                              A leading manufacturer in flexible
                                              packaging, Established for over 40
                                              Years, we're trusted by the
                                              biggest consumer brands! A leading
                                              manufacturer in flexible
                                              packaging, Established for over 40
                                              Years, we're trusted by the
                                              biggest consumer brands!
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>Shop by category</h3>
            <div className="home-page__categories__list">
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    to={generateCategoryUrl(category.id, category.name)}
                    key={category.id}
                  >
                    <div
                      className={classNames(
                        "home-page__categories__list__image",
                        {
                          "home-page__categories__list__image--no-photo": !category.backgroundImage,
                        }
                      )}
                      style={{
                        backgroundImage: `url(${
                          category.backgroundImage
                            ? category.backgroundImage.url
                            : noPhotoImg
                        })`,
                      }}
                    />
                    <h3>{category.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Page;
