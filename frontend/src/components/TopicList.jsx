import React from "react";
import TopicListItem from './TopicListItem'

import "../styles/TopicList.scss";

// react component for displaying the topic list
const TopicList = function(props) {
  const topics = props.state.topicData.map((topic) => {
    return <TopicListItem {...topic} key={topic.id} getPhotosForTopic={props.getPhotosForTopic}/>;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
