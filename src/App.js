import './App.css';
import MultiCounter from '../src/component/MultiCounter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from '../src/reducers/counterReducer';

function App() {
  const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <div className="App">
      <Provider store={store}>
      <MultiCounter></MultiCounter>
      </Provider>
    </div>
  );
}

export default App;
