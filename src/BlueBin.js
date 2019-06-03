import React, { Component } from 'react';

class BlueBin extends Component {

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