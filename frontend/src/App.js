import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTicket from './pages/NewTicket'
import History from './pages/History'
import CSVUploader from './pages/csvUploader'
import RezervareNoua from './pages/RezervareNoua';
import CalendarRezervari from './pages/CalendarRezervari';
import ListaRezervari from './pages/listaRezervari'
import Acasa from './pages/Acasa'
import RezervareNouaATV from './pages/RezervareNouaATV'
import ProgramarileMele from './pages/ProgramarileMele'
import RezervareNouaEbikes from './pages/RezervareNouaEbikes'
import RezervareNouaMotoreta from './pages/RezervareNouaMotoreta'
import RezervareNouaMotocicleta from './pages/RezervareNouaMotocicleta'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Acasa />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/new-ticket'
              element={
                <PrivateRoute>
                  <NewTicket />
                </PrivateRoute>
              }
            />
            <Route
              path='/history'
              element={
                <AdminRoute>
                  <History />
                </AdminRoute>
              }
            />
            <Route path='/csv-uploader' element={<CSVUploader />} />
            <Route path="/rezervare-noua" element={<RezervareNoua />} />
            <Route path="/calendar-rezervari" element={<CalendarRezervari />} />
            <Route path="/lista-rezervari" element={<ListaRezervari />} />  
            <Route path="/rezervare-noua/ATV1" element={<RezervareNouaATV />} />
            <Route path="/rezervare-noua/ATV2" element={<RezervareNouaEbikes />} />
            <Route path="/rezervare-noua/ATV3" element={<RezervareNouaMotoreta />} />
            <Route path="/rezervare-noua/ATV4" element={<RezervareNouaMotocicleta />} />
            <Route path="/programarile-mele" element={<ProgramarileMele />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
