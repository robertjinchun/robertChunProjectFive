import React, { Component } from 'react';
import swal from '@sweetalert/with-react'

//Class for my list that is required to be updated every time I need to
class UpdateList extends Component {
    //event handler for my list items that can be clicked on
    handleClickForItems = (index, event) => {
        event.preventDefault();

        if (this.props.mass.ButtonGarbageBin) {
            swal(
                <div className='sweet'>
                    <p className='sweetTitle'>{this.props.mass.garbageCategoriesGarbage[index].title}</p>
                    <p className='sweetCategory'>
                        {this.props.mass.garbageCategoriesGarbage[index].category}
                    </p>
                    <p className='sweetKey'>
                        {this.props.mass.garbageCategoriesGarbage[index].keywords}
                    </p>
                </div>
            )
        } else {
            swal(
                <div className='sweet'>
                    <p className='sweetTitle'>{this.props.mass.garbageCategoriesBlueBin[index].title}</p>
                    <p className='sweetCategory'>
                        {this.props.mass.garbageCategoriesBlueBin[index].category}
                    </p>
                    <p className='sweetKey'>
                        {this.props.mass.garbageCategoriesBlueBin[index].keywords}
                    </p>
                </div>
            )
        }
    }
    render() {
        let temp = [];
        if (this.props.mass.ButtonblueBin === true) {
            temp = this.props.mass.garbageCategoriesBlueBin;
        } else if (this.props.mass.ButtonGarbageBin === true) {
            temp = this.props.mass.garbageCategoriesGarbage;
        }
        return (
            <ul>
                {
                    temp.map((category, i) => {
                        return (
                            <button key={i} tabIndex='0' onClick={this.handleClickForItems.bind(this, i)}>{category.title}</button>
                        )
                    })
                }
            </ul>
        )//Close Return
    }//Close Render
}//Class of GarbageBin

//Exporting GarbageBin
export default UpdateList;