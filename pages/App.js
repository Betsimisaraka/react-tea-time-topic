import React, { useState, useEffect } from "react";
import Form from '../component/Form';
import DisplayTopics from '../component/DisplayTopics';
import DiscussedOnTopics from '../component/DiscussedOnTopics';

function App() {
    const [topics, setTopics] = useState([]);
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);
    const [archive, setArchive] = useState('');
    const [addTopic, setAddTopic] = useState({
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: '',
            id: Date.now(),
        });

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

    const handleSubmit = e => {
        e.preventDefault();
        setTopics([...topics, addTopic]);
        console.log(topics);
    };
    
    const handleChange = e => {
        setAddTopic({
           ...addTopic, [e.target.name]: e.target.value
        });
    };


    const handleArchive = (e) => {
        const id = e.target.id;
        const archived = topics.find(topic => topic.id === id)
        const archivedTopic = archived.discussedOn = new Date();
        setArchive(archivedTopic)
    }

    const handleUpvotes = (e) => {
        const id = e.target.id;
        const upvotesTopics = topics.find(upvote => upvote.id === id);
        const upvotesUpdate = upvotesTopics.upvotes ++;
        setUpvotes(upvotesUpdate);
    }


    const handleDownvotes = (e) => {
        const id = e.target.id;
        const downvotesTopics = topics.find(downvote => downvote.id === id);
        const downvotesUpdate = downvotesTopics.downvotes ++;
        setDownvotes(downvotesUpdate);
    }

    const handleDelete = (e) => {
        const id = e.target.id;
        console.log(id);
        const deletedId = topics.filter(topic => topic.id != id);
        setTopics(deletedId);
    }

    return (
        <main>
            <h1>Tea Time Topic</h1>
            <div className="container">
                <div>
                    <h2>Add a Topic</h2>
                    <Form onSubmit={handleSubmit} handleChange={handleChange} />
                </div>
                <div>
                    <h2>Next Topics</h2>
                    {topics
                        .filter(topic => topic.discussedOn === "")
                        .sort((a, b) => {
                            const votesA = a.upvotes - a.downvotes;
                            const votesB = b.upvotes - b.downvotes;
                            return votesB - votesA;
                        })
                        .map(topic =>
                            <DisplayTopics key={topic.id} topic={topic} 
                            handleUpvotes={handleUpvotes} 
                            handleDownvotes={handleDownvotes}
                            handleArchive={handleArchive}
                            />
                        )}
                </div>
                <div>
                    <h2>Prev Topics</h2>
                    {topics
                        .filter(topic => topic.discussedOn)
                        .map(topic =>
                            <DiscussedOnTopics key={topic.id} topic={topic} handleDelete={handleDelete} />
                        )}
                </div>
            </div>
        </main>
    )
}

export default App;