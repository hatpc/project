import  ServiceApartmentContainer  from './containers';
import BreadcrumbServiceApartment from './components/Breadcrumb.ServiceApartment';

const Homepage = () => {

    return (
      <>
      <ServiceApartmentContainer />
      <BreadcrumbServiceApartment />

    </>
  );
};

export default Homepage;
