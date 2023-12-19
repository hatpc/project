import React from 'react';
import Image from 'next/image';
import { UilGoogle, UilFacebook, UilApple } from '@iconscout/react-unicons'
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

const Signup = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => { };
  const registerOptions = {
    name: {
      required: "Nhập họ và tên",
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
        message: "Mật khẩu tối đa 12 ký tự !"
      },
    }
  };
  const handleSignup = () => {
    if (isEmpty(errors) && submitCount > 0 ) {
      router.push('/');
    }
    return;
  }
  return (
    <div className='login-org'>
      <div className='all'>
        <div class="main">
          <div class="container">
            <section class="wrapper">
              <div class="heading">
                <h1 class="text text-large">Đăng Ký</h1>
              </div>
              <form onSubmit={handleSubmit(handleRegistration, handleError)} name="signin" class="form">
                <div class="input-control">
                  <label for="email" class="input-label" hidden>Địa chỉ Email</label>
                  <input type="text" name="name" id="email" class="input-field" placeholder="Họ và tên" autocomplete="off" {...register('name', registerOptions.name)} />
                  <small className='hook-form'>
                    {errors?.name && errors.name.message}
                  </small>
                </div>
                <div class="input-control">
                  <input type="email" name="email" id="email" class="input-field" placeholder="Địa chỉ Email" autocomplete="off"{...register('email')} />
                  <small className='hook-form'>
                    {errors?.email && errors.email.message}
                  </small>
                </div>

                <div class="input-control">
                  <label for="password" class="input-label" hidden>Password</label>
                  <input type="password" name="password" id="password" class="input-field" placeholder="Mật khẩu" autocomplete="off"{...register('password', registerOptions.password)} />
                  <small className='hook-form'>
                    {errors?.password && errors.password.message}
                  </small>
                </div>

                <div class="input-control">
                  <label for="password" class="input-label" hidden>Password</label>
                  <input type="password" name="password" id="password" class="input-field" placeholder="Nhập lại mật khẩu" autocomplete="off"{...register('password', registerOptions.password)} />
                  <small className='hook-form'>
                    {errors?.password && errors.password.message}
                  </small>
                </div>
                <div class="input-control d-flex justify-content-center">
                  <input onClick={() => handleSignup()} type="submit" name="submit" class="input-submit" value="Đăng ký" />
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;