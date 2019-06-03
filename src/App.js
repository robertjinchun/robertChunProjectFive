import React, { Component } from 'react';
import logo from './logo.svg';
import BlueBin from './BlueBin.js';
import GarbageBin from './GarbageBin.js';
import UpdateList from './UpdateList.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  //Construcor which is kind of what it does??
  constructor() {
    super();

    //the many states I used
    this.state = {
      isLoading: true,
      ButtonblueBin: false,
      ButtonGarbageBin: false,
      UserInputString: '',
      garbageCategoriesAll: [],
      garbageCategoriesBlueBin: [],
      garbageCategoriesGarbage: [],
      garbageListToShow: [],
    }
  }

  //I need to sort through my array of categories to find all the items that either have a blue Bin or garbage
  categorySorter = (fullArray, sortType) => {
    const regexTruthygarbageTypeBlueBin = /blue.bin/gi;
    const regexTruthygarbageTypeGarbage = /garbage/gi;
    const regexCutBlueBin = /blue.bin|\(|\)/gi;
    const regexCutGarbage = /garbage|\(|\)/gi;
    const updatedCategoryArray = [];

    //the function I created to kind of filter through my array
    fullArray.map((item, i) => {
      if (sortType === 'blueBin') {
        if (regexTruthygarbageTypeBlueBin.exec(item.category)) {
          item.title = item.title.replace(regexCutBlueBin, '');
          updatedCategoryArray.push(item);
        }
      }
      if (sortType === 'garbage') {
        if (regexTruthygarbageTypeGarbage.exec(item.category)) {
          item.title = item.title.replace(regexCutGarbage, '');
          updatedCategoryArray.push(item);
        }
      }
      return (
        updatedCategoryArray
      )
    })
    return (updatedCategoryArray)
  }

  //updates the required states when it is called
  handleBlueBinClicked = (click1) => {
    this.setState({
      ButtonblueBin: true,
      ButtonGarbageBin: false,
      blueBinClicked: click1
    });
  }
  //updates the required states when it is called
  handleGarbageBinClicked = (click2) => {
    this.setState({
      ButtonblueBin: false,
      ButtonGarbageBin: true,
      garbageBinClicked: click2
    })
  }

  //This is where I should put my axios call
  componentDidMount() {
    //created Axios request
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
      response = response.data;
      this.setState({
        garbageCategoriesAll: response,
        garbageCategoriesBlueBin: this.categorySorter(response, "blueBin"),
        garbageCategoriesGarbage: this.categorySorter(response, "garbage"),
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
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        ) : (

          //the main bulk of the program under here
            <div className='body wrapper'>
              <header className=''>
                <div className="mainTitle">
                  <h2>REDUCE</h2>
                  <h2>REUSE</h2>
                  <h1>RECYCLE</h1>
                </div>

                <div className='underlay'>
                  <div className='quoteBox1'>
                    <blockquote>
                      <h3>The Earth is a fine place and worth fighting for.</h3>
                      <h4>-Ernest Hemingway</h4>
                    </blockquote>
                  </div>
                  <div className='quoteBox2'>
                    <blockquote>
                      <h3>The greatest threat to our planet is the belief that someone else will save it.</h3>
                      <h4>-Robert Swan</h4>
                    </blockquote>
                  </div>
                </div>
              </header>
              <div className='categorySelector'>
                {/* calls the blueBin button */}
                {
                  <BlueBin className = 'blueButton'
                    mass={this.state}
                    onhandleBlueBinClicked={this.handleBlueBinClicked}
                  />
                }
                {/* calls the Garbage button */}
                {
                  <GarbageBin className='garbageButton'
                    mass={this.state}
                    onhandleGarbageBinClicked={this.handleGarbageBinClicked}
                  />
                }
              </div>

              <div>
                {/* calls the Updated list */}
                <UpdateList
                  mass={this.state} />
              </div>
            </div>
          )
        }
      </div>
    ); //bracket for return
  } //Bracket for render
}//bracket for class App

export default App;
