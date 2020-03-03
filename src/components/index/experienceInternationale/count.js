import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const TitleExpInt = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            count_ai {
              name_ai
              numbers_ai
            }
          }
        }
      }
    `}
    render={data => (
      <div className="col-sm-12 p0">
        <Fade bottom>
          <div className="se_map_nomb">
            <div className="row ">
              {data.wordpressAcfPages.acf.count_ai.map(item => (
                <Fade bottom>
                  <div className="col-12 col-sm-4" key={item.name_ai}>
                    <p>
                      <span className="lines">{item.numbers_ai}</span>
                      {item.name_ai}
                    </p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    )}
  />
);
export default TitleExpInt;
