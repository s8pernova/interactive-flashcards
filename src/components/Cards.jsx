import "../App.css";

const Cards = ({
	currentCard,
	showingAnswer,
	onShowAnswer,
	onHideAnswer,
	cardColor,
}) => {
	const { trueFacts, fakeFact } = currentCard;
	const allFacts = [...trueFacts, fakeFact].sort(() => Math.random() - 0.5);

	return (
		<div
			className={`card ${cardColor}`}
			onClick={showingAnswer ? onHideAnswer : onShowAnswer}
		>
			{showingAnswer ? (
				<div>
					<h3>The fake fact was:</h3>
					<p>{currentCard.fakeFact}</p>
					<p>(Click to hide)</p>
				</div>
			) : (
				<div>
					<h3>Conspiracy Theories:</h3>
					<ol>
						{allFacts.map((fact) => (
							<li>{fact}</li>
						))}
					</ol>
				</div>
			)}
		</div>
	);
};

export default Cards;
