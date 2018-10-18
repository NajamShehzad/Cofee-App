import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';
import { FirebaseData, callFirebase } from '../../store/actions/firebase';

const provider = new firebase.auth.FacebookAuthProvider();

console.log(firebase)

class Login extends Component {
    constructor(props) {
        super(props)


        this.login = this.login.bind(this);
    }
    componentDidMount() {
        callFirebase();
    }
    login() {
        // firebase.database().ref('users').on('child_added', data => {
        //     console.log(data.val())
        //     let data1 = data.val() 
        //     this.props.dispatch(FirebaseData(data1))
        // })
        firebase.auth().signInWithPopup(provider).then(x => {
            // console.log((x.user.uid));
            // console.log((x));
            // console.log((x.additionalUserInfo.profile.picture.data.url));
            const currentUser = {
                profile: x.additionalUserInfo.profile,
                userId: x.user.uid
            }
            this.props.dispatch({ type: 'CurrentUser', currentUser})
            firebase.database().ref(`users/${x.user.uid}`).set(currentUser)
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    Login Route
                </h1>
                <div>
                    <button onClick={this.login} >
                        Login Here Please
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        currentUser:state.currentUser
    }
}


export default connect(mapStateToProps)(Login)