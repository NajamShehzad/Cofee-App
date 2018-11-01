import React, { Component } from 'react';
import { connect } from 'react-redux';

let BASE_URI = "https://api.foursquare.com/v2/venues/search?"
let COORDS;
let INTENT = "browse"
let RADIUS;
let LIMIT = 5;


class Location extends Component {
    componentDidMount() {

    }
    render() {
        console.log(this.props)
        return (
            <div>
                Select Location
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Location);