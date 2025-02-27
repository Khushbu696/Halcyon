import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import Default from './Components/Default/Default.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Converse from './Components/Converse/Converse.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Diary from './Components/Diary/Diary.jsx'
import Goals from './Components/Diary/Goals/Goals.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/diary" element={<Diary />} />
          <Route path="/dashboard/diary/goals" element={<Goals />} />

          <Route path="/dashboard/converse" element={<Converse />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
