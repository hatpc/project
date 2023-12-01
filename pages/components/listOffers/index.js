import  BreadcrumbListOffers  from './common2/Breadcrumb.ListOffers';
import ListOffersComponent from './common2/ListOffers.component';
import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';



const listOffers = () => {

    return (
      <>
      <BreadcrumbListOffers />
      <ListOffersComponent />
      <Footer />
      <Header />


    </>
  );
};

export default listOffers;
