import TodoList from './components/TodoList.js';

function App() {
    // Key-List Demo
    // let numbers = [1, 2, 3, 4, 5, 6];

    // let mappedNumbers = numbers.map((number, i) => {
    //     return <li key={i}>{number}</li>;
    // });

    return (
        <div className="site-wrapper">
            <ul>
                {/* Key-List Demo */}
                {/* {mappedNumbers} */}
                {/* {mappedNumbers} */}
                {/* keys do not need to be globally unique, only amongst siblings */}

                {/* {numbers.map((num, i) => <li key={i}>Num: {num}</li>)} */}
                {/* {numbers.map((num, i) => <li key={Math.random()}>Num: {num}</li>)} */}

                <TodoList />
            </ul>
        </div>
    );
}

export default App;
