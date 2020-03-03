import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { withPrefix } from "gatsby";
import Fade from "react-reveal/Fade";
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
                localFile {
                  childImageSharp {
                    id
                    sizes(maxWidth: 1000) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
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
          <Fade bottom>
            <div className="slider-rotate__container">
              {data.wordpressAcfPages.acf.slider_expertises.map((item, i) => (
                <div className="slider-rotate__item " key={i}>
                  <img
                    src={item.image_slider.localFile.childImageSharp.sizes.src}
                    sizes={item.image_slider.localFile.childImageSharp.sizes}
                    alt={item.image_slider.alt_text}
                  />
                  <div className="text">
                    <h2> {item.title_slider} </h2>
                    <div className="se_exp_excerpt">
                      <p>{item.paragraphe_slider}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <Helmet>
          <script async src={withPrefix("file.js")} />
        </Helmet>
      </div>
    )}
  />
);

export default SimpleSlider;
