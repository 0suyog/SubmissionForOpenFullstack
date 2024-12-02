const Total = ({ parts }) => {
    let sum = parts.reduce((partial, ele) => partial + ele.exercises, 0);

    console.log(sum);
    return <span> {sum}</span>;
};

export default Total