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
            searchTerm: '',
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchWords();
    }

    fetchWords = async () => {
        try {
            const words = await api.get('/dictionary/words');
            this.setState({ words, isLoading: false });
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
        const searchTerm = this.removeAccents(event.target.value);
        this.setState({ searchTerm });
    }

    removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    render() {
        const { selectedWord, searchTerm, isLoading, words } = this.state;

        // Sort the words alphabetically without considering accents
        const collator = new Intl.Collator(undefined, { sensitivity: 'base' });
        const sortedWords = [...words].sort((a, b) => collator.compare(a.word, b.word));

        const filteredWords = sortedWords.filter(word =>
            this.removeAccents(word.word.toLowerCase()).includes(searchTerm.toLowerCase())
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
                    {isLoading ? (
                        <div className="loadingContainer">Loading Dictionary...</div>
                    ) : selectedWord ? (
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
