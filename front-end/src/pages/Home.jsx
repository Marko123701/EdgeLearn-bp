import React, { useEffect } from 'react';
import useAuthContext from '../context/AuthContext';
import logo from '../images/EdgeLearn.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, getUser } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl px-8 py-12 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-8">
          <img src={logo} alt="EdgeLearn Logo" className="w-[50%] h-[20%]" />
        </div>
        <p className="text-lg text-gray-700">
          Vitajte v aplikácii EdgeLearn, vášho poskytovateľa e-learningového prostredia pre Edge Computing a Cloud Computing. Môžete si tu prehliadať rôzne články týkajúce sa tém Edge Computingu a Cloud Computingu. Okrem toho máte možnosť napísať vlastný článok, precházať a absolvovať lekcie, ktoré vám pomôžu rozšíriť vaše vedomosti o týchto témach, a tiež absolvovať kvízy, ktoré vám umožnia overiť si váše novo naučené vedomosti. Okrem obsahu ponúka aplikácia EdgeLearn aj relevantné odkazy, ktoré vás povedú k ďalším zdrojom informácií o Edge Computingu a Cloud Computingu.
        </p>
        <div className="mt-12">
          {user ? ( // Render the links only if user is logged in
            <>
              <a
                onClick={() => navigate('/blogs')}
                className="block w-full mt-4 px-4 py-3 text-white bg-yellow-500 rounded hover:bg-yellow-600 cursor-pointer"
              >
                Prehľadávať články
              </a>
              <a
                onClick={() => navigate('/links')}
                className="block w-full mt-4 px-4 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-600 cursor-pointer"
              >
                Prehľadávať odkazy
              </a>
              <a
                onClick={() => navigate('/lectures')}
                className="block w-full mt-4 px-4 py-3 text-white bg-red-500 rounded hover:bg-red-600 cursor-pointer"
              >
                Prehľadávať Lekcie
              </a>
              <a
                onClick={() => navigate('/profile')}
                className="block w-full mt-4 px-4 py-3 text-white bg-purple-500 rounded hover:bg-purple-600 cursor-pointer"
              >
                Profil
              </a>
            </>
          ) : (
            <>
              <a
                onClick={() => navigate('/login')}
                className="block w-full px-4 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer"
              >
                Prihlásiť sa
              </a>
              <a
                onClick={() => navigate('/register')}
                className="block w-full mt-4 px-4 py-3 text-white bg-green-500 rounded hover:bg-green-600 cursor-pointer"
              >
                Zaregistovať sa
              </a>
              <a
                onClick={() => navigate('/blogs')}
                className="block w-full mt-4 px-4 py-3 text-white bg-yellow-500 rounded hover:bg-yellow-600 cursor-pointer"
              >
                Prehľadávať články
              </a>
              <a
                onClick={() => navigate('/links')}
                className="block w-full mt-4 px-4 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-600 cursor-pointer"
              >
                Prehľadávať odkazy
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;