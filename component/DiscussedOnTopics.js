import React from 'react';

function DiscussedOnTopics(props) {
    const { topic, handleDelete } = props;

    const date = new Date(Number(topic.discussedOn)).toLocaleDateString();
    return (
        <div className="prev_topics">
            <div>
                <h3>{topic.title}</h3>
                <button id={topic.id} onClick={handleDelete} className="delete">Delete</button>
            </div>
            <p className="discussed">Discussed on {date}</p>
        </div>
    )
}

export default DiscussedOnTopics;