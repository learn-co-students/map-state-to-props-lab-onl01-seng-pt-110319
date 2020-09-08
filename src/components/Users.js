import React from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
  let users = this.props.users.map(( users, index) => <li key={index}>{users.username}</li>)

  return (
    <div>
      {this.props.numOfUsers}
    <ul>
    {users}
    </ul>
    
    </div>
   )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users, 
    numOfUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users);