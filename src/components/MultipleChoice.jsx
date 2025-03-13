import React from "react";

const MultipleChoice = ({
	trueFacts,
	fakeFact,
	showingAnswer,
	onShowAnswer,
	onHideAnswer,
}) => {
	const allFacts = [...trueFacts, fakeFact].sort(() => Math.random() - 0.5);

	return (
		<div onClick={showingAnswer ? onHideAnswer : onShowAnswer}>
			{showingAnswer ? (
				<div>
					<h3>The fake fact was:</h3>
					<p>{fakeFact}</p>
					<p>(Click to hide)</p>
				</div>
			) : (
				<div>
					<h3>Conspiracy Theories:</h3>
					<ol>
						{allFacts.map((fact, index) => (
							<li key={index}>{fact}</li>
						))}
					</ol>
				</div>
			)}
		</div>
	);
};

export default MultipleChoice;
