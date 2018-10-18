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
   this.removeFromFavorites = this.removeFromFavorites.bind(this);
   
  }
   
   addToFavorites(contact){
     console.log("Añadir a favoritos", contact);
     const newAll = this.state.all.filter ( c => c.id.value !== contact.id.value);
     const newFavorites = this.state.favorites.concat(contact);
     this.setState({
       all:newAll,
       favorites: newFavorites
     });

    console.log("index", newAll);
  //necesito añadir caracteristicas.
   }


   removeFromFavorites(contact){
     console.log("Eliminar de favoritos", contact);
     const newAll = this.state.favorites.filter ( c => c.id.value !== contact.id.value);
     const newFavorites = this.state.all.concat(contact);
     this.setState({
       all:newFavorites,
       favorites: newAll
    });

    console.log("index", newFavorites);
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
    this.onClickAll = this.onClickAll.bind(this);

  }

  onClickFavorites(){
    this.props.addToFavorites(this.props.contact);
  }


    
  onClickAll(){
    this.props.removeFromFavorites(this.props.contact);

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
        <button onClick={this.onClickAll}>Eliminar</button>
      </div>
    );
  }
};


export default App;
