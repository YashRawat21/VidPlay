import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Body from './components/Body';
import Head from './components/Head';
import {Provider} from "react-redux";
import store from './utils/Store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children : [
    {
      path : "/",
      element : <MainContainer />
    },
    {
      path : "watch" ,
      element : <WatchPage />
    }
  ]
}])


function App() {
  return (
    <div className="App">
      <div>
        <Provider store={store}>

        <Head />
       <RouterProvider router={appRouter}/>
        </Provider>
      </div>
    </div>
  );
}

export default App;
