import React, { Component } from 'react';
import DictionaryWordItem from '../components/DictionaryWordItem';
import WordDetail from '../components/WordDetail'

class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWord: null,
            words: [
                { word: "Kumusta", definition: "Used as a greeting." },
                { word: "Kamusta", definition: "Another way of saying 'Kumusta'." },
                { word: "Paalam", definition: "Used to say goodbye." },
                { word: "Salamat", definition: "Thank you." },
                { word: "Maayong adlaw", definition: "Good day." },
                { word: "Maayong gabii", definition: "Good evening." },
                { word: "Palihug", definition: "Please." },
                { word: "Halong", definition: "Careful." },
                { word: "Kadlaw", definition: "Laughter." },
                { word: "Gugma", definition: "Love." },
                { word: "Palihug", definition: "Please." },
                { word: "Halong", definition: "Careful." },
                { word: "Kadlaw", definition: "Laughter." },
                { word: "Gugma", definition: "Love." },
            ]
        };
    }

    handleWordSelect = (word) => {
        this.setState({ selectedWord: word });
    }

    handleBackButtonClick = () => {
        this.setState({ selectedWord: null });
    }

    render() {
        const { selectedWord } = this.state;

        return (
            <div className="container">
                <div className="searchContainer">
                    <input type="text" className="searchBar" placeholder="Search..." />
                </div>
                <div className="resultContainer">
                    {selectedWord ? (
                        <WordDetail word={selectedWord} onBack={this.handleBackButtonClick} />
                    ) : (
                        <div className="wordGrid">
                            {this.state.words.map((word, index) => (
                                <DictionaryWordItem
                                    key={index}
                                    word={word.word}
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
