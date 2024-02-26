import React from "react";

import "../styles/TopicListItem.scss";

// react component for displaying one topic item
const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={() => props.getPhotosForTopic(props.id)}>
      <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
