import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import FirstViewPage from './page/front/firstViewPage';
import StartPage from './page/front/startPage';
import './App.scss';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/header/headerContainer';

export default function App() {
  const location = useLocation();
  return (
    <>
        <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<FirstViewPage />}
          />
          <Route path={`/riri`} element={<StartPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
//css transition에 사용할 css 애니메이션을 class로 넣어준다

// animated router
// 1. react transition group *라우터 이외의 사용 유용 *컴포넌트간의 사용자 상호작용으로 인한 애니메이션 구현 유용
// 2. framer motion (initial, animate, exit) *직관적 *쉬움 #transition : {duration: 0.1}
