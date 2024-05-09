import React from 'react';

const DictionaryWordItem = ({ word, definition, onSelect }) => {
    return (
        <div className="wordTile" onClick={onSelect}>
            <h3>{word}</h3>
            <p>{definition}</p>
        </div>
    );
};

export default DictionaryWordItem;
