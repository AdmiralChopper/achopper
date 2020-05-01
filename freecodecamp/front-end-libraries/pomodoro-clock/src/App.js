import React from 'react';
import { Provider, connect} from 'react-redux';
import appStore from './store/appStore'
import {mapStateToProps, mapDispatchToProps} from './react-redux-maps/maps';
import Presentational from './components/Presentational/index';
import './App.css';

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class App extends React.Component {

  render() {
    return (
    <Provider store={appStore}>
        <Container />
    </Provider>
    )
    
    }
}

export default App;
