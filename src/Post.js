import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Post({ username, profilePic, image, timestamp, message }) {
    return (
        <div className='post'>
            <div className="post__header">
                
                <div className="post__headerLeft">
                    <Avatar src={profilePic} />
                    <div className="post__headerInfo">
                        <h3>{username}</h3>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
                </div>
                <MoreHorizIcon/>

            </div>

            <div className="post__body">
                <p>{message}</p>
                <img className='post__image' src={image} alt=""/>
            </div>

            <div className="post__footer">
                <div className="post__option">
                    <ThumbUpAltIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <TelegramIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post
