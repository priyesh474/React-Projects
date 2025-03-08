import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Counter from "./Components/CounterApp/Counter";
import Calculator from "./Components/Calculator/Calculator";
import Main from "./Components/Main";
import Todoapp from "./Components/TodoApp/Todoapp";
import Imageapp from "./Components/ImageSearch/Imageapp";
import DictionaryApp from "./Components/DictionaryApp/DictionaryApp";


// Routing
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main/>
    },
    {
      path: '/counter',
      element:
      <div>
        <Main/>
        <Counter/>
      </div>
    },
    {
      path: '/calculator',
      element: 
      <div>
        <Main/>
        <Calculator/>
      </div>
    },
    {
      path: '/todoapp',
      element: 
      <div>
        <Main/>
        <Todoapp/>
      </div>
    },
    {
      path: '/imageapp',
      element: 
      <div>
        <Main/>
        <Imageapp/>
      </div>
    },
    {
      path: '/dictionaryapp',
      element: 
      <div>
        <Main/>
        <DictionaryApp/>
      </div>
    }  
  ]
);



function App() {

  return (
    <div className="App main-bg">
      <div className="main-heading mb-4">
        <h1>React Projects</h1>
      </div>

      <RouterProvider router={router}/>

    </div>
  );
}

export default App;
