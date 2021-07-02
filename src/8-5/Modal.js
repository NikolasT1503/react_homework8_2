import React from 'react';
import './Modal.css'

export class Modal extends React.Component{
    closeModal = (e) => {
        if (e.target.dataset.closer) {
            this.props.closeHandler()
        }
    }

    render(){
        const { children, closeHandler } = this.props
        return (
            <div className='modal' data-closer onClick={this.closeModal}>
                <div className='inner'>
                    <div className='close' data-closer onClick={closeHandler}>X</div>
                    {children}
                </div>
            </div>
        )
    }
}

export class RandomUser extends React.Component{
    state = {
        randomUserData: null
    }

    fetchRandomUser = _ => {
        fetch('https://randomuser.me/api').then(res => res.json()).then(randomUserData => this.setState({randomUserData}))
    }

    componentDidMount(){
        this.fetchRandomUser()
    }

    render(){
        if (!this.state.randomUserData) return null
        
        const { picture } = this.state.randomUserData.results[0]

        return <img src={picture.large} alt=''/>
    }
}