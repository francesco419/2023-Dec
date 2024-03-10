import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import FirstViewPage from './page/front/firstViewPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<FirstViewPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
