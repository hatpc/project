import FAQComponent from '../home-faq/containers/FAQ.component';
import FAQContainer from '../home-faq/containers/FAQ.container';
import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';

const faq = () => {
    return (
        <>
            <Header />
            <FAQContainer />
            <FAQComponent />
            <Footer />
        </>

    );
};
export default faq;


