import React, { Component } from 'react';

import './App.css';
import {BrowserRouter, Route, Link} from  'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state= {};
      }

  
  render(){
    
    return (
      <div className="Main">
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/contactlist" component=
            {ContactListSection} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const Navigation = (props)=>{
  return (
          <nav>
            <p>
              <ul>
                <li>
                  <Link class="nav" to={`/Home`}>Home</Link>    
                </li>
                <li>
                <Link class="nav" to={`/About`}>About</Link>
                </li>
                <li>
                <Link class="nav" to={`/services`}>Services</Link>
                </li>  
                <li>
                <Link class="nav" to={`/contactlist`}>Contact List</Link>
                </li> 
              </ul>
            </p>
          </nav>
  )
}

const Home = (props) => {
  return(
    <div>
      Andrea
    </div>
  )

}

class ContactListSection extends Component {
  constructor(props){
    super(props);
      
    this.state= {
      all:[],
      favorites:[]
    };
    
  
  
   this.addToFavorites = this.addToFavorites.bind(this);
  }
   
   addToFavorites(contact){
     const newAll = this.state.all.filter ( c => c.login.uuid !== contact.login.uuid);
     const newfavorites = this.state.favorites.concat(contact);

console.log("Añadir a favoritos", contact);
  //necesito añadir caracteristicas.
   }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data => {
        this.setState({
          all: data.results
        });
      });
  }

  
  render(){
    console.log(this.state);
    return (
      <div id="section">
        <ContactList className="App" all=
        {this.state.all} title="Todos"
        addToFavorites={this.addToFavorites}/>

        <ContactList className="favorites" all=
        {this.state.favorites} title="Favoritos"  key ="2" addToFavorites ={this.addToFavorites}/>
      </div>
    );
  }
}

const ContactList =props =>{
  return(
    <div className={props.className}>
      <h2>{props.title}</h2>
    {
      props.all.map(
        contact => (
          <ContactCard key={contact.name.first} contact = {contact} addToFavorites={props.addToFavorites}/>
        )
      )
    }
    </div>
  );
  }



class ContactCard extends Component {
  constructor (props){
    super(props);

    this.onClickFavorites = this.onClickFavorites.bind(this);

  }

  onClickFavorites(){
    this.props.addToFavorites(this.props.contact);
  }


  render(){
    return(
       <div className="contact-card">
        <figure>
          <img src={this.props.contact.picture.medium} alt="Autor"/>
          
          
          <figcaption>
            {this.props.contact.name.first}
            {this.props.contact.name.last}
          </figcaption>
        </figure>
        <button onClick={this.onClickFavorites}>Favorito</button>
        <button>Eliminar</button>
      </div>
    );
  }
};


export default App;
