import  ServiceApartmentContainer  from './containers';
import BreadcrumbServiceApartment from './components/Breadcrumb.ServiceApartment';
import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';



const Homepage = () => {

    return (
      <>
      <ServiceApartmentContainer />
      <BreadcrumbServiceApartment />
      <Footer />
      <Header />


    </>
  );
};

export default Homepage;
