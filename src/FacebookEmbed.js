import React from 'react'
import './FacebookEmbed.css'
function FacebookEmbed() {
    return (
        <div className='facebookEmbed'>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fethiojob&tabs=timeline&width=342&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="342"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameborder="0" 
                allowTransparency="true"
                allow="encrypted-media"></iframe>
        </div>
    )
}

export default FacebookEmbed
