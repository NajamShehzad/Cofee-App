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
            meet: false,
            location: false,
            person: {},
            dashboard: true
        }
        UserList();
        if (!localStorage.getItem('currentUser')) {
            this.props.history.replace('/')
        }
        checkUser();
        this.confirmMeeting = this.confirmMeeting.bind(this);
        this.setLocation = this.setLocation.bind(this);
    }
    setMeeting() {
        const { meet } = this.state;
        this.setState({ meet: !meet, dashboard: false })
    }
    setLocation() {
        this.setState({ location: true })
    }
    confirmMeeting(person) {
        this.setState({ person, location: true, meet: false });
    }
    render() {
        const { name } = this.props.currentUser
        const { meet, location, dashboard } = this.state;
        // const data = ['Alexandre', 'Thomas', 'Lucien']
        // console.log(this.props);
        return (
            <div>
                <Header />
                <div>
                    {meet && <Meeting confirmMeeting={this.confirmMeeting} />}
                    {dashboard &&
                        <div>
                            <AppDashboard />
                            <h1>
                                {name}
                            </h1>
                            <button onClick={() => this.setMeeting()}>
                                Set Meeting
                        </button>
                        </div>}
                    {location && <Location />}
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