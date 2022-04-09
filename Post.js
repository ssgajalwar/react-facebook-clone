import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined} from "@material-ui/icons";
import "./Post.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
 
function Post({profilePic, image, username, timestamp,messege }) {
    return (
        <div className="post">
           <div className="post_top">
            <Avatar src={profilePic}
            className="post_avatar"/>
            <div className="post_topinfo">
             <h3>{username}</h3>
             {/* <p>{new Date (timestamp?.toDate()).toUTCString()}</p> */}
            </div>
           </div> 

           <div className="post_bottom">
               <p>{messege}</p>
           </div>

           <div className="post_image">
               <img src={image} alt='' />
           </div>

           <div className="post_options">
                <div className="post-option">

                 <ThumbIcon />
                 <p>Like</p>
                </div>
                <div className="post_option">
                 <ChatBubbleOutlinedIcon />
                 <p>Comment</p>
                </div>
                <div className="post_option">
                 <NearMeIcon />
                 <p>Share</p>
                </div>
                <div className="post_option">
                 <AccountCircleIcon />
                 <ExpandMoreOutlined />
                 
                </div>
           </div>
        </div>
    )
}

export default Post
