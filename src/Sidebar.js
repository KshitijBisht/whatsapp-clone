import { IconButton, Avatar } from '@material-ui/core';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import React from 'react'
import './Sidebar.css'
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar__header'>
        <Avatar src='https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449__340.png'/>
        <div className='sidebar___headerRight'>
            <IconButton>
                <DonutLargeOutlinedIcon/>
            </IconButton>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon/>
            </IconButton>
        </div>
    </div>
    <div className='sidebar__search'>
    <div className='sidebar__searchContainer'>
       <SearchOutlined/>
        <input placeholder='Search or start new chat' type='text'/>
    </div>
    </div>
    <div className="sidebar__chats">
        
    </div>
    </div>
  )
}

export default Sidebar