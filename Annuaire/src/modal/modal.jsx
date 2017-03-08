import React, { Component } from 'react';
import './modal.css'

class Modal extends Component {
  render() {
    return (
      <div className="modal">
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
              <button className="submit">Submit</button>
              <button className="cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
