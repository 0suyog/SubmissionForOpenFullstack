import { useState } from "react";

const App = () => {
    // save clicks of each button to its own state

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function increaseGood() {
        setGood(good + 1);
    }
    function increaseNeutral() {
        setNeutral(neutral + 1);
    }
    function increaseBad() {
        setBad(bad + 1);
    }

    return (
        <div>
            <Header title={"give feedback"} />
            <Button onClick={increaseGood} text="good" />
            <Button onClick={increaseNeutral} text={"neutral"} />
            <Button onClick={increaseBad} text={"bad"} />
            {good || bad || neutral ? (
                <>
                    <Header title={"statistics"} />
                    <Table good={good} neutral={neutral} bad={bad} />
                </>
            ) : null}
        </div>
    );
};

const Header = ({ title }) => {
    return <h1>{title}</h1>;
};

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

const Table = ({ good, neutral, bad }) => {
    let total = good + bad + neutral;
    let average = (good - bad) / total;
    let positivePercentage = (good * 100) / total;
    return (
        <table>
            <tr>
                <td>good</td> <td>{good}</td>
            </tr>
            <tr>
                <td>neutral</td> <td>{neutral}</td>
            </tr>
            <tr>
                <td>bad</td> <td>{bad}</td>
            </tr>
            <tr>
                <td>all</td> <td>{total}</td>
            </tr>
            <tr>
                <td>average</td> <td>{average}</td>
            </tr>
            <tr>
                <td>positivePercentage</td> <td>{positivePercentage}%</td>
            </tr>
        </table>
    );
};

export default App;
