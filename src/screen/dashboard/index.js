import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import AppDashboard from '../../components/Dashboard';
import Meeting from './Meeting/Meeting';
import Cards, { Card } from 'react-swipe-deck';
import { UserList } from '../../config/firebase';
import { checkUser } from '../../config/localUser';
import Location from './Meeting Location/Location';



class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meet: false
        }
        UserList();
        if (!localStorage.getItem('currentUser')) {
            this.props.history.replace('/')
        }
        checkUser();
    }
    setMeeting() {
        const { meet } = this.state;
        this.setState({ meet: !meet })
    }
    render() {
        const { name } = this.props.currentUser
        const { meet } = this.state;
        const data = ['Alexandre', 'Thomas', 'Lucien']
        // console.log(this.props);
        function action(action) {
            console.log(action);

        }
        return (
            <div>
                <Header />
                <div>
                    {meet ? <Meeting /> : <AppDashboard />}
                    {!meet &&
                        <div>
                            <h1>
                                {name}
                            </h1>
                            <button onClick={() => this.setMeeting()}>
                                Set Meeting
                        </button>
                        </div>}
                    <Location />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        UserList: state.UserList
    }
}

export default connect(mapStateToProps)(Dashboard);