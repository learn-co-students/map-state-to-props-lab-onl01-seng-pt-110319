import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let allUsers = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)

    return (
      <div>
        <ul>
          Users!
          <br/>
          {allUsers}
          <br/>
          {this.props.users.length}
          <br/>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);
