import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import UserInfo from './info';
import './style.css';





class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            steps: 1,
            userInfo: {
            }
        }
        this.SubmitInfo = this.SubmitInfo.bind(this);
    }
    SubmitInfo(data){
        this.setState({userInfo:{...data}});
        console.log(this.state.userInfo)
    }   
    render() {
        const { steps } = this.state;
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div>
                        {steps == 1 && <UserInfo SubmitInfo={this.SubmitInfo} />}
                    </div>
                    <button>
                        Next
                    </button>
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