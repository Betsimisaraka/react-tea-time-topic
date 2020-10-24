import React from 'react';

function DisplayTopics({ topic }) {
    return (
        <div className="next_topics">
            <div>
                <h3>{topic.title}</h3>
                <button className="archive">Archive</button>
            </div>
            <div className="up_down_votes">
                <button className="upvotes">Upvotes</button>
                <span>{topic.upvotes}</span>
                <button className="downvotes">Downvotes</button>
                <span>{topic.downvotes}</span>
            </div>
        </div>
    )
}

export default DisplayTopics;