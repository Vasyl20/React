import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component {

    state = {
        name: "Adndi Rab",
        number: "0953452352",
        imge: "https://cdn1.vectorstock.com/i/1000x1000/90/35/avatar-men-design-vector-14499035.jpg"

    }


    render() {

        const {name, number,imge} = this.state;

        return (
              <Fragment>
                  <div className="col-3 card cardst" >
                    <img src={imge}></img>
                    <div className="card-body">
                        <h3>{name}</h3>
                        <p>{number}</p>
                    </div>
                  </div>
              </Fragment>

        )
    }
}

export default ContactItem;