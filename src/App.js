import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ITOfficer from './Pages/itofficer';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import FullUserdetails  from './Pages/FullUserdetails';
import UpdateUserDetails from './Pages/UpdateUserDetails';
import UserPersona from './Components/UserPersona/UserPersona';
import FullUserPersona from './Pages/FullUserPersona';
import Suspect from './Pages/Suspect';
import Registercrimefull from './Pages/Registercrimefull';
import RegisterVictimfull  from './Pages/RegisterVictimfull';
import RegisterEvidencefull from './Pages/RegisterEvidencefull';
import FullUpdateEvidence from './Pages/FullUpdateEvidence';
import FullRegisterCriminalSuspect from './Pages/FullRegisterCriminalSuspect';
import UpdateCrimeFull from './Pages/UpdateCrimeFull';
import UpdateVictimfull from './Pages/UpdateVictimFull';
import UpdateCriminalSuspectFull from './Pages/UpdateCriminalSuspectFull';
import UpdateExistingFull from './Pages/UpdateExistingFull';
import FullsystemHome from './Pages/FullsystemHome';

import HomePO from './PagesPO/HomePO';
import Search from './PagesPO/Search';
import SearchBiometrics from './PagesPO/SearchBiometrics';
import SearchResult from './PagesPO/SearchResult';
import Victims from './PagesPO/Victims';
import Crime from './PagesPO/Crime';
import Evidences from './PagesPO/Evidences';
import Reports from './PagesPO/Reports';
import Support from './PagesPO/Support';
import ReportResponse from './PagesPO/ReportResponse';
import Footer from './Components/Footer/footer';

import NewsandUpdatesFull from './GeneralPages/NewsandUpdatesFull';
import ContactUSFull from './GeneralPages/ContactUSFull';
import FAQandHelpFull from './GeneralPages/FAQandHelpFull';
import LoginGeneralFull from './GeneralPages/LoginGeneralFull';
import FogotPasswordFull from './GeneralPages/FogotPasswordFull';
import ResetPasswordFull from './GeneralPages/ResetPasswordFull';
import VerificationCodeFull from './GeneralPages/VerificationCodeFull';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ITofficer" element={<ITOfficer/>}/>
          <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
          <Route path="/FullUserdetails"element={<FullUserdetails/>}/>
          <Route path='/UpdateUserDetails' element={<UpdateUserDetails/>}/>
          <Route path='/UserPersona' element={<UserPersona/>}/>
          <Route path='/FullUserPersona' element={<FullUserPersona/>}/>
          <Route path='/Suspect' element={<Suspect/>}/>
          <Route path='/Registercrimefull'element={<Registercrimefull/>}/>
          <Route path='/RegisterVictimfull' element={<RegisterVictimfull/>}/>
          <Route path='/RegisterEvidencefull' element={<RegisterEvidencefull/>}/>
          <Route path='/FullUpdateEvidence' element={<FullUpdateEvidence/>}/>
          <Route path='/FullRegisterCriminalSuspect'element={<FullRegisterCriminalSuspect/>}/>
          <Route path='/UpdateCrimeFull'element={<UpdateCrimeFull/>}/>
          <Route path='/UpdateVictimFull'element={<UpdateVictimfull/>}/>
          <Route path='/UpdateCriminalSuspectFull' element={<UpdateCriminalSuspectFull/>}/>
          <Route path='/UpdateExistingFull' element={<UpdateExistingFull/>}/>
          <Route path='/FullsystemHome' element={<FullsystemHome/>}/>

          <Route path="/HomePO" element={<HomePO/>} />          
          <Route path="/Search" element={<Search/>} />
          <Route path="/SearchBiometrics" element={<SearchBiometrics/>} />
          <Route path="/SearchResult" element={<SearchResult/>} />
          <Route path="/Victims" element={<Victims/>} />
          <Route path="/Crime" element={<Crime/>} />
          <Route path="/Evidences" element={<Evidences/>} />
          <Route path="/Reports" element={<Reports/>} /> 
          <Route path="/Support" element={<Support/>} />
          <Route path="/ReportResponse" element={<ReportResponse/>} />

          <Route path="/NewsandUpdatesFull" element={<NewsandUpdatesFull/>}/>
          <Route path="/ContactUSFull" element={<ContactUSFull/>}/>
          <Route path="/FAQandHelpFull" element={<FAQandHelpFull/>}/>
          <Route path="/LoginGeneralFull" element={<LoginGeneralFull/>} />
          <Route path="/FogotPasswordFull" element={<FogotPasswordFull/>} />
          <Route path="/ResetPasswordFull" element={<ResetPasswordFull/>} />
          <Route path="/VerificationCodeFull" element={<VerificationCodeFull/>} />



        </Routes>
        <footer >
          <Footer/>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;