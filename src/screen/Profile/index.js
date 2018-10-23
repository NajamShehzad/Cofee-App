import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import UserInfo from './Info/info';
import Picture from './Picture/picture';
import Drinks from './Drink/drinks';
import Map from './Map/map';
import './style.css';





class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 4,
            userInfo: {
            }
        }
        this.SubmitInfo = this.SubmitInfo.bind(this);
    }
    SubmitInfo(data) {
        const { step, userInfo } = this.state;
        this.setState({ userInfo: { ...userInfo, ...data }, step: step + 1 });
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
                        {step == 3 && <Drinks SubmitInfo={this.SubmitInfo} />}
                        {step == 4 && <Map SubmitInfo={this.SubmitInfo} />}
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