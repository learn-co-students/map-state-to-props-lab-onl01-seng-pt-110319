import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log("props", this.props.users)
    return (
      
      <div>
        {this.props.userCount}
        <ul>
          Users!
          {this.props.users.map((user, index) => {
            return <li key={index}>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
