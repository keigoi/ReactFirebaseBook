import React, { FC, useContext } from 'react';
import { Route, Routes } from 'react-router';

import Book from 'components/Book';
import Home from 'components/Home';
import NavigationBar from 'components/common/menubar/NavigationBar';
import Search from 'components/Search';
import Signin from 'components/Signin';
import Spacer from 'components/common/atoms/Spacer';
import { UserContext } from './contexts';
import paths from './paths';
import './App.css';

const App: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavigationBar />
      <Spacer />
      <Routes>
        <Route path={paths.book} element={<Book/>} />
        <Route path={paths.home} element={<Home/>} />
        <Route path={paths.search} element={<Search/>} />
        {!user && <Route path={paths.signin} element={<Signin/>} />}
        {/* <Redirect to={paths.home} /> */}
      </Routes>
    </div>
  );
};

export default App;
