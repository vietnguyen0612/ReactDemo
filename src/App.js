import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/about' element={<DefaultLayout><About/></DefaultLayout>}/>
          <Route path='/service' element={<DefaultLayout><Service/></DefaultLayout>}/>
          <Route path='/gallery' element={<DefaultLayout><Gallery/></DefaultLayout>}/>
          <Route path='/Blog' element={<DefaultLayout><Blog/></DefaultLayout>}/>
          <Route path='/Contact' element={<DefaultLayout><Contact/></DefaultLayout>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
