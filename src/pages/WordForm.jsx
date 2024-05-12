import React, { useState } from 'react';

const WordForm = ({ onSubmit }) => {
    const [word, setWord] = useState('');
    const [definitions, setDefinitions] = useState([{ language: '', definition: '' }]);
    const [examples, setExamples] = useState([{ example: '', translation: '' }]);
    const [pronunciation, setPronunciation] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [wordType, setWordType] = useState('');
    const [furtherDetails, setFurtherDetails] = useState('');
    const [etymology, setEtymology] = useState('');
    const [isRootWord, setIsRootWord] = useState(true);
    // Add other states as needed

    const handleAddDefinition = () => {
        setDefinitions([...definitions, { language: '', definition: '' }]);
    };

    const handleAddExample = () => {
        setExamples([...examples, { example: '', translation: '' }]);
    };

    // Add other handlers as needed

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ word, definitions, examples, pronunciation, isActive, wordType, furtherDetails, etymology, isRootWord /* Add other fields as needed */ });
    };

    return (
        <form className="container form-container" onSubmit={handleSubmit}>
            <label>
                Word:
                <input className="form-control" type="text" value={word} onChange={(e) => setWord(e.target.value)} required />
            </label>
            {definitions.map((def, index) => (
                <div className="definition" key={index}>
                    <div className="container">
                        <span>Definition</span> <button className="btn btn-add" type="button" onClick={handleAddDefinition}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                  
                    <label>
                        Language:
                        <inpu className="form-control" type="text" value={def.language} onChange={(e) => {
                            const newDefinitions = [...definitions];
                            newDefinitions[index].language = e.target.value;
                            setDefinitions(newDefinitions);
                        }} required />
                    </label>
                    <br />
                    <label>
                        Definition:
                        <textarea className="form-control" type="text" value={def.definition} onChange={(e) => {
                            const newDefinitions = [...definitions];
                            newDefinitions[index].definition = e.target.value;
                            setDefinitions(newDefinitions);
                        }} required />
                    </label>
                </div>
            ))}
            
            {examples.map((ex, index) => (
                <div className="examples" key={index}>
                    <div className="container">
                        <span>Examples</span>
                        <button className="btn btn-add" type="button" onClick={handleAddExample}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                    <label>
                        Example:
                        <input className="form-control" type="text" value={ex.example} onChange={(e) => {
                            const newExamples = [...examples];
                            newExamples[index].example = e.target.value;
                            setExamples(newExamples);
                        }} required />
                    </label>
                    <label>
                        Translation:
                        <input className="form-control" type="text" value={ex.translation} onChange={(e) => {
                            const newExamples = [...examples];
                            newExamples[index].translation = e.target.value;
                            setExamples(newExamples);
                        }} required />
                    </label>
                </div>
            ))}
           
            <label>
                Pronunciation:
                <input type="text" value={pronunciation} onChange={(e) => setPronunciation(e.target.value)} />
            </label>
            <br/>
            <label>
                Is Active:
                <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
            </label>
            <br />
            <label>
                Word Type:
                <select value={wordType} onChange={(e) => setWordType(e.target.value)}>
                    <option value="">--Please choose an option--</option>
                    <option value="noun">Noun</option>
                    <option value="verb">Verb</option>
                    <option value="adjective">Adjective</option>
                    <option value="adverb">Adverb</option>
                    <option value="pronoun">Pronoun</option>
                    <option value="preposition">Preposition</option>
                    <option value="conjunction">Conjunction</option>
                    <option value="interjection">Interjection</option>
                </select>
            </label>
            <br />
            <label>
                Further Details:
                <textarea value={furtherDetails} onChange={(e) => setFurtherDetails(e.target.value)} />
            </label>
            <br />
            <label>
                Etymology:
                <input type="text" value={etymology} onChange={(e) => setEtymology(e.target.value)} />
            </label>
            <br />
            <label>
                Is Root Word:
                <input type="checkbox" checked={isRootWord} onChange={(e) => setIsRootWord(e.target.checked)} />
            </label>
            <br />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default WordForm;
