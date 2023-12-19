import  ContactContainer  from './Contact.container';
import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';

const ContactUs = () => {
    return (
        <>
            <Header />
        <div id="contact">
          <div className="container mb-5">
            <div className="row">
              <div className="col-sm text-center">
                <h1 className="title my-5">Liên hệ chúng tôi</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 px-5 form-idea">
                <div className="idea text-center">Ý kiến đóng góp</div>
                <form>
                  <div className="form-group mt-3">
                    <input type="name" className="form-control" id="exampleInputName" placeholder="Họ và tên của bạn"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email của bạn"/>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                  </div>
                  <button type="submit" className="btn btn-lg btn-block">Gửi</button>
                </form>
              </div>
              <div className="col-md-6">
                <h6 className="my-3 map-info">Địa chỉ: <span className="text-muted">38 Yen Bai - Hai Chau - Da Nang</span></h6>
                <h6 className="my-3 map-info">Email: <span className="text-muted">nancy@gmail.com</span></h6>
                <h6 className="my-3 map-info">Liên hệ: <span className="text-muted">+91 98766 10278 || +91 76689 14244</span></h6>
                <a rel="noopener noreferrer" href="https://www.google.com/maps/place/38+Y%C3%AAn+B%C3%A1i/@16.0694091,108.2203963,17z/data=!3m1!4b1!4m5!3m4!1s0x314219a95db33d61:0x4aa50947449bd8fc!8m2!3d16.0693936!4d108.2226837?hl=vi-VN" className="text-center">
                  <img className="img-fluid contact-image rounded" alt="Responsive" src="https://csds.qld.edu.au/sdc/resources/images/find-us-map.jpg"/>
                </a>
              </div>
            </div>
          </div>
        </div>
            <Footer />
        </>
    );
};

export default ContactUs;