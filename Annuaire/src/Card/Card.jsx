import React from 'react';
import './Card.css';


class Card extends React.Component {

  render() {
    return (
      <div className="cardContainer">

          <div className="contentCard">
                <div className="Card">
                  <img src="http://cdn05.branchez-vous.com/wp-content/uploads/2016/09/bge2-800x410.jpg" alt="cocoricoPicture" className="img"/>
                  <div className="text">
                    <div className="title">babel</div>
                    <div className="desc">cours de langues goifghjktykeljg lzegkoer jgdljlkefioerj gkdjlsekfio ejhdkjb lkfozeg</div>
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
        
      </div>


    );
  }
}

export default Card;
