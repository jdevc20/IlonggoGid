import React from 'react';

const WordDetail = ({ word, onBack }) => {
    return (
        <div className="wordDetailContainer">
            <button className="btn btn-primary" onClick={onBack}>Back</button>
            <div className="container mt-4">
                <h2>{word.word}</h2>
                <h3 className="mb-4">Pronunciation: {word.pronunciation}</h3>
                <h4>Definitions:</h4>
                <ul>
                    {word.definitions.map((definition, index) => (
                        <li key={index}>
                            <strong>{definition.language}: </strong>
                            {definition.definition}
                        </li>
                    ))}
                </ul>
                <h4>Examples:</h4>
                <ul>
                    {word.examples.map((example, index) => (
                        <li key={index}>
                            <em>{example.example}</em> - {example.translation}
                        </li>
                    ))}
                </ul>
                <p className="mb-0"><strong>Word Type:</strong> {word.wordType}</p>
                <p className="mb-0"><strong>Further Details:</strong> {word.furtherDetails}</p>
                <p className="mb-0"><strong>Etymology:</strong> {word.etymology}</p>
            </div>
        </div>
    );
}

export default WordDetail;
