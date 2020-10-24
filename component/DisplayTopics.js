import React from 'react';

function DisplayTopics(props) {
    const { topic, handleUpvotes, handleDownvotes, handleArchive } = props;

    return (
        <div className="next_topics">
            <div>
                <h3>{topic.title}</h3>
                <button id={topic.id} onClick={handleArchive} className="archive">Archive</button>
            </div>
            <div className="up_down_votes">
                <button id={topic.id} className="upvotes" onClick={handleUpvotes}>Upvotes</button>
                <span>{topic.upvotes}</span>
                <button id={topic.id} onClick={handleDownvotes} className="downvotes">Downvotes</button>
                <span>{topic.downvotes}</span>
            </div>
        </div>
    )
}

export default DisplayTopics;