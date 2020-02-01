import { sanitize } from "dompurify";
import draftToHtml from "draftjs-to-html";
import React from "react";

import { IProps } from "./types";

export const RichTextContent: React.FC<IProps> = ({ descriptionJson }) => (
  <>
    {descriptionJson && (
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitize(draftToHtml(JSON.parse(descriptionJson))),
          }}
        />
        <div className="product_features">
          <div className="col-lg-9 pl-lg-0 pr-lg-0 mt-md-4 pt-lg-3">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2">
                <h2 className="fw-bold fs-20 playFairDisplay text_color_1">
                  Brewing Time
                </h2>
                <p className="text_color_5 fs-16 fw-light lh-30">3-5 Mins</p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2">
                <h2 className="fw-bold fs-20 playFairDisplay text_color_1">
                  Origin
                </h2>
                <p className="text_color_5 fs-16 fw-light lh-30">Europe</p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2 px-lg-0">
                <h2 className="fw-bold fs-20 playFairDisplay text_color_1">
                  Caffine
                </h2>
                <p className="text_color_5 fs-16 fw-light lh-30">Yes</p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2 px-lg-0">
                <h2 className="fw-bold fs-20 playFairDisplay text_color_1">
                  Temperature
                </h2>
                <p className="text_color_5 fs-16 fw-light lh-30">Yes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </>
    )}
  </>
);
