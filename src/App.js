import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './components/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;