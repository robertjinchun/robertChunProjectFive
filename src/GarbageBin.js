import React, { Component } from 'react';
// This is my component for the GarbageBin Button
class GarbageBin extends Component {

    // The event handler for Garbage bin
    handleClickForGarbageBin = (e) => {
        e.preventDefault();
        this.props.onhandleGarbageBinClicked(e.target.onClick);
    }
    render() {
        return (
            <React.Fragment>
                {
                    <button onClick={this.handleClickForGarbageBin}>Garbage</button>
                }
            </React.Fragment>
        )//Close Return
    }//Close Render
}//Class of GarbageBin

//Exporting GarbageBin
export default GarbageBin;