import React, { useState, useRef } from 'react';

function Form() {
    const [topics, setTopics] = useState('');
    const formRef = useRef(null);

    const handleChange = (e) => {
        setTopics(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        formRef.current.reset();
        console.log('Submitted');
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <input type="text" placeholder="Whrite your topic idea here" value={topics} onChange={handleChange} />
                </label>
            </fieldset>
            <button className="submit">Submit</button>
        </form>
    )
}

export default Form;