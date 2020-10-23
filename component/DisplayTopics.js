import React from 'react';

function DisplayTopics({ topic }) {
    return (
        <div>
            <p>{topic.title}</p>
            <div>
                <p>{topic.upvotes}</p>
                <p>{topic.downvotes}</p>
            </div>
        </div>
    )
}

export default DisplayTopics;