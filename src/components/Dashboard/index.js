import React, { Component } from 'react';
import { connect } from 'react-redux';



class DashBoard extends Component {


    

    render() {
        const data = ['Alexandre', 'Thomas', 'Lucien']
        // console.log(this.props);
        function action(action) {
            console.log(action);

        }
        return (
            <div>
                <h1>
                    Dashboard
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

export default connect(mapStateToProps)(DashBoard);