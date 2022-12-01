import React, { Component } from 'react';
import axios from "axios";


class ContactForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname : '',
            email : '',
            phone : ''
        }

        this.firstName = this.firstName.bind(this);
        this.takePhone = this.takePhone.bind(this);
        this.takeEmail = this.takeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstName(event){
        this.setState({firstname : event.target.value})
    }
    takePhone(event){
        this.setState({phone : event.target.value})
    }
    takeEmail(event){
        this.setState({email : event.target.value})
    }


    handleSubmit(){

        const packets = {
            firstname:  this.state.firstname,
            email: this.state.email,
            phone: this.state.phone,
        };
        axios.post('/Madrasa/send', packets)
            // .then(
            //     response => alert(JSON.stringify(response.data))

            //     )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);

                });
    }

    render(){
        return (
<div>


            <div class="container">
                <div class="login-content">
                    <form className='flex-field'>
                        <h2 class="title">Sent Us a Message</h2>
                           <div class="input-div one">
                              <div class="div">
                                      <input type="text" placeholder="First Name" onChange={this.firstName} class="input"/>
                              </div>
                           </div>

                           <div class="input-div pass">
                              <div class="div">
                                   <input type="email" placeholder="Email" onChange={this.takeEmail} class="input" />
                           </div>
                        </div>
                        <div class="input-div pass">
                              <div class="div">
                                   <input type="number" placeholder="Phone Number" onChange={this.takePhone} class="input" />
                           </div>
                        </div>

                        <button  type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Send</button>

                    </form>
                </div>
            </div>

                </div>
        );
    }
}
export default ContactForm;
