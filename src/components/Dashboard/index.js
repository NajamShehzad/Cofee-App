import React, { Component } from 'react';
import { connect } from 'react-redux';



class DashBoard extends Component {

    
    render() {
        const { name } = this.props.currentUser;

        return (
            <div>
                <h1>
                    Dashboard
               </h1>
                <h1>
                    {name}
                </h1>
                <button
                    onClick={() => this.props.setMeeting()}
                >
                    Set Meeting
                </button>
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

export default connect(mapStateToProps)(DashBoard);