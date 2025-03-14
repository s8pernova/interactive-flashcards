import "../App.css";
import MultipleChoice from "./MultipleChoice";
import GuessInput from "./GuessInput";

const Cards = ({
	currentCard,
	showingAnswer,
	onShowAnswer,
	onHideAnswer,
	cardColor,
}) => {
	const { trueFacts = "", fakeFact = "", type, answer, question } = currentCard;

	return (
		<div className={`card ${cardColor}`}>
			{type === "text-input" ? (
				<div>
					<p>{trueFacts[0]}</p>
					<GuessInput
						correctAnswer={answer}
						onCorrectGuess={onShowAnswer}
						question={question}
						showingAnswer={showingAnswer}
						onShowAnswer={onShowAnswer}
						onHideAnswer={onHideAnswer}
					/>
				</div>
			) : (
				<MultipleChoice
					trueFacts={trueFacts}
					fakeFact={fakeFact}
					showingAnswer={showingAnswer}
					onShowAnswer={onShowAnswer}
					onHideAnswer={onHideAnswer}
				/>
			)}
		</div>
	);
};

export default Cards;
