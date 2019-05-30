import React, {Component} from 'react';

class BlueBin extends Component {

    render(){
        console.log(this.props);
        return(
            <div>
                <button onClick={this.props.copyArrayFunction}>BlueBin :(</button>



                {/* <div>
                    <h1>I need to remove Blue Bin Items on the button click:</h1>
                    <button className={this.state.blueBinVisibility.join(' ')} onClick={this.toggle.bind(this)}>Remove ITEM :(</button>
                </div>

                <li className={this.state.blueBinVisibility.join(' ')} onClick={this.toggle.bind(this)}>

                    {this.state.addClass ? "Remove a class" : "Add a class (click the box)"}<br />Read the tutorial <a href="http://www.automationfuel.com" target="_blank">here</a>.</li> */}
            </div>
        )//Close Render
    }//close Render
}//Close Class Bluebin

//Export BlueBin
export default BlueBin;