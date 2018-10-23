import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import UserInfo from './info';
import Picture from './picture';
import './style.css';





class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            userInfo: {
            }
        }
        this.SubmitInfo = this.SubmitInfo.bind(this);
    }
    SubmitInfo(data) {
        const { step,userInfo } = this.state;
        this.setState({ userInfo: { ...userInfo,...data }, step: step + 1 });
        console.log(this.state.userInfo)
    }
    render() {
        const { step } = this.state;
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div>
                        {step == 1 && <UserInfo SubmitInfo={this.SubmitInfo} />}
                        {step == 2 && <Picture SubmitInfo={this.SubmitInfo} />}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(Login)