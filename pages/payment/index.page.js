import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UilGrinTongueWink, UilSmileBeam } from '@iconscout/react-unicons'
import { useRouter } from 'next/router';

import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';

const Payment = () => {
	const router = useRouter();
	const [totalAmount, setTotalAmount] = useState(0);
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(true);
		router.push('/homePage');
	}
	const handleShow = () => setShow(true);

	useEffect(() => {
		const cartTotalAmount = localStorage.getItem('cartTotalAmount');
		setTotalAmount(cartTotalAmount)
	}, [])

	return (
		<>
			<Header />
			<div className="payment">
				<body>
					<div className="main-back">
						<div className="container m-auto bg-white p-5 bod-3 my-5">
							<div className="row">
								<div className="col-lg-8 col-md-12">
									<form>
										<div className="header flex-between flex-vertical-center">
											<div className="flex-vertical-center">
												<i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
												<span className="title">
													<strong>Payment</strong>
													<span></span>
												</span>
											</div>
										</div>
										<div className="card-data flex-fill flex-vertical">
											<div className="flex-between flex-vertical-center">
												<div className="card-property-title">
													<strong>Card Number</strong>
													<span>Enter 16-digit card number on the card</span>
												</div>
											</div>

											<div className="flex-between">
												<div className="card-number flex-vertical-center flex-fill">
													<div className="card-number-field flex-vertical-center flex-fill">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
															<path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
															<path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
															<path
																fill="#ff3d00"
																d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
															/>
														</svg>
														<input
															type="text"
															placeholder="Card Number"
															className="form-control"
															id="cardNumber"
															name="cardNumber"
															data-bound="carddigits_mock"
															data-def="0000 0000 0000 0000"
															required
														/>
													</div>
													<i className="ai-circle-check-fill size-lg f-main-color"></i>
												</div>
											</div>

											<div className="flex-between">
												<div className="card-property-title">
													<strong>Expiry Date</strong>
													<span>Enter the expiration date of the card</span>
												</div>
												<div className="card-property-value flex-vertical-center">
													<div className="input-container half-width" style={{ background: '#f4f4f48a' }}>
														<input className="numbers month-own" data-def="00" type="text" data-bound="mm_mock" placeholder="MM" />
													</div>
													<span className="m-md">/</span>
													<div className="input-container half-width" style={{ background: '#f4f4f48a' }}>
														<input className="numbers year-own" data-def="01" type="text" data-bound="yy_mock" placeholder="YYYY" />
													</div>
												</div>
											</div>

											<div className="flex-between">
												<div className="card-property-title">
													<strong>CVC Number</strong>
													<span>Enter card verification code from the back of the card</span>
												</div>
												<div className="card-property-value">
													<div className="input-container" style={{ background: '#f4f4f48a' }}>
														<input id="cvc" placeholder="Card CVV" type="password" />
														<i id="cvc_toggler" data-target="cvc" className="ai-eye-open pointer"></i>
													</div>
												</div>
											</div>

											<div className="flex-between">
												<div className="card-property-title">
													<strong>Cardholder Name</strong>
													<span>Enter cardholders name</span>
												</div>
												<div className="card-property-value">
													<div className="input-container" style={{ background: '#f4f4f48a' }}>
														<input
															id="name"
															data-bound="name_mock"
															data-def="Mr. Cardholder"
															type="text"
															className="uppercase"
															placeholder="CARDHOLDER NAME"
														/>
														<i className="ai-person"></i>
													</div>
												</div>
											</div>

											<div className="flex-between">
												<div className="card-property-title">
													<strong>Mobile No.</strong>
													<span>Enter Mobile No.</span>
												</div>
												<div className="card-property-value">
													<div className="input-container" style={{ background: '#f4f4f48a' }}>
														<input id="phone" type="text" placeholder="Your Mobile No." />
														<i className="ai-phone"></i>
													</div>
												</div>
											</div>
											<div className="flex-between">
												<div className="card-property-title">
													<strong>Address</strong>
													<span>Enter the address to receive the product.</span>
												</div>
												<div className="card-property-value">
													<div className="input-container" style={{ background: '#f4f4f48a' }}>
														<input required id="address" type="text" placeholder="Your address" />
														<i className="ai-phone"></i>
													</div>
												</div>
											</div>
										</div>
										<div className="action flex-center">
											<Button className="b-main-color pointer" variant="primary" onClick={handleShow}>
												Pay Now
											</Button>
											<Modal show={show} onHide={handleClose}>
												<Modal.Header>
													<Modal.Title>Đặt hàng thành công <UilSmileBeam color="#fe6bbd" size="40" /> </Modal.Title>
												</Modal.Header>
												<Modal.Body>cảm ơn quý khách đã sử dụng sản phẩm của chúng tôi trong suốt thời gian qua.<br />
													Rất mong được phục vụ quý khách lần tới.<br />
													Chúc quý khách vui vẻ và thành công. < UilGrinTongueWink color="#fe6bbd" fontsize="30px" />

												</Modal.Body>
												<Modal.Footer>
													<Button variant="secondary" onClick={handleShow}>
														trở về
													</Button>
													<Button className='payment-modal' onClick={handleClose} variant="primary" >
														Trang chủ
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
									</form>
								</div>

								<div className="col-lg-4 col-md-12 py-5">
									<div></div>
									<div className="purchase-section flex-fill flex-vertical">
										<div className="card-mockup flex-vertical">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="40px">
												<path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
												<path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
												<path
													fill="#ff3d00"
													d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
												/>
											</svg>
											<div>
												<strong>
													<div id="name_mock" className="size-md pb-sm uppercase ellipsis">
														mr. Cardholder
													</div>
												</strong>
												<div className="size-md pb-md">
													<strong>
														<span id="carddigits_mock">0000 0000 0000 0000</span>
													</strong>
												</div>
												<div className="flex-between flex-vertical-center">
													<strong className="size-md">
														<span>Expiry Date : </span>
														<span id="mm_mock">00</span> / <span id="yy_mock">00</span>
													</strong>

													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="40px">
														<path
															fill="#1565C0"
															d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
														/>
														<path
															fill="#FFF"
															d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
														/>
														<path
															fill="#FFC107"
															d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
														/>
													</svg>
												</div>
											</div>
										</div>

										<ul className="purchase-props">
											<li className="flex-between">
												<span>Company</span>
												<strong>VPP Nancy</strong>
											</li>
											<li className="flex-between">
												<span>Total amount</span>
												<strong>{totalAmount?.toLocaleString()} đ</strong>
											</li>
											<div className="card-property-value d-flex">
												<div className="input-container" style={{ background: '#f4f4f48a', flex: 1 }}>
													<input defaultValue="MAGIAMGIA2023" type="text" placeholder="Voucher." />
													<i className="ai-phone"></i>
												</div>
												<div className="action">
													<button type="button" className="py-0 ml-2">
														USE
													</button>
												</div>
											</div>
										</ul>
									</div>
									<div className="separation-line"></div>
									<div className="total-section flex-between flex-vertical-center">
										<div className="flex-fill flex-vertical">
											<div className="total-label f-secondary-color">You have to Pay</div>
											<div>
												<strong>{totalAmount?.toLocaleString()} đ</strong>
											</div>
										</div>
										<i className="ai-coin size-lg"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</body>
			</div>
			<Footer />
		</>

	);
};
export default Payment;