import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRouter';
import Donor from './pages/Dashboard/Donor';
import Hospital from './pages/Dashboard/Hospital';
import OrganisationPage from './pages/Dashboard/Organisation';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytic';
import OrgList from './pages/Admin/OrgList';
import HospitalList from './pages/Admin/Hospital';
import DonarList from './pages/Admin/DonarList';
import AdminHome from './pages/Admin/AdminHome';
import Home from './Home/HOME';
import PetHealthTracking from './components/Pettracker/Pettracker';

function App() {
  return (
    <div className="App">
      
     <ToastContainer />
     <Routes>
      <Route path="/donar" element={
        <ProtectedRoute><Donor/></ProtectedRoute>
      
      }/>
      <Route path="/hospital" element={
        <ProtectedRoute><Hospital/></ProtectedRoute>
      
      }/>
       <Route path="/orgnaisation" element={
        <ProtectedRoute><OrganisationPage/></ProtectedRoute>
      
      }/>
        <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />

          <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList/>
            </ProtectedRoute>
          }
        />
        <Route path="/consumer" element={
        <ProtectedRoute><Consumer/></ProtectedRoute>
        
      
      }/>
       <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
      <Route path="/donation" element={
        <ProtectedRoute><Donation/></ProtectedRoute>
        
      
      }/>
     
      <Route path="/home" element={
        <ProtectedRoute><HomePage/></ProtectedRoute>
      
      }/>
      <Route path="/" element={<PublicRoute><Home/></PublicRoute>}/>
      <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path="/health-tracking" element={<PetHealthTracking />} />
     </Routes>
    </div>
  );
}

export default App;
