import React, { Component,Fragment } from 'react';
import './App.css';
import AddContact from './components/addcontact/addcontact';
import ContactItem  from './components/contact-item/contact-item';
import NavBar from './components/navbar/navbar';

class App extends Component {

  render() {
    return(

       <Fragment>
            <NavBar></NavBar>
            <div className="grup-cl1">
                 <AddContact></AddContact>
            </div>
            <div className="grup-cl2">
                 <ContactItem></ContactItem>
                 <ContactItem></ContactItem>
                 <ContactItem></ContactItem>
                 <ContactItem></ContactItem>
                 <ContactItem></ContactItem>
                 <ContactItem></ContactItem>
                 <ContactItem></ContactItem>
                 <ContactItem></ContactItem>
            </div>
       </Fragment>
           
     
       
        
    )
  }


}



export default App;
