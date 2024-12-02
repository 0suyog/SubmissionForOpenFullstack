import Total from "./Total";
import Header from "./Header";
import Part from "./Part";

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            {course.parts.map((part) => {
                return <Part part={part} key={part.id} />;
            })}
            <b>
                total of <Total parts={course.parts} /> exercises
            </b>
        </>
    );
};

export default Course;
