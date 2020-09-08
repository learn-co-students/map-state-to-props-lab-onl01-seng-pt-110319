import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
          <p>Number of Users: {this.props.numOfUsers} </p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numOfUsers: state.users.length
  }
}


// connect this component to Redux
export default connect(mapStateToProps)(Users)
