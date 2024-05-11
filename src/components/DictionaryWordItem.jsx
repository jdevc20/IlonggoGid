import React from 'react';

const DictionaryWordItem = ({ word, onSelect }) => {
    return (
        <div className="wordTile" onClick={onSelect}>
            <p className="word-header">{word.word}</p>
        </div>
    );
}

export default DictionaryWordItem;
