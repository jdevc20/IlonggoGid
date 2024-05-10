import React from 'react';

const DictionaryWordItem = ({ word, definition, onSelect }) => {
    return (
        <div className="wordTile" onClick={onSelect}>
            <p className="word-header">{word}</p>
            <p>{definition}</p>
        </div>
    );
};

export default DictionaryWordItem;
