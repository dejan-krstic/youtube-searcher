import React from 'react';

import VideoListItem from './VideoListIem'

const VideoList = ({ videos, setMainVideo }) => {
    return (
        <div className="col-md-4">
            <div className="list-group">
                {videos.map(video => <VideoListItem video={video} key={video.id} setMainVideo={setMainVideo} />)}
            </div>
        </div>

    )
}
export default VideoList;