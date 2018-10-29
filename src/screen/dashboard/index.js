import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Cards, { Card } from 'react-swipe-deck';



class Dashboard extends Component {

    render() {
        const data = ['Alexandre', 'Thomas', 'Lucien']
        console.log(this.props);
        function action(action) {
            console.log(action);
            
        }
        return (
            <div>
                <Header />
                <h1>
                    Dashboard Screen
               </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        UserList:state.UserList
    }
}

export default connect(mapStateToProps)(Dashboard);