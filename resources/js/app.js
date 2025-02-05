require('./bootstrap');

import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';

import GameList from './components/GameList';

export default function NHLApp() {
    return (
        <GameList />
    );
}

if (document.getElementById('nhl-app')) {
    let root = createRoot(document.getElementById('nhl-app'));
    root.render(<NHLApp />);
}