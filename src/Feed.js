import React from 'react'
import CreatePostContainer from './CreatePostContainer'
import './Feed.css'
import Post from './Post'
import StoriesContainer from './StoriesContainer'
function Feed() {
    return (
        <div className='feed'>
            <StoriesContainer/>
            <CreatePostContainer/>
            <Post username='Abdi Mussa' profilePic='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' image='https://images.unsplash.com/photo-1560806108-41a68051b9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1560806108-41a68051b9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' timestamp='Friday' message='This is dope'/>
            <Post username='Abdi Mussa' profilePic='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'  timestamp='Friday' message='This is dope'/>

        </div>
    )
}

export default Feed
