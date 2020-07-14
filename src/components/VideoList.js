import React from 'react';

function VideoList(){
    return(
        <ul className = "video-list ">
            <li className="video">
                <img src="https://cdn.videvo.net/videvo_files/images/preview_cat_in_the_sun.jpg" alt="preview_cat_in_the_sun"/>
                <div>preview_cat_in_the_sun</div>
            </li>
            <li className="video">
                <img src="https://cdn.videvo.net/videvo_files/images/preview_cat_in_the_sun.jpg" alt="preview_cat_in_the_sun"/>
                <div>preview_cat_in_the_sun</div>
            </li>
            <li className="video">
                <img src="https://cdn.videvo.net/videvo_files/images/preview_cat_in_the_sun.jpg" alt="preview_cat_in_the_sun"/>
                <div>preview_cat_in_the_sun</div>
            </li>
        </ul>
    )
}

export default VideoList;