import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Cards, { Card } from 'react-swipe-deck';
import './style.css';


class Meeting extends Component {

    render() {
        const data = ['Alexandre', 'Thomas', 'Lucien']
        console.log(this.props);
        function action(action) {
            console.log(action);

        }
        return (
            <div className="meeting-div">
                <h1 >
                    Meeting Screen
               </h1>
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

export default connect(mapStateToProps)(Meeting);