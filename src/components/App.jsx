import React from 'react';
import Header from './Header';
import CardsList from './CardsList';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <CardsList />
                </div>
            </React.Fragment>
        )
    }

}

export default App;