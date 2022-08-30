import React from "react";
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const contacts = [{
    id: "1",
    name: "pranjal",
    email: "pranjal@gmail.com",
    mobile: "7787"
   },
   {
    id: "2",
    name: "kumar",
    email: "kumar@gmail.com",
    mobile: "9874"
   }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
