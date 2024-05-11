import React, { Component } from 'react';
import DictionaryWordItem from '../components/DictionaryWordItem';
import WordDetail from '../components/WordDetail';
import api from '../api';

class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWord: null,
            words: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        this.fetchWords();
    }

    fetchWords = async () => {
        try {
            const words = await api.get('/dictionary/words'); // Using your Axios instance
            this.setState({ words });
            console.log(words);
        } catch (error) {
            console.error('Error fetching words:', error);
        }
    }

    handleWordSelect = (word) => {
        this.setState({ selectedWord: word });
    }

    handleBackButtonClick = () => {
        this.setState({ selectedWord: null });
    }

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        const { selectedWord, searchTerm } = this.state;
        const filteredWords = this.state.words.filter(word =>
            word.word.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="container">
                <div className="searchContainer">
                    <input
                        type="text"
                        className="searchBar"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={this.handleSearchChange}
                    />
                </div>
                <div className="resultContainer">
                    {selectedWord ? (
                        <div className="container detail-container">
                            <WordDetail word={selectedWord} onBack={this.handleBackButtonClick} />
                        </div>
                    ) : (
                        <div className="wordGrid">
                            {filteredWords.map((word, index) => (
                                <DictionaryWordItem
                                    key={index}
                                    word={word}
                                    definition={word.definition}
                                    onSelect={() => this.handleWordSelect(word)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Dictionary;
