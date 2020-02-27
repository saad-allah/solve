
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      loop:true,
      centerPadding: "140px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div className="col-sm-12 p0 col-lg-10">
        <Slider {...settings}>
        <div className="slider-rotate__item "><img src="https://solvemaroc.com/assets/images/cover_slider.jpg" alt='Revêtement de Sol Industriel En Epoxy & Polyurethane au Maroc'/>
                  <div className="text">
                    <h2>Travaux de résine de sol industriel </h2>
                    <div className="se_exp_excerpt">
                      <p>
                        Deux expertises en terme d'études et d'execution sont à votre disposition : L'expertise d'application ÉPOXY et l'expertise d'application POLYURETHANE. Confiez vos travaux à une équipe d'experts pour bénéficier d'une rigueur
                        et une application dans les règles de l'art.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider-rotate__item "><img src="https://solvemaroc.com/assets/images/cover_slider_2.jpg" alt='Revêtement de Sol Industriel En Epoxy & Polyurethane au Maroc'/>
                  <div className="text">
                    <h2>Travaux de résine de sol industriel </h2>
                    <div className="se_exp_excerpt">
                      <p>
                        Deux expertises en terme d'études et d'execution sont à votre disposition : L'expertise d'application ÉPOXY et l'expertise d'application POLYURETHANE. Confiez vos travaux à une équipe d'experts pour bénéficier d'une rigueur
                        et une application dans les règles de l'art.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider-rotate__item "><img src="https://solvemaroc.com/assets/images/cover_slider_3.jpg" alt='Revêtement de Sol Industriel En Epoxy & Polyurethane au Maroc'/>
                  <div className="text">
                    <h2>Travaux de résine de sol industriel </h2>
                    <div className="se_exp_excerpt">
                      <p>
                        Deux expertises en terme d'études et d'execution sont à votre disposition : L'expertise d'application ÉPOXY et l'expertise d'application POLYURETHANE. Confiez vos travaux à une équipe d'experts pour bénéficier d'une rigueur
                        et une application dans les règles de l'art.

                      </p>
                    </div>
                  </div>
                </div>
         
        </Slider>
      </div>
    );
  }
}