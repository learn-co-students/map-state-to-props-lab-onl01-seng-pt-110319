import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username} - {user.hometown}</li>)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          Users {this.props.numberOfUsers}!
          {users}
       
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users)
