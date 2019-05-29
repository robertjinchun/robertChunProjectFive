import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  //Construcor which is kind of what it does??
  constructor() {
    super();
    this.state = {
      isLoading: true,
      temporaryItems:[],
    }
    console.log('constructor');
  }

  //This is where I should put my axios call
  componentDidMount() {
    console.log('Mounted');
    //created ajax request
    axios({
      url: 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000',
      method: 'GET',
      headers: {
        UserAgent: "PostmanRuntime/7.13.0",
        Accept: "*/*",
        CacheControl: "no-cache",
        PostmanToken: "3855ce5c-03a7-46ba-89df-cee728c768ba,341124e0-2a2b-47e3-bd63-b44d7ce86e3b",
        acceptencoding: "gzip, deflate",
        cachecontrol: "no-cache"
      }
    }).then((response) => {
      console.log(response.data);
      this.setState({
        temporaryItems: [...response.data],
        isLoading: false,
      })
    })
  }

  //refresh when setState is called
  render() {
    return (
      <div className='App'>
        {this.state.isLoading ?
          //pre loader here
          <p>Loading...</p> :

        //after the preloader, code goes under here
          console.log('here I am')

          

          // this.state.art.map((item) => {
          //   return (
          //     <div key={item.id} className="art-item">
          //       <h2>{item.title}</h2>
          //       <img src={item.headerImage.url} alt={item.title} />
          //     </div>
          //   )
          // })

        }
      </div>
    ); //bracket for return
  } //Bracket for render
}//bracket for class App

export default App;
