import React, { Component } from 'react';
import firease from '../../config/firebase';

const provider = new firease.auth.FacebookAuthProvider();

class Login extends Component {
    constructor() {
        super()


        this.login = this.login.bind(this);
    }

    login() {
        firease.auth().signInWithPopup(provider).then(x => {
            console.log((x.user.uid));
            console.log((x));
            console.log((x.additionalUserInfo.profile.picture.data.url));
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Login Route
                </h1>
                <div>
                    <button onClick={this.login} >
                        Login Here
                    </button>
                </div>
            </div>
        )
    }
}

export default Login;