import React from 'react';
import ContactForm from './ContactForm';
export class  Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showForm: false};
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm () {
        this.state.showForm? this.setState({showForm: false}) : this.setState({showForm: true});
    }
    
    render () {
        return(
        <section className='contact'>
            {this.state.showForm? <ContactForm hideForm={this.toggleForm}/> : <SubmitBtn showForm={this.toggleForm}/>}
        </section>
    )
    }
}

export const SubmitBtn = (props) => {

    const handleClick = () => props.showForm();
    
    return(
        <button 
            className='contact-btn'
            onClick={handleClick}>
            Contact Me<i className="fa fa-envelope-o mail" aria-hidden="true"></i>
        </button>
    )
}

export default Contact;