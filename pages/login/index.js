import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { isEmpty } from 'lodash';



const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, submitCount } } = useForm({ mode: "onBlur" });
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => { };
  const registerOptions = {
    name: {
      required: "Vui lòng nhập tên của bạn !",
      type: "required"
    },
    email: {
      required: "Email không hợp lệ !",
      type: "it can email"
    },
    login: { required: "Vui lòng nhập email và mật khẩu" },
    password: {
      required: "yêu cầu nhập mật khẩu",
      minLength: {
        value: 8,
        message: "Mật khẩu có ít nhất 8 ký tự !"
      },
      max: {
        value: 14,
        message: "Mật khẩu có nhiều nhất 12 ký tự !"
      },
    }
  };

  const handleLogin = () => {
    if (isEmpty(errors) && submitCount > 0) {
      router.push('/');
    }
    return;
  }

  return (
    <div className='login-org'>
      <div className='all'>
        <div className="main">
          <div className="container">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large">Đăng nhập</h1>
                <p className="text text-normal">Người dùng mới <span>
                  {/* <a href="#" className="text text-links">Tạo tài khoản</a> */}
                  <Link className="text text-links" href="/signup">
                    Tạo tài khoản
                  </Link>
                </span>
                </p>
              </div>
              <form onSubmit={handleSubmit(handleRegistration, handleError)} name="signin" className="form" >
                <div className="input-control d-flex flex-column">
                  <label for="email" className="input-label" hidden>Điền email</label>
                  <input type="email" name="email" id="email" className="input-field" placeholder="Nhập email hoặc sdt để đăng nhập" {...register('email', registerOptions.email)} />
                  <small className='hook-form'>
                    {errors?.email && errors.email.message}
                  </small>
                </div>
                <div className="input-control d-flex flex-column">
                  <label for="password" className="input-label" hidden>Mật khẩu</label>
                  <input type="password" name="password" id="password" className="input-field" placeholder="Nhập mật khẩu của bạn" {...register('password', registerOptions.password)} />
                  <small className='hook-form'>
                    {errors?.password && errors.password.message}
                  </small>
                </div>
                <div className="input-control">
                  <a href="#" className="text text-links">Quên mật khẩu</a>
                  <input onClick={() => handleLogin()} type="submit" className="input-submit" value="Đăng nhập" />
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (Login);