import React, { Component } from 'react';
import './modal.css';

class AddRessource extends Component {
  constructor(props) {
   super(props);
   this.state = { isClick: false };
 }
  onClickHandler() {
    this.setState({isClick: true});
  }
  onClickHandlerCancel(){
    this.setState({isClick: false});
  }
  render() {
    return (
      <div className="add-ressource">
        <h3 className="add-ressource-text">Ressources is missing?</h3>
        <button className="add-ressource-button" onClick={(e) => this.onClickHandler(e)}>Add yours</button>
        <div className="modal" style={{display: (this.state.isClick)? 'flex': 'none'} }>
            <div className="modal-container">
              <form action="">
                <label htmlFor="nom">First name</label>
                <input type="text" placeholder="John" name="nom"/>
                <label htmlFor="prenom">Last name</label>
                <input type="text" placeholder="Do" name="prenom"/>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="john.do@email.com" name="email"/>
                <label htmlFor="lien">Yout link to add</label>
                <textarea name="lien" placeholder="http://www.mylink.com" id="lien-ajout" cols="15" rows="3"></textarea>
                <div className="button-modal">

                  <button className="submit" onClick={(e) => this.onClickHandlerCancel(e)}>Submit</button>
                  <button className="cancel" onClick={(e) => this.onClickHandlerCancel(e)}>Cancel</button>

                  <button type="button" className="submit" onClick={(e) => this.onClickHandlerCancel(e)}>Submit</button>
                  <button type="button" className="cancel" onClick={(e) => this.onClickHandlerCancel(e)}>Cancel</button>

                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default AddRessource;
