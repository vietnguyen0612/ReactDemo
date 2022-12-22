import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Home1 from './pages/Home1/Home1';
import Service from './pages/Service/Service';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Team from './pages/Team/Team';
import SigIn from './pages/SigIn/SigIn';
import SigUp from './pages/SigUp/SigUp';
import { useState } from 'react';

function App() {

  const [isSubmited, setIsSubmited] = useState(false)
  const [isSbumitedSignUp, setIsSubmitedSignUp] = useState(false);

  const submitForm = ()=> {
    setIsSubmited(true)
  }
  const submitFormSignUp = () => {
    setIsSubmitedSignUp(true)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/home1' element={<DefaultLayout><Home1/></DefaultLayout>}/>
          <Route path='/home2' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/about' element={<DefaultLayout><About/></DefaultLayout>}/>
          <Route path='/service' element={<DefaultLayout><Service/></DefaultLayout>}/>
          <Route path='/gallery' element={<DefaultLayout><Gallery/></DefaultLayout>}/>
          <Route path='/Blog' element={<DefaultLayout><Blog/></DefaultLayout>}/>
          <Route path='/Contact' element={<DefaultLayout><Contact/></DefaultLayout>}/>
          <Route path='/team' element={<DefaultLayout><Team /></DefaultLayout>}/>
          <Route path='/' element={!isSubmited ? <SigIn submitForm={submitForm} /> : <DefaultLayout><Home1/></DefaultLayout>}/>
          <Route path='/signup' element={!isSbumitedSignUp ? <SigUp submitFormSignUp={submitFormSignUp} /> : <DefaultLayout><Home1/></DefaultLayout>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
