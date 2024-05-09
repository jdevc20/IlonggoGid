import React from 'react';

const DictionaryWordItem = ({ word, definition, onSelect }) => {
    const handleClick = () => {
        onSelect({ word, definition });
    };

    return (
        <div className="word-item" onClick={handleClick}>
            <p className="word">{word}</p>
            <p>{definition}</p>
        </div>
    );
}

export default DictionaryWordItem;
