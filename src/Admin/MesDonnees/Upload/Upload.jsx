import React, {Component} from 'react';
import Selection from '../../Components/InterfaceComponents/Selection/Selection.jsx'
import Header from '../../Components/InterfaceComponents/Header/Header.jsx'

import '../CssData/Style.css'
import '../../MonStyle/CssStyle/Style.css'


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

          <div className="update-container">
          <Header />
        <div className="contain-update">
          <Selection />
          <div className="update">
          <div className="filtre-container">
            <div className="filtre">
            <div className="filtre-contain">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">LANGUE</a>
                  <ul className="dropdown-menuf ulresp">
                    <li><a className="parc" href="#"><input className="lastname" type="text" name="lastname" value=""></input><button>Confirm</button></a></li>
                  </ul>
                </li>

              </ul>
            </div>
            </div>
            <div className="filtre">
            <div className="filtre-contain">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">AGE</a>
                  <ul className="dropdown-menuf ulresp">
                    <li><a className="parc" href="#"><input className="lastname" type="text" name="lastname" value=""></input><button>Confirm</button></a></li>
                  </ul>
                </li>

              </ul>
            </div>
            </div>
            <div className="filtre">
            <div className="filtre-contain">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">FORMAT</a>
                  <ul className="dropdown-menuf ulresp">
                    <li><a className="parc" href="#"><input className="lastname" type="text" name="lastname" value=""></input><button>Confirm</button></a></li>
                  </ul>
                </li>

              </ul>
            </div>
            </div>
            <div className="filtre">
            <div className="filtre-contain">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">NIVEAU</a>
                  <ul className="dropdown-menuf ulresp">
                    <li><a className="parc" href="#"><input className="lastname" type="text" name="lastname" value=""></input><button>Confirm</button></a></li>
                  </ul>
                </li>

              </ul>
            </div>
            </div>

          </div>

<div className='formul'>

          <div>
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
              <textarea name="ameliorer" className="descr-btn"></textarea>
              </div>
              <button className="button3 btn">Submit</button>
            </div>

</div>
          </div>


          </div>
          </div>






        );
    }
}

export default App;
