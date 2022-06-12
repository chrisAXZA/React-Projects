import './App.css';
import TodoList from './components/TodoList.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo App</h1>

            </header>

            <main>
                <h2>Tasks</h2>
                <TodoList />
            </main>

            <footer>
                <p>All rights reserved &copy;</p>
            </footer>
        </div>
    );
}

export default App;
