import React from 'react';

function DiscussedOnTopics({ topic }) {
    return (
        <div>
            <p>{topic.title}</p>
            <div>
                <p>{topic.discussedOn}</p>
            </div>
        </div>
    )
}

export default DiscussedOnTopics;