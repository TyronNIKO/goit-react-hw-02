const Feedback = ({good, bad, neutral}) => {
    const totalFeedback = good + neutral + bad;
    const average = Math.round((good / totalFeedback) * 100);
    return (
        <div>
            {totalFeedback ? (
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral:{neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {totalFeedback}</li>
                    <li>Positive: {!isNaN(average) && average}%</li>
                </ul>
            ) : (
                "No feedback yet"
            )}
        </div>
    );
};

export default Feedback;
