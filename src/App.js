import Header from './component/Header';
import './App.css';
import Section from './component/Section';
import NewItem from './component/NewItem';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path='/newitem/:id' element={<NewItem />} />
      </Routes>
    </div>
  );
}

export default App;
