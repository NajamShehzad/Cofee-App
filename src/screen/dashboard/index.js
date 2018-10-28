import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';



class Dashboard extends Component {

    render() {
        console.log(this.props);

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
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Dashboard);