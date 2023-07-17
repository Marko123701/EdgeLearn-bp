import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthContext from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, errors } = useAuthContext();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    await register({ name, email, password, password_confirmation });
    setLoading(false);
  };

  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
            >
              <div className="mb-10 text-center md:mb-16">Zaregistrujte sa</div>
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                  {errors.email && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">{errors.email[0]}</span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Meno"
                    className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                  {errors.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">{errors.name[0]}</span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Heslo"
                    className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                  {errors.password && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">{errors.password[0]}</span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Potvrdenie hesla"
                    className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                    disabled={loading}
                  >
                    {loading ? 'Registering...' : 'Registrovať sa'}
                  </button>
                </div>
              </form>
              <Link
                to="/forgot-password"
                className="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary hover:underline
              "
              >
                Zabudnuté heslo?
              </Link>
              <p className="text-base text-[#adadad]">
                Ste zaregistrovaný?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Prihláste sa
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;