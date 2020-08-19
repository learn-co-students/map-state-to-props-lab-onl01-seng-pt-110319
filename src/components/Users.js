import React, { Component } from 'react';
import {connect} from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
          {this.props.numOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users,
  numOfUsers: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
