import React from 'react';

function DiscussedOnTopics({ topic }) {
    const date = new Date(Number(topic.discussedOn)).toLocaleDateString();
    return (
        <div className="prev_topics">
            <div>
                <h3>{topic.title}</h3>
                <button className="delete">Delete</button>
            </div>
            <p className="discussed">Discussed on {date}</p>
        </div>
    )
}

export default DiscussedOnTopics;