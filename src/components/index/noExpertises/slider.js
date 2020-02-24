import { StaticQuery, graphql } from "gatsby";
import React from "react";

const SliderExp = () => (
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
              <div className="slider-rotate__item " key={item.title_slider}>
                <div className="text">
                  <h2> {item.title_slider} </h2>
                  <div className="se_exp_excerpt"></div>
                  {item.paragraphe_slider}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  />
);
export default SliderExp;
