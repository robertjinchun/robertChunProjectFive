import React, { Component } from 'react';
import swal from '@sweetalert/with-react'

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.handleClickForBlueBin = this.handleClickForBlueBin.bind(this);
        this.handleClickForGarbage = this.handleClickForGarbage.bind(this);
    }
    handleClickForBlueBin = (event) => {
        event.preventDefault();
        console.log(this.props.garbageListToShow)
        this.setState({
            // ButtonblueBin: true,
            // ButtonGarbageBin: false,
            garbageListToShow: this.garbageCategoriesBlueBin

        })
    }

    handleClickForGarbage = (event) => {
        event.preventDefault();
        console.log('hello1')
        this.setState({
            // ButtonblueBin: false,
            // ButtonGarbageBin: true,
            garbageListToShow: this.garbageCategoriesGarbage
        })
    }


    // handleClickForItems = (index, event) => {
    //     event.preventDefault();
    //     // console.log(this.state.garbageCategoriesGarbage)
    //     console.log(index);
    //     console.log(this.state.ButtonblueBin);
    //     console.log(this.state.GarbageBin);
    //     if (this.state.ButtonGarbageBin) {
    //         swal(
    //             <div className='sweet'>
    //                 <p className='sweetTitle'>{this.state.garbageCategoriesGarbage[index].title}</p>
    //                 <p className='sweetCategory'>
    //                     {this.state.garbageCategoriesGarbage[index].category}
    //                 </p>
    //                 <p className='sweetKey'>
    //                     {this.state.garbageCategoriesGarbage[index].keywords}
    //                 </p>
    //             </div>
    //         )
    //     } else {
    //         swal(
    //             <div className='sweet'>
    //                 <p className='sweetTitle'>{this.state.garbageCategoriesBlueBin[index].title}</p>
    //                 <p className='sweetCategory'>
    //                     {this.state.garbageCategoriesBlueBin[index].category}
    //                 </p>
    //                 <p className='sweetKey'>
    //                     {this.state.garbageCategoriesBlueBin[index].keywords}
    //                 </p>
    //             </div>
    //         )
    //     }
    //     this.setState({
    //         // garbageListToShow: this.state.garbageCategoriesGarbage
    //     })
    // }


    render() {
        console.log(this.props.garbageListToShow)
        return (
            <div>
                {
                    <button onClick={this.handleClickForBlueBin}>BlueBin</button>
                }
                {
                    <button onClick={this.handleClickForGarbage}>Garbage</button>
                }
            </div>
        )
    }
}

export default Buttons;