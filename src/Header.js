import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from './firebase';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Header() {

    const [{ user }, dispatch] = useStateValue();
    const handleSignOut = (e) => {
        e.preventDefault();
        auth.signOut().then((_) => {
            localStorage.removeItem('userInfo');
            dispatch({
                type: actionTypes.REMOVE_USER,
                user: null
            })
        }
        ).catch(error => alert(error.message));
    }

    return (
        <div className='header'>

            <div className="header__left">
                <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <div className="header__searchContainer">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>

            <div className="header__middle">
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user?.photoURL} alt='Abdi' />
                    <h4>{user?.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton onClick={handleSignOut}>
                    <ExitToAppIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
