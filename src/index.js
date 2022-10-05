import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router,Routes,Route} from "react-router-dom" //(for github host)
//import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Subject from './components/Subject';
import Layout from './components/Layout';
import Notes from './notes';
import Assignment from './Assignment';
import Aktuques from './components/aktuques';
import Sessional from './components/sessional';
import Sesstype from './components/sesstype';
import Mcq from './Mcq'
import Allsubjects from './Allsubjects'
import Gate from './components/Gate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
      
      
        <Routes>
        
          <Route exact path='/' element={<App />} />
          <Route path="/allsubject" element={<Allsubjects />}/>

          <Route path="/discrete_layout" element={<Layout name="Discrete" />} />
          <Route path="/Discrete_ppt" element={<Subject name="Discrete Mathematics" />} />
          <Route path="/discrete_notes" element={<Notes name="Discrete Mathematics" />} />
          <Route path="/discrete_assign" element={<Assignment name="Discrete Mathematics" />} />
          <Route path="/discrete_aktu" element={<Aktuques name="Discrete Mathematics" />} />
          <Route path="/discrete_sess" element={<Sessional name="Discrete" />} />
          <Route path="/Discrete/sesstype/:year" element={<Sesstype name="Discrete Mathematics"   />} />
          <Route path="/discrete_mcq" element={<Mcq name="Discrete Mathematics" />} />

          <Route path="/automata_layout" element={<Layout name="Automata" />} />
          <Route path="/Automata_ppt" element={<Subject name="Automata Theory" />} />
          <Route path="/Automata_notes" element={<Notes name="Automata Theory" />} />
          <Route path="/Automata_assign" element={<Assignment name="Automata Theory" />} />
          <Route path="/Automata_aktu" element={<Aktuques name="Automata Theory" />} />
          <Route path="/Automata_sess" element={<Sessional name="Automata" />} />
          <Route path="/Automata/sesstype/:year" element={<Sesstype name="Automata Theory"   />} />

          <Route path="/dbms_layout" element={<Layout name="Database" />} />
          <Route path="/Database_ppt" element={<Subject name="Database Management System" />} />
          <Route path="/Database_notes" element={<Notes name="Database Management System" />} />
          <Route path="/Database_assign" element={<Assignment name="Database Management System" />} />
          <Route path="/Database_aktu" element={<Aktuques name="Database Management System" />} />
          <Route path="/Database_sess" element={<Sessional name="Database" />} />
          <Route path="/Database/sesstype/:year" element={<Sesstype name="Database Management System"   />} />

          <Route path="/algorithm_layout" element={<Layout name="Algorithm" />} />
          <Route path="/algorithm_ppt" element={<Subject name="Design and Analysis of Algorithm" />} />
          <Route path="/algorithm_notes" element={<Notes name="Design and Analysis of Algorithm" />} />
          <Route path="/algorithm_assign" element={<Assignment name="Design and Analysis of Algorithm" />} />
          <Route path="/algorithm_aktu" element={<Aktuques name="Design and Analysis of Algorithm" />} />
          <Route path="/algorithm_sess" element={<Sessional name="Algorithm" />} />
          <Route path="/algorithm/sesstype/:year" element={<Sesstype name="Design and Analysis of Algorithm"   />} />

          <Route path="/gate_ques" element={<Gate  />} /> 
        </Routes>
  </Router>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
