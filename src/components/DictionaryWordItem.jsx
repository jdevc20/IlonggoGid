import React from 'react';

const DictionaryWordItem = ({ word, onSelect }) => {
    return (
        <div className="wordTile" onClick={onSelect}>
            <p className="word-header">{word.word}</p>
            <p>{word.definitions[0].definition}</p>
        </div>
    );
}

export default DictionaryWordItem;
