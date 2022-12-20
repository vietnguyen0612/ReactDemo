import ContactForm from '../../components/ContactPgae/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactPgae/ContactInfo/ContactInfo';
import './Contact.scss';
function Contact() {
    return (  
        <div className="contact-page">
            <ContactForm />
            <ContactInfo />
        </div>
    );
}

export default Contact;