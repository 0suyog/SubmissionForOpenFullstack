const App = () => {
    const course = "Half Stack application development";
    const parts = [
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
    ];

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
            <Header name={course} />
            {
                parts.map((part, i) => (
                    <Part part={part} key={i} />
                ))

                // <Part part={part2}  />
                // <Part part={part3}  />
            }

            <Total parts={parts} />
        </div>
    );
};

export default App;
