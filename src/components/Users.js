import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        <ul>
          Users!
          <p>Number of Users: {users.length}</p>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
