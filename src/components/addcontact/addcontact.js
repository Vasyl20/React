import React, { Component, Fragment } from 'react';
import './addcontact.css';

class AddContact extends Component {
    render() {
        
         return (

               <Fragment>
                   <div className="addContactdiv">
                        <h3>Add Contact</h3>
                        <p>Name</p>
                            <input type="text" />
                        <p>Number</p>
                        <input type="text" />
                        <p>Imge</p>
                        <input type="text" />
                        <br></br> 
                        <input className="submitbt" type="submit"  />

                   </div>

               </Fragment>
         )
    }
}

export default AddContact;