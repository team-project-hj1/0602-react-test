import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './page/blue/Home';
import AboutComp2 from './page/team/AboutComp2';
import About from './page/green/About';
import ShjComp from './page/shj/ShjComp';

function App() {
  return (
    <div>
      <Routes>
        {/** blue 맡을 페이지*/}
        <Route path='/' element={<Home />}/>

        {/** green 맡을 페이지 */}
        <Route path='/about1' element={<About />} />

        {/** team 맡을 페이지 */}
        <Route path='/about2' element={<AboutComp2 />} />

        <Route path='/shj' element={<ShjComp />}></Route>

      </Routes>
    </div>
  );
}

export default App;
