import React from 'react';
import { useState } from 'react';

import { Calendar, Calendar1 } from '../../public/images/nancy';
import Image from 'next/image';
import { UilTrashAlt, UilPlusCircle, UilMinusCircle } from '@iconscout/react-unicons'
import { useRouter } from 'next/router';

function AddToCard() {
  const router = useRouter();
  const productData = [
    {
      id: 1,
      image: Calendar,
      name: "Lịch để bàn nhỏ nhắn xinh xắn",
      price: 12000,
      qty: 1,
    },
    {
      id: 2,
      image: Calendar1,
      name: "Lịch để bàn loại 2 xinh không kém",
      price: 12000,
      qty: 1,
    },
  ]

  const [products, SetProducts] = useState(productData);

  // -----Increment Event------
  const increaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data, o) => {
        if (i === o) {
          return {
            ...data,
            qty: data.qty + 1
          };
        }
        return data;
      })
    );
  };

  // -----Decrement Event------
  const decreaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data, o) => {
        if (i === o) {
          if (data.qty > 1) {
            return { ...data, qty: data.qty - 1 };
          } else {
            return data;
          }
        }
        return data;
      })
    );
  };

  // -----Remove Event------
  const removeFromCart = (i) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
      SetProducts(prevCart =>
        prevCart.filter((item, o) => {
          return i !== o;
        })
      );

    } else {
      // alert('No');
    }
  };

  // -empty-cart--------
  const emptycart = () => {
    if (window.confirm("Bạn có muốn xóa tất cả giỏ hàng không?")) {
      SetProducts([]);
    } else {
      // alert('No');
    }
  }

  // ------Total Product Incart and Total Price of cart
  const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
  const cartTotalAmount = products.reduce((acc, data) => acc + data.price * data.qty, 0);

  const handleToPayment = () => {
    localStorage.setItem('cartTotalAmount', cartTotalAmount);
    router.push('/payment');
  }

  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-10 mt-5 mb-5">
        <div className="card">
          <div className="card-header-flex d-flex justify-content-between my-3 w-100 px-3">
            <h5 className="m-0">Tổng số sản phẩm {products.length > 0 ? `(${products.length})` : ''}</h5>
            {
              products.length > 0
                ?
                <button className="btn btn-danger mt-0 btn-sm d-flex align-items-center" onClick={() => emptycart()}>
                  <UilTrashAlt />
                  <span>Xóa tất cả</span>
                </button>
                :
                ''
            }
          </div>
          <div className="card-body py-0 w-100 px-3">
            {
              products.length === 0 ? <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td colSpan="6">
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Giỏ hàng của bạn đang trống!</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> :
                <table className="table cart-table mb-0">
                  <thead>
                    <tr>
                      <th>Xóa</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.map((data, index) => {
                        const { id, image, name, price, qty } = data;
                        return (
                          <tr key={index}>
                            <td><button className="btn btn-danger" onClick={() => removeFromCart(index)}><UilTrashAlt /></button></td>
                            <td><div className="product-img"><Image width={200} height={200} src={image} alt="img" /></div></td>
                            <td><div className="product-name"><p>{name}</p></div></td>
                            <td>{price?.toLocaleString()} đ</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="btn btn-primary" type="button" onClick={() => decreaseQuantity(index)}>
                                  <UilMinusCircle />
                                </button>
                                <input type="text" name="qty" className="qty-input-box" value={qty} disabled />
                                <button className="btn btn-primary" type="button" onClick={() => increaseQuantity(index)}>
                                  <UilPlusCircle />
                                </button>
                              </div>
                            </td>
                            <td className="text-right">{(qty * price).toLocaleString()} đ</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan="3">&nbsp;</th>
                      <th>Items in Cart<span className="ml-2 mr-2">:</span><span className="text-danger">&nbsp;{cartTotalQty}</span></th>
                      <th className="text-right">Total Price<span className="ml-2 mr-2">:</span><span className="text-danger">&nbsp;{cartTotalAmount.toLocaleString()} đ</span></th>
                      <th><button onClick={()=>handleToPayment()} className='btn btn-rounded btn-warning'>Thanh toán</button></th>
                    </tr>
                  </tfoot>
                </table>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;