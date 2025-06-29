import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery';
import './styles/index.css';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Gallery} />
                {/* Additional routes can be added here */}
            </Switch>
        </Router>
    );
};

export default App;