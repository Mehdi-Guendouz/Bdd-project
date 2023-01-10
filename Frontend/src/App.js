import LoginAdmin from './components/forms/LoginAdmin'
import Signup from './components/forms/Signup'
import Feed from './pages/Feed.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <div className="flex items-center justify-center bg-[#fbfbff]">
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<LandingPage/>}/>
            <Route  path="/Feed" element={<Feed/>}/>
            <Route  path="/login" element={<LoginAdmin/>}/>
            <Route  path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>

   /* <div className="flex items-center justify-center bg-[#fbfbff]">
    <Signup/>
    </div>*/
  )
}

export default App;
