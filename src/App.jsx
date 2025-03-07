import { useState } from "react";
import Cards from "./components/Cards";

const cardData = [
	{
		id: 1,
		trueFacts: [
			"The CIA experimented with mind control in Project MKUltra",
			"The US government poisoned alcohol during Prohibition",
		],
		fakeFact: "The moon landing was faked by Stanley Kubrick",
		difficulty: "easy",
	},
	{
		id: 2,
		trueFacts: [
			"The NSA has been spying on US citizens",
			"The Tuskegee Syphilis Study deliberately infected African Americans",
		],
		fakeFact: "Bigfoot is a government-engineered species",
		difficulty: "medium",
	},
	{
		id: 3,
		trueFacts: [
			"Operation Paperclip recruited Nazi scientists to the US",
			"The government tested LSD on unsuspecting citizens in the 60s",
		],
		fakeFact: "The world is controlled by shape-shifting reptiles",
		difficulty: "hard",
	},
	{
		id: 4,
		trueFacts: [
			"The FBI kept a file on Einstein due to his political views",
			"The Montauk Project was an alleged series of secret United States government projects",
		],
		fakeFact: "The Earth is hollow and inhabited",
		difficulty: "hard",
	},
	{
		id: 5,
		trueFacts: [
			"The US Navy patented a high-energy electromagnetic field generator",
			"Operation Northwoods proposed committing acts of terrorism against Americans",
		],
		fakeFact: "Clouds are created in factories to control global warming",
		difficulty: "medium",
	},
	{
		id: 6,
		trueFacts: [
			"Project Blue Book was a series of studies on UFOs by the US Air Force",
			"The Philadelphia Experiment was an alleged military experiment",
		],
		fakeFact: "The internet is a digital illusion created by AI",
		difficulty: "hard",
	},
	{
		id: 7,
		trueFacts: [
			"The government has a secret bunker under Denver Airport",
			"The High Frequency Active Auroral Research Program (HAARP) can control weather",
		],
		fakeFact: "Time travel was discovered in 1985 but has been kept secret",
		difficulty: "easy",
	},
	{
		id: 8,
		trueFacts: [
			"Project Sunshine involved using the bodies of deceased infants in radioactive testing",
			"The CIA's Heart Attack Gun is a weapon that can induce a heart attack",
		],
		fakeFact:
			"Wi-Fi signals are used to transmit subliminal messages to the population",
		difficulty: "easy",
	},
	{
		id: 9,
		trueFacts: [
			"Project Blue Book was a series of studies on UFOs by the United States Air Force",
			"The FBI investigated whether Bigfoot was real in the 1970s",
		],
		fakeFact:
			"Global warming is a hoax invented to distract from the world's diminishing oxygen supply",
		difficulty: "medium",
	},
];

const App = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const increment = () => {
		setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
	};

	const decrement = () => {
		setCurrentCardIndex((prevIndex) =>
			prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
		);
	};

	const [showingAnswer, setShowingAnswer] = useState(false);

	const showAnswer = () => {
		setShowingAnswer(true);
	};

	const hideAnswer = () => {
		setShowingAnswer(false);
	};

	return (
		<div className="main-container">
			<div>
				<h2>Guess the Fake Conspiracy Theory!</h2>
				<p>Two are real, one is made up. Can you tell?</p>
				<Cards
					currentCard={cardData[currentCardIndex]}
					showingAnswer={showingAnswer}
					onShowAnswer={showAnswer}
					onHideAnswer={hideAnswer}
					cardColor={cardData[currentCardIndex].difficulty}
				/>
				<div className="button-container">
					<button onClick={decrement}>Previous</button>
					<h3>{currentCardIndex + 1}</h3>
					<button onClick={increment}>Next</button>
				</div>
			</div>
		</div>
	);
};

export default App;
