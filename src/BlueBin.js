import React, { Component } from 'react';

// This is my component for blue bin button
class BlueBin extends Component {

    // event handler for the button click
    handleClickForBlueBin = (e) => {
        e.preventDefault();
        this.props.onhandleBlueBinClicked(e.target.onClick);
    }

    render() {
        return (
            <React.Fragment>
                {
                    <button onClick={this.handleClickForBlueBin}>BlueBin</button>
                }
            </React.Fragment>
        )//Close Render
    }//close Render
}//Close Class Bluebin

//Export BlueBin
export default BlueBin;