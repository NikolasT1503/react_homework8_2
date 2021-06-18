import React from 'react';
import ImageCounter from './ImageCounter';

export default class Hero extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    handleClick = () => this.setState({count: this.state.count+1 })
    
    render(){
        return (
            <div className="container">
                <ImageCounter imageURL={this.props.imageURL} count = {this.state.count} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
            
        )
    }
}