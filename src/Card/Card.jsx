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
                  <img src="https://s-media-cache-ak0.pinimg.com/originals/e1/11/5a/e1115afea56dcaf0c273a4f3d9fc7f3a.jpg" alt="cocoricoPicture" className="img"/>
                  <div className="text">
                    <div className="title">{info.name}</div>
                    <div className="desc">{info.description}</div>
                  </div>
                  <div className="wrapp">
                    <div className="icones">
                      <img src="#" alt="A"/>
                      <img src="#" alt="B"/>
                      <img src="#" alt="C"/>
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
