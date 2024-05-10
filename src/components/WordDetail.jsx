import React from 'react';

const WordDetail = ({ word, onBack }) => {
    return (
        <div className="wordDetailContainer">
            <button className="btn btn-primary" onClick={onBack}>Back</button>
            <div className="container mt-4">
                <strong>{word.word}</strong>
                <p>{word.definition}</p>
            </div>
        </div>
    );
}

export default WordDetail;
