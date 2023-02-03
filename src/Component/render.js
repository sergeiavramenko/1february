import React from 'react';
import ReactDOM from 'react-dom/client';


import state, {addPost} from "./Redux/State";
import App from "../App";



export let rerenderEntireTree = () => {
const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} />
        </React.StrictMode>
    );
}




