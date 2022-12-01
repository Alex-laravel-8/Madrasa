import React, { Component } from 'react';
import axios from "axios";


class EmailForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            email : '',
        }

        this.takeEmail = this.takeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    takeEmail(event){
        this.setState({email : event.target.value})
    }


    handleSubmit(){

        const packets = {
            email: this.state.email,
        };
        axios.post('/Madrasa/newsletter', packets)
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
                    <form>
                        {/* <h2 class="title">Sent Us a Message</h2> */}
                           {/* <div class="input-div one">
                              <div class="div">
                                      <input type="text" placeholder="First Name" onChange={this.firstName} class="input"/>
                              </div>
                           </div> */}


                              <div class="div pb-4">
                                   <input type="email"  className='input-field' placeholder="Email" onChange={this.takeEmail}  />
                           </div>
                        {/* <div class="input-div pass">
                              <div class="div">
                                   <input type="number" placeholder="Phone Number" onChange={this.takePhone} class="input" />
                           </div>
                        </div> */}

                        <button  type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Send</button>

                    </form>
                </div>
            </div>

                </div>
        );
    }
}
export default EmailForm;
