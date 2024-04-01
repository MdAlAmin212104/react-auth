import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Register = () => {

      const { createUser } = useContext(AuthContext)
      // console.log(authInfo);

      const handleRegisterForm = e => {
            e.preventDefault();
            const name = e.target.name.value
            const email = e.target.email.value;
            const password = e.target.password.value;
            //console.log(name, email, password);


            //create user
            createUser(email, password)
                  .then((result) => {
                        console.log(result.user);
                  })
                  .catch((error) => {
                        console.error(error.message);
                  })


      }


      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="flex-col">
                  <div className="text-center">
                        <h1 className="text-5xl font-bold my-5">Register Now!</h1>
                  </div>
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form
                                    onSubmit={handleRegisterForm}
                                    className="card-body">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                          <input
                                                type="text"
                                                name='name'
                                                placeholder="Your name"
                                                className="input input-bordered"
                                          />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                          <input
                                                type="email"
                                                name='email'
                                                placeholder="email"
                                                className="input input-bordered"
                                                required
                                          />
                              </div>
                              <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Password</span>
                              </label>
                                          <input
                                                type="password"
                                                name='password'
                                                placeholder="password"
                                                className="input input-bordered"
                                                required
                                          />
                              
                              </div>
                              <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                              </div>
                                    
                              <p>Already have a account? Please<Link to='/login' className='btn btn-link'>login</Link></p>
                        </form>
                  </div>
                  </div>
            </div>
      );
};

export default Register;