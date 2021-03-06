import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core';
import SidebarItem from './SidebarItem';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from './StateProvider';
function Sidebar() {
  const [{user},_] = useStateValue();
    return (
        <div className='sidebar'>
          <SidebarItem src={user.photoURL}  title={user.displayName}/>
          <SidebarItem Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
          <SidebarItem Icon={FlagIcon} title='Pages'/>
          <SidebarItem Icon={GroupIcon} title='Friends'/>
          <SidebarItem Icon={ChatIcon} title='Messenger'/>
          <SidebarItem Icon={StorefrontIcon} title='Markerplace'/>
          <SidebarItem Icon={VideoLibraryIcon} title='Videos'/>
          <SidebarItem Icon={ExpandMoreIcon} title='Marketplace'/>
        </div>
    )
}

export default Sidebar
