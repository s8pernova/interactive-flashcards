import { useState } from "react";

const GuessInput = ({
	question,
	onSubmit,
	correctAnswer,
	showingAnswer,
	onShowAnswer,
	onHideAnswer,
}) => {
	const [guess, setGuess] = useState("");
	const [feedback, setFeedback] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const isCorrect = guess.toLowerCase() === correctAnswer.toLowerCase();
		setFeedback(isCorrect ? "Correct!" : "Incorrect!");
		onSubmit(isCorrect);
	};

	const handleInputClick = (e) => {
		e.stopPropagation();
	};

	return (
		<div onClick={showingAnswer ? onHideAnswer : onShowAnswer}>
			{showingAnswer ? (
				<div className="sideways-flex">
					<h3>The correct answer was:</h3>
					<h2>{correctAnswer}</h2>
					<p>(Click to hide)</p>
				</div>
			) : (
				<div>
					<h3>Conspiracy Theory:</h3>
					<h4>{question}</h4>
					<form
						onSubmit={handleSubmit}
						className="sideways-flex"
						onClick={handleInputClick}
					>
						<input
							type="text"
							value={guess}
							onChange={(e) => setGuess(e.target.value)}
							placeholder="Type your guess..."
							onClick={handleInputClick}
						/>
						<button type="submit" onClick={handleInputClick}>
							Submit
						</button>
						{feedback && (
							<p
								className={`${
									feedback === "Correct!" ? "correct" : "incorrect"
								} card-response`}
							>
								{feedback}
							</p>
						)}
					</form>
				</div>
			)}
		</div>
	);
};

export default GuessInput;
