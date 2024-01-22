/* eslint-disable no-unused-vars */
import React from 'react';
import Notification from './Components/Notification/Notification';

const App = () => {
  return (
    <div>
      <Notification type="follow" message="New follower: John Doe" />
      <Notification type="like" message="Your post got a like!" />
      <Notification type="comment" message="Someone commented on your post." />
    </div>
  );
};

export default App;
