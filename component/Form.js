import React from 'react';

function Form(props) {
    const { addTopic, handleChange } = props
    return (
        <form>
            <fieldset onSubmit={props.onSubmit}>
                <label>
                    <input type="text" name="title" value={addTopic} placeholder="Whrite your topic idea here" onChange={handleChange} />
                </label>
            </fieldset>
            <button className="submit">Submit</button>
        </form>
    )
}

export default Form;