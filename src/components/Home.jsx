import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const Home = () => {
      const authInfo = useContext(AuthContext)
      console.log(authInfo);
      return (
            <div>
                  <h2 className='text-5xl text-center font-bold my-5'>this is Home section</h2>
            </div>
      );
};

export default Home;