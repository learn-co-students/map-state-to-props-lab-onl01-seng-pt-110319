import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        {console.log(this.props.userCount)}
        <ul>
          {this.props.users.map ((user, id)=>{
          return  <li key={id}>{user.username}</li>
          })}
          Total: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {users: state.users, userCount: state.users.length}
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
