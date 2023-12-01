import AboutNancyContainer  from '../aboutNancy/containers/AboutNancy.container';
import AboutNancyComponent from '../aboutNancy/containers/AboutNancy.component';
import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';

const AboutNancy = () => {
    return (
      <>
          <Header />
          <AboutNancyComponent />
          <AboutNancyContainer />
          <Footer />
        </>
       
    );
};

export default  AboutNancy;
