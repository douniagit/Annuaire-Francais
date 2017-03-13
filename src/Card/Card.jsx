import React from 'react';
import './Card.css';
import data from "../data/dataRessource.js";


class Card extends React.Component {

  render() {
    return (
      <div className="cardContainer">
          <h4>150 ressources gratuites à disposition </h4>
          {data.site.map(info =>
          <div className="contentCard">
                <div className="Card">
                  <img src={info.images} alt="cocoricoPicture" className="img"/>
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
                </div>
          </div>
        )
        }  
      </div>


    );
  }
}

export default Card;
