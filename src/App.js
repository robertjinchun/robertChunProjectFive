import React, { Component } from 'react';
import BlueBin from './BlueBin.js';
import GarbageBin from './GarbageBin.js';
import axios from 'axios';
import './App.css';


class App extends Component {
  //Construcor which is kind of what it does??
  constructor() {
    super();
    this.state = {
      isLoading: true,
      garbageCategories: [],
    }
    console.log('constructor');
  }

  //This is where I should put my axios call
  componentDidMount() {
    console.log('Mounted');
    //created ajax request
    axios({
      //The API has no other way of sending exact data. I need to call the whole database.
      url: 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=250',
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
      // response.data.forEach((elt, i) => console.log(i, elt));
      response = response.data;
      console.log(`the length ${response.length}`)
      this.setState({
        garbageCategories: [response],

        isLoading: false,
      })
    })
  }

  //refresh when setState is called
  render() {
    return (
      <div className='App'>
        {this.state.isLoading ? (
          //if this loading statement is false, info goes here
          <p>Loading...</p>
        ) : (

            <ul>


              {/* {console.log(this.state.garbageCategories)} */}
              {this.state.garbageCategories[0].map((category, i) =>{
                return(
                  
                  <li key = {i}>{category.title}</li>
                )
                

              })}

              {/* {this.state.garbageCategories.map((garbage, i) => {
                return (
                  <li>
                    <p>{garbage[i]}</p>
                  </li>
                )
              })} */}
            </ul>
          )
        }
        )
      }

      </div>
    ); //bracket for return
  } //Bracket for render
}//bracket for class App

export default App;
