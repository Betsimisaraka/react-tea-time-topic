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
            <div>
                <h3>Add a Topic</h3>
                <Form />
            </div>
            <div>
                <h3>Next Topics</h3>
                {topics
                    .map(topic =>
                        <DisplayTopics key={topic.id} topic={topic} />
                    )}
            </div>
            <div>
                <h3>Prev Topics</h3>
                {topics
                    .map(topic =>
                        <DiscussedOnTopics key={topic.id} topic={topic} />
                    )}
            </div>
        </main>
    )
}

export default App;