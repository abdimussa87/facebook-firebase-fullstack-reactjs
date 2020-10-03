import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './CreatePostContainer.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';
function CreatePostContainer() {

    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [{ user }, _] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Db setup
        if (!message.trim().length === 0) {
            db.collection('posts').add({
                username: user.displayName,
                profilePic: user.photoURL,
                message: message,
                image: imageUrl,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        else {
            alert('Please write a content you want to post');
        }
        setMessage('');
        setImageUrl('');
    };
    return (
        <div className='createPostContainer'>
            <div className="createPostContainer__header">
                <  Avatar src={user.photoURL} />
                <form >
                    <input className='createPostContainer__input' placeholder={` What's on your mind, ${user.displayName}? `} value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
                    <input placeholder="Image URL (Optional) " type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    <button type='submit' onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            <div className="createPostContainer__footer">
                <div className="createPostContainer__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="createPostContainer__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="createPostContainer__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default CreatePostContainer
