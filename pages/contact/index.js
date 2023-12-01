import  ContactContainer  from '../contactUs/containers/Contact.container';
import ContactComponent from '../contactUs/containers/Contact.component';
import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';

const ContactUs = () => {
    return (
        <>

            <Header />
            <ContactComponent />
            <Footer />

        </>
    );
};

export default ContactUs;