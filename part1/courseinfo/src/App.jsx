const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    const Header = ({ name }) => {
        return <h1>{name}</h1>;
    };

    const Part = ({ part }) => {
        return (
            <>
                <p>
                    {part.name} {part.exercises}
                </p>
            </>
        );
    };

    const Total = ({ parts }) => {
        console.log(parts);
        let sum = parts.reduce((partial, ele) => partial + ele.exercises, 0);

        console.log(sum);
        return <p>Number of exercises {sum}</p>;
    };

    return (
        <div>
            <Header name={course.name} />
            <Part part={course.parts[0]} />
            <Part part={course.parts[1]} />
            <Part part={course.parts[2]} />

            <Total parts={course.parts} />
        </div>
    );
};

export default App;
