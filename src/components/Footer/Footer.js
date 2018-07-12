import React, { Component } from 'react';
import linkedIn from '../../assets/linked-in-icon.png';
import gitHub from '../../assets/git-hub.png';

class Footer extends Component {
    render(){
        return (
            <div className='flexRow component' style={{justifyContent: 'center'}}>
                <a href='https://www.linkedin.com/in/jordan-buonforte/'><img src={linkedIn} alt='linked-in' style={{width: "35px", margin: '0 50px'}}/></a>
                <a href='https://github.com/Jordanmb803'><img src={gitHub} alt='git-hub' style={{width: "35px"}}/></a>
            </div>
        )
    }
}

export default Footer