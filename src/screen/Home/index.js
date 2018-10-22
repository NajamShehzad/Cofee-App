import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase, { loginWithFirebase,saveUser } from '../../config/firebase';
import './style.css'



class Home extends Component {

    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
    }

    login() {
        loginWithFirebase().then(data => {
            console.log(data);
            saveUser(data)
            this.props.history.push('/login')
        })
    }


    render() {
        console.log(this.props);

        return (
            <div className="main" >
                <div className="homeDiv">

                </div>
                <div className="loginDiv" >
                    <h1>
                        Home Screen
                    </h1>
                    <button className="btn loginBtn" onClick={this.login}>
                        Login Here
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToprops)(Home);