import React from 'react';
import './App.css';
import { useActions, useAppState } from './overmind';

function App() {
    const state = useAppState();
    const actions = useActions();

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {state.title}
                    <button onClick={(e) => actions.actionFoo()}>click</button>
                </p>
            </header>
        </div>
    );
}

export default App;
