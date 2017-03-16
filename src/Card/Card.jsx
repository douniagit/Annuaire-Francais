import React from 'react';
import './Card.css';
import data from "../data/dataRessource.js";
import "../Input/Input.jsx";

class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log('value card', this.props.value)
    // console.log('results', results);
    return (
      <div className="cardContainer">
<<<<<<< HEAD
          <h4>150 ressources gratuites à disposition </h4>
          {data.site.filter(
            (item) => {
              if (this.props.value.length === 0 || this.props.value[0] === "") {
                  return true
              }else{
                return item.keywords.filter((keyword) => {
                  return this.props.value.indexOf(keyword) > -1;
                }
                ).length === this.props.value.length;
              }
            }
          ).map(info =>{
            return(

              <div className="contentCard">
                <div className="Card">
                  <div className="img-container">
                    <img src={info.images} alt={info.name} className="img"/>
                  </div>
                  <div className="text">
                    <div className="title">{info.name}</div>
                    <div className="desc">{info.description}</div>
                  </div>
                  <div className="wrapp">
                    <div className="icones">
                      <img src="#" alt="langue"/>
                      <img src="#" alt="niveau"/>
                      <img src="#" alt="format"/>
                    </div>
                  </div>
                  <a href={info.lien} className="button-card">GO</a>
                </div>

<<<<<<< HEAD
              </div>
            )
          }
=======
          </div>
>>>>>>> d73556129122b0788fdabb5a5f838851446bb97e

        )
        }
      </div>
    );
  }
}

export default Card;
