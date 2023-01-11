import LoginAdmin from './components/forms/LoginAdmin'
import Signup from './components/forms/Signup'
import Feed from './pages/Feed.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage.jsx";
import Sharelink from './components/Sharelink';

function App() {
  return (
    <div className="flex items-center justify-center bg-[#fbfbff]">
      <BrowserRouter>
        <Routes>
            <Route  path="/landing" element={<LandingPage />}/>
            <Route  path="/Feed" element={<Feed />}/>
            <Route  path="/login" element={<LoginAdmin />}/>
            <Route  path="/" element={<Signup />}/>
            <Route  path="/sharelink" element={<Sharelink/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
