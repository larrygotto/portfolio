import { AdminHome } from '../pages/AdminHome.js';
import { Login } from '../pages/Login.js';
import { HomePage } from '../pages/HomePage.js';
import { ApplicationForm } from '../pages/ApplicationForm.js';
import {TripList} from '../pages/TripList';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { NotFound } from '../pages/NotFound.js';
import { TripDetails } from '../pages/TripDetails.js';
import { TripDetailsList } from '../pages/TripDetailsList.js';
import {CreateTrip} from '../pages/CreateTrip';
import { ApplicationSuccess } from '../pages/ApplicationSuccess.js';



export const Router = () => {

        return <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/trips' element={<TripList/>}/>
                <Route path='/admin' element={<AdminHome/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/createtrip' element={<CreateTrip/>}/>
                <Route path='/tripdetailslist' element={<TripDetailsList/>}/>
                <Route path='/tripdetail/:id' element={<TripDetails/>}/>
                <Route path='/applicationform/:id' element={<ApplicationForm/>}/>
                <Route path='/applicationform/success/:tripname' element={<ApplicationSuccess/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

            <Footer/>
            
        </BrowserRouter>
}