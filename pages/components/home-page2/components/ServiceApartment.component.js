import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import BreadcrumbServiceApartment from './Breadcrumb.ServiceApartment';
import previousIcon from '../../../assets/images/arrow-left.png';
import nextIcon from '../../../assets/images/arrow-right.png';
import ReactPaginate from 'react-paginate';
import { ServiceBanner } from '../../../assets/images/web-isn';
import { HeartIcon } from '../../../layouts/commons/icons';
import OwlCarousel from 'react-owl-carousel2';
import { ICON_LEFT, ICON_RIGHT } from '../../../utils/constants';
import { getPathLanguage } from '../../../utils/params';
import { LoginComponent } from '../../loginPage/pages';
import ForgotModal from '../../../modules/forgotPassword/pages/ForgotModal.component';
import { VerifyEmailComponent } from '../../signUp/pages';
import { formatMoney } from '../../../utils/objects';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFullPageLoader from '../../commons/isn/useFullPageLoader';
import { data } from '../data';

const ServiceApartmentComponent = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const history = useHistory();
  const pathLanguage = getPathLanguage(useLocation());
  const [pageSize, setPageSize] = useState(15);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [startItem, setStartItem] = useState(1);
  const [endItem, setEndItem] = useState(15);
  const [listServiced, setListServiced] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);
  //Owl carousel options
  const option = {
    items: 1,
    autoplay: false,
    loop: false,
    dots: true,
    nav: true,
    navText: [ICON_LEFT, ICON_RIGHT],
    autoHeight: true,
    responsive: {},
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    center: true,
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //eslint-disable-next-line
  }, []);

  // get data
  useEffect(() => {
    onFetchData();
    //eslint-disable-next-line
  }, [pageIndex, pageSize]);

  const onFetchData = () => {
    try {
      showLoader();
      if (data) {
        setListServiced(data);
        if (data) {
          let changeEndItem = pageSize * pageIndex;
          if (changeEndItem > data.totalRecords) {
            setEndItem(data.totalRecords);
          } else {
            setEndItem(changeEndItem);
          }
        }
        setPageCount(Math.ceil(data?.totalRecords / pageSize));
      }
    } finally {
      hideLoader();
    }
  };

  const handleLike = async (event) => {
    event.preventDefault();
    handleShowLogin();
  };

  // Go to detail page
  const goToDetailPage = data => {
    history.push(`${pathLanguage}/serviced-apartments/overview/${data.id}/${data.slug}?${data.typeCode}`);
  };

  // Change pageSize
  const [forcePage, setForcePage] = useState();
  const handlePageSize = e => {
    let pageSize = e.target.value;
    let newPageSize = parseInt(pageSize);
    setPageSize(newPageSize);
    changePage({ selected: 0 });
    setForcePage(0);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowForgot(false);
  };

  const handleShowForgot = () => {
    setShowLogin(false);
    setShowForgot(true);
  };

  const handleShowSignUp = () => {
    setShowLogin(false);
    setShowVerifyPopup(true);
  };
  const closeVerifyEmailPopup = () => {
    setShowVerifyPopup(false);
  };
  const changePage = ({ selected }) => {
    setForcePage();
    setPageIndex(selected + 1);
    setStartItem(pageSize * selected + 1);
    window.scrollTo({ top: 346, behavior: 'smooth' });
  };

  const displayItems = () => {
    if (listServiced.listProducts) {
      return (
        <div className="serviceapartment-page row">
          {listServiced.listProducts.map((item, index) => {
            return (
              <div id="serviceApartment" className="p-3 col-xl-4 col-md-6 col-sm-12 col-12" key={index}>
                <div className="project-info justify-content-center align-items-center mt-3">
                  <div className="container-slider">
                    <OwlCarousel options={option}>
                      {item.images.map((sliderImage, i) => {
                        return (
                          <div className="slide" key={i}>
                            <Link>
                              <LazyLoadImage src={`${sliderImage.url}`} alt={item.name} />
                            </Link>
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                  <div
                    onClick={e => handleLike(e)}
                    className='like-contents'
                  >
                    <HeartIcon />
                  </div>
                  <div className="content" onClick={() => goToDetailPage(item)}>
                    <div className="project-name">
                      <Link>{item.name}</Link>
                    </div>
                    <div className="property-info d-flex flex-column">
                      <div className="d-flex justify-content-between">
                        <div className="price">
                          {formatMoney(item.priceMin, 0, 0)}đ ~ {formatMoney(item.priceMax, 0, 0)}đ
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between extra-btn mt-3">
                      <button className="block-button details-block-btn">Chi tiết</button>
                      <button className="block-button booknow-block-btn">Mua ngay</button>
                    </div>
                  </div>
                </div>
                <div className="special-offers">
                  <div className="d-flex">
                    <div className="rectangle"></div>
                    <div className="triangle-right"></div>
                  </div>
                  <span className="text">Ưu đãi đặc biệt</span>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <>
      <React.Fragment>
        <div id="serviceApartment">
          <div className="position-relative service-banner">
            <div className="overlay-text">Danh sách sản phẩm</div>
            <LazyLoadImage src={ServiceBanner} alt="banner" />
            <div className="color-overlay"></div>
          </div>
          <div className="container">
            <BreadcrumbServiceApartment />
            <div className="item-per-page-container px-0 mt-5 col">
              <span className="text-sort mr-3">Sắp xếp:</span>
              <span className="along-line">&nbsp;</span>
              <select
                className="item-sort"
              >
                <option value="all">Tất cả</option>
                <option value="asc">Giá tăng dần</option>
                <option value="des">Giá giảm dần</option>
              </select>
              {/* display total item, item count of current page */}
              {listServiced ? (
                <div className="item-count-container">
                  <span>&nbsp;</span> {listServiced.totalRecords !== startItem ? `${startItem} - ` : ''}
                  {listServiced.totalRecords > listServiced.pageSize ? endItem : listServiced.totalRecords}{' '}
                  trong {listServiced.totalRecords} <span>&nbsp;</span>
                </div>
              ) : (
                ''
              )}

              {/* select items display per page */}
              <select className="item-number" onChange={e => handlePageSize(e)}>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
                <option value="75">75</option>
                <option value="90">90</option>
              </select>
            </div>
          </div>

          {/* render apartments list */}
          <div className="container">{displayItems()}</div>
          {/* paginate */}
          {listServiced && listServiced.totalRecords > 15 ? (
            <div className="service-paginate">
              <ReactPaginate
                previousLabel={<LazyLoadImage src={previousIcon} alt="nav-btn" />}
                nextLabel={<LazyLoadImage src={nextIcon} alt="nav-btn" />}
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                onPageChange={changePage}
                disabledClassName={'opacity-disable'}
                activeClassName={'pagination-active'}
                pageClassName={'pagination-pager-item'}
                nextLinkClassName={'next-btn'}
                previousLinkClassName={'prev-btn'}
                forcePage={forcePage}
              />
            </div>
          ) : (
            ''
          )}

          <LoginComponent
            closeLogin={() => {
              setShowLogin(false);
            }}
            showLogin={showLogin}
            handleShowForgot={handleShowForgot}
            handleShowSignUp={handleShowSignUp}
          />
          <VerifyEmailComponent
            showVerifyEmail={showVerifyPopup}
            hideVerifyEmail={closeVerifyEmailPopup}
          ></VerifyEmailComponent>
          <ForgotModal
            showModal={showForgot}
            hideModal={() => setShowForgot(false)}
            handleShowLogin={handleShowLogin}
          />
        </div>
      </React.Fragment>
      {loader}
    </>
  );
};

const mapStatetoProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(ServiceApartmentComponent);
