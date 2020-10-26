import React, {useState} from 'react';

function Form({ topics, setTopics }) {

    const [addTopic, setAddTopic] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let addTopic = {
            upvotes: 0,
            downvotes: 0,
            title: e.target.title.value,
            discussedOn: "",
            id: Date.now() 
        }
        console.log(addTopic);
        topics.push(addTopic);
        console.log(topics);
        setTopics([...topics]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <input type="text" name="title" placeholder="Whrite your topic idea here" onChange={(e) => setAddTopic(e.target.value)} />
                </label>
            </fieldset>
            <button className="submit">Submit</button>
        </form>
    )
}

export default Form;