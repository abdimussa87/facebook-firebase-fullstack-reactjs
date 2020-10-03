import React, { useEffect, useState } from 'react'
import CreatePostContainer from './CreatePostContainer'
import './Feed.css'
import Post from './Post'
import StoriesContainer from './StoriesContainer'
import db from './firebase';
function Feed() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
            if (snapshot) {
                setPosts(snapshot.docs.map(doc => {
                    return { id: doc.id, post: doc.data() }
                }));
            }
        });
    }, []);

    const postComponents =
        posts.map(({ id, post }) => <Post key={id} username={post.username} profilePic={post.profilePic} image={post.image} timestamp={post.timestamp} message={post.message} />);


    return (
        <div className='feed'>
            <StoriesContainer />
            <CreatePostContainer />
            {postComponents}

        </div>
    )
}

export default Feed
