import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import FirstViewPage from './page/front/firstViewPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={5000}>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<FirstViewPage />}
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
//css transition에 사용할 css 애니메이션을 class로 넣어준다
