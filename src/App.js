import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import {Provider} from "react-redux";
import store from './utils/Store';
function App() {
  return (
    <div className="App">
      <div>
        <Provider store={store}>

        <Head />
        <Body />
        </Provider>
      </div>
    </div>
  );
}

export default App;
