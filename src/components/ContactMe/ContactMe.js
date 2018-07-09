import React, { Component } from 'react';
import axios from 'axios';
import './ContactMe.css';

class ContactMe extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            sentFrom: '',
            message: ''
        }
        this.handleEmail = this.handleEmail.bind(this)
    }

    handleEmail() {
        console.log('button works')
        const { name, sentFrom, message } = this.state
        console.log(name, sentFrom, message)
        axios.post('/send/email', { name, sentFrom, message }).then(ok => {
            console.log('end point works')
            this.setState({
                name: '',
                sentFrom: '',
                message: ''
            })
        })
    }
    render() {
        return (
            <div id='contactMe' className='component'>
                <div className='underline'></div>
                <h1>CONTACT ME</h1>
                <div id='emailDiv'>
                    <div id='inputDiv'>
                        <input placeholder='Name'
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        <input placeholder='Email'
                            value={this.state.sentFrom}
                            onChange={e => this.setState({ sentFrom: e.target.value })}
                        />
                    </div>
                    <textarea placeholder='Message'
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}
                    />
                    <button onClick={() => this.handleEmail()}>SEND MESSAGE</button>
                </div>
            </div>
        )
    }
}

export default ContactMe