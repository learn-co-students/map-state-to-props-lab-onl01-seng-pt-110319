import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
          {this.props.userCount === 1 ? `${this.props.userCount} User!`: `${this.props.userCount} Users!`}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    users: state.users,
    userCount: state.users.length
  })
}

export default connect(mapStateToProps)(Users);
