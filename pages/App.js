import React, { useState, useEffect } from "react";
import Form from '../component/Form';
import DisplayTopics from '../component/DisplayTopics';
import DiscussedOnTopics from '../component/DiscussedOnTopics';

function App() {
    const [topics, setTopics] = useState([]);

    const endpoint = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";

    const fetchTopics = async () => {
        try {
            const res = await fetch(endpoint);
            const topics = await res.json();
            console.log(topics);
            setTopics(topics);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect((e) => {
        fetchTopics();
    }, []);

    return (
        <main>
            <h1>Tea Time Topic</h1>
            <div className="container">
                <div>
                    <h2>Add a Topic</h2>
                    <Form />
                </div>
                <div>
                    <h2>Next Topics</h2>
                    {topics
                        .filter(topic => !topic.discussedOn)
                        .sort((a, b) => {
                            const votesA = a.upvotes - a.downvotes;
                            const votesB = b.upvotes - b.downvotes;
                            return votesB - votesA;
                        })
                        .map(topic =>
                            <DisplayTopics key={topic.id} topic={topic} />
                        )}
                </div>
                <div>
                    <h2>Prev Topics</h2>
                    {topics
                        .filter(topic => topic.discussedOn)
                        .map(topic =>
                            <DiscussedOnTopics key={topic.id} topic={topic} />
                        )}
                </div>
            </div>
        </main>
    )
}

export default App;