import React, { Component } from 'react';
import logo from './logo.svg';
import swal from '@sweetalert/with-react'
// import BlueBin from './BlueBin.js';
// import GarbageBin from './GarbageBin.js';
import axios from 'axios';
import './App.css';




class App extends Component {
  //Construcor which is kind of what it does??
  constructor() {
    super();
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
    console.log('constructor');
  }


  //I need to sort through my array of categories to find all the ones that have a blue Bin
  categorySorter = (fullArray, sortType) => {
    const regexTruthygarbageTypeBlueBin = /blue.bin/gi;
    const regexTruthygarbageTypeGarbage = /garbage/gi;
    const regexCutBlueBin = /blue.bin|\(|\)/gi;
    const regexCutGarbage = /garbage|\(|\)/gi;

    const updatedCategoryArray = [];
    // console.log(fullArray)

    fullArray.map((item, i) => {
      // console.log(item)
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

  //I need to copy what array I need to show

  handleClickForBlueBin = (event) => {
    event.preventDefault();
    console.log('hello')
    this.setState({
      ButtonblueBin: true,
      ButtonGarbageBin: false,
      garbageListToShow: this.state.garbageCategoriesBlueBin

    })
  }

  handleClickForGarbage = (event) => {
    event.preventDefault();
    console.log('hello1')
    this.setState({
      ButtonblueBin: false,
      ButtonGarbageBin: true,
      garbageListToShow: this.state.garbageCategoriesGarbage
    })
  }

  handleInputBoxInput = (event) => {
    this.setState({ title: event.target.value })
  }

  handleClickForItems = (index, event) => {
    event.preventDefault();
    // console.log(this.state.garbageCategoriesGarbage)
    console.log(index);
    console.log(this.state.ButtonblueBin);
    console.log(this.state.GarbageBin);
    if (this.state.ButtonGarbageBin) {
      swal(
        <div className = 'sweet'>
          <p className='sweetTitle'>{this.state.garbageCategoriesGarbage[index].title}</p>
          <p className='sweetCategory'>
            {this.state.garbageCategoriesGarbage[index].category}
          </p>
          <p className='sweetKey'>
            {this.state.garbageCategoriesGarbage[index].keywords}
          </p>
        </div>
      )
    } else {
      swal(
        <div className='sweet'>
          <p className='sweetTitle'>{this.state.garbageCategoriesBlueBin[index].title}</p>
          <p className='sweetCategory'>
            {this.state.garbageCategoriesBlueBin[index].category}
          </p>
          <p className='sweetKey'>
            {this.state.garbageCategoriesBlueBin[index].keywords}
          </p>
        </div>
      )
    }




    this.setState({
      // garbageListToShow: this.state.garbageCategoriesGarbage
    })
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
      // let category = this.categorySorter(response);
      console.log(response)

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
              <div className ='categorySelector'>
                {
                  <button onClick={this.handleClickForBlueBin}>BlueBin</button>
                }
                {
                  <button onClick={this.handleClickForGarbage}>Garbage</button>
                }
              </div>

              <ul>
                {this.state.garbageListToShow.map((category, i) => {
                  return (
                    <li key={i} tabIndex ='0' onClick={this.handleClickForItems.bind(this, i)}>{category.title}</li>
                  )
                })}
              </ul>
            </div>
          )
        }
      </div>
    ); //bracket for return
  } //Bracket for render
}//bracket for class App

export default App;
