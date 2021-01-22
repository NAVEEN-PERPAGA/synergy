import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/home/home'
import { Contact } from './components/contact/contact'
import { Basics } from './components/basics/basics'
import { Details } from './components/details/details'
import { AreasServed } from './components/areasServed/areasServed'
import { ServicesOffered } from './components/servicesOffered/servicesOffered'
import { Accreditations } from './components/accreditations/accreditations'
import { Accreditations_Next } from './components/accreditations_next/accreditations_next'
import { Required_Documents } from './components/req_documents/req_documents'
import { Finish_Application } from './components/finish_application/finish_application'
import { EfficiencyExpert } from './components/efficiency_expert/efficiency_expert'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/basics" component={Basics}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/areasServed" component={AreasServed}></Route>
        <Route path="/servicesOffered" component={ServicesOffered}></Route>
        <Route path="/accreditations" component={Accreditations}></Route>
        <Route path="/accreditations_next" component={Accreditations_Next}></Route>
        <Route path="/required_documents" component={Required_Documents}></Route>
        <Route path="/finish_application" component={Finish_Application}></Route>
        <Route path="/efficiency_expert" component={EfficiencyExpert}></Route>
      </Router>
    </div>
  );
}

export default App;
