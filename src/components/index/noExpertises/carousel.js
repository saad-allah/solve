import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { withPrefix, Link } from "gatsby";

const SimpleSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            slider_expertises {
              image_slider {
                source_url
                alt_text
              }
              title_slider
              paragraphe_slider
            }
          }
        }
      }
    `}
    render={data => (
      <div className="col-12">
        <div className="slider-rotate" id="slider-2">
          <div className="slider-rotate__container">
          {data.wordpressAcfPages.acf.slider_expertises.map(item => (
            <div className="slider-rotate__item ">
              <img
                src={item.image_slider.source_url}
                alt={item.image_slider.alt_text}
              />
              <div className="text">
              <h2> {item.title_slider} </h2>
                <div className="se_exp_excerpt">
                  <p>
                  {item.paragraphe_slider}
                  </p>
                </div>
              </div>
            </div>
                ))}
          </div>
        </div>
        <Helmet>
          <script src={withPrefix("file.js")} />
        </Helmet>
      </div>
    )}
  />
);

export default SimpleSlider;
