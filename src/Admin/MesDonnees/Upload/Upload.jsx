import React, {Component} from 'react';

import './Upload.css'


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    value: '',
    valueOne: '',
    valueTwo: '',
    valueThree: '',
};

  this.handleChange = this.handleChange.bind(this);
  this.handleChange1 = this.handleChange1.bind(this);
  this.handleChange2 = this.handleChange2.bind(this);
  this.handleChange3 = this.handleChange3.bind(this);

}

handleChange(event) {
  this.setState({value: event.target.value});
}
handleChange1(event) {
  this.setState({valueOne: event.target.value});
}
handleChange2(event) {
  this.setState({valueTwo: event.target.value});
}
handleChange3(event) {
  this.setState({valueThree: event.target.value});
}
    render() {
        return (
          <div className="header">

          <div id="bouton">
            <div id="nav_language">
              LANGUE
            </div>
            <div id="nav_age">
              AGE
            </div>
            <div id="nav_format">
              FORMAT
            </div>
            <div id="nav_niveau">
              NIVEAU
            </div>

          </div>

<div className='formul'>

          <div className="container">
            <div>
            <p className="lien">lien</p>
            <input type="text" name="prenom" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div>
            <p className="lien">nom</p>
            <input type="text" name="prenom" value={this.state.valueOne} onChange={this.handleChange1} />
            </div>
            <div>
            <p className="lien">icone</p>
            <input type="text" name="prenom" value={this.state.valueTwo} onChange={this.handleChange2} />
            </div>
            <div>
            <p className="lien">description</p>
            <input type="text" name="prenom" value={this.state.valueThree} onChange={this.handleChange3} />
            </div>
            <button>valider</button>
            </div>

</div>

          </div>






        );
    }
}

export default App;
