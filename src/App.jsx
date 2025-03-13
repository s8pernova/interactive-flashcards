import { useState } from "react";
import Cards from "./components/Cards";
import cardData from "./cardData.json";

const App = () => {
	const [hasSubmittedGuess, setHasSubmittedGuess] = useState(false);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [isShuffled, setIsShuffled] = useState(false);
	const [cards, setCards] = useState(cardData);

	const handleGuessSubmit = (isCorrect) => {
		setHasSubmittedGuess(true);
		if (isCorrect) {
			showAnswer();
		}
	};

	const shuffleCards = () => {
		const shuffled = [...cards];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		setCards(shuffled);
		setIsShuffled(true);
	};

	const increment = () => {
		setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
		setShowingAnswer(false);
		setHasSubmittedGuess(false);
	};

	const decrement = () => {
		setCurrentCardIndex((prevIndex) =>
			prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
		);
		setShowingAnswer(false);
		setHasSubmittedGuess(false);
	};

	const [showingAnswer, setShowingAnswer] = useState(false);

	const showAnswer = () => {
		setShowingAnswer(true);
	};

	const hideAnswer = () => {
		setShowingAnswer(false);
	};

	return (
		<div className="sideways-flex">
			<div>
				<h2>Guess the Fake Conspiracy Theory!</h2>
				<p>Two are real, one is made up. Can you tell?</p>
				<Cards
					currentCard={cardData[currentCardIndex]}
					showingAnswer={showingAnswer}
					onShowAnswer={showAnswer}
					onHideAnswer={hideAnswer}
					cardColor={cardData[currentCardIndex].difficulty}
					onGuessSubmit={handleGuessSubmit}
				/>
				<div className="button-container">
					<button onClick={decrement}>Previous</button>
					<h3>{currentCardIndex + 1}</h3>
					<button onClick={increment}>Next</button>
				</div>
			</div>
			<div>
				<button id="shuffle-button" onClick={shuffleCards}>
					<img src="./src/assets/shuffle.png" alt="Shuffle" width="35" />
				</button>
			</div>
		</div>
	);
};

export default App;
