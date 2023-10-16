import React from 'react';
import './App.css';
import PasswordManager from './Components/Password/Passwordmanager';
import Stopwatch from './Components/Stopwatch';
import FaqItem from './Components/Feqapp/Faqitem';

const faqsData = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section, and the course mentor will answer them. You can also see the doubts asked by other students.',
  },
];

const App = () => (
  <div>
  <div className="feq-container2">
    <div className="faqs-card-container">
      <h1 className="heading5">FAQ's</h1>
      <ul className="faqs-list-container">
        {faqsData.map(eachFaq => (
          <FaqItem key={eachFaq.id} faqData={eachFaq} />
        ))}
      </ul>
    </div>
    </div>
      <Stopwatch/>
    <PasswordManager/>
     
    </div>
  
);
  
   export default App;
   