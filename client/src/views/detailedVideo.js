import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DetailVideoPage(props) {
  const videoId = props.match.params.videoId;
  const courseId = props.match.params.courseId;
  const weekid = props.match.params.weekId;
  const [Video, setVideo] = useState([]);

  const videoVariable = {
    videoId: videoId,
    courseId: courseId,
    weekId: weekid,
  };

  useEffect(() => {
    axios
      .post('/course/courseId/week/weekId/video/videoId', videoVariable)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.video);
          setVideo(response.data.video);
        } else {
          alert('Failed to get video Info');
        }
      });
  });

  if (Video) {
    return (
      <div>
        <div lg={18} xs={24}>
          <div
            className='postPage'
            style={{ width: '100%', padding: '3rem 4em' }}
          >
            <video
              style={{ width: '100%' }}
              src={`http://localhost:3001/${Video.filePath}`}
              controls
            ></video>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default DetailVideoPage;
