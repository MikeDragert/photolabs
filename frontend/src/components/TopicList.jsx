import React from "react";
import TopicListItem from './TopicListItem'

import "../styles/TopicList.scss";

const TopicList = function(props) {

  const topics = props.topics.map((topic) => {
    return <TopicListItem {...topic} key={topic.id}/>;
    });

  
  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
