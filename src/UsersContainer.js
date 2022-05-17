import React from 'react'
import './SidebarChat.css'


class UserContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
      }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({users:data}));
      }
    render() {
      return <div className='users-list'>
            <div className='user-container'></div>
      </div>
    }
  }

  export default UserContainer