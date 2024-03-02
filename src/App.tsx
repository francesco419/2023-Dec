import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import FallOutCanvas from './page/fallout/fallOutDodge';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<FallOutCanvas />}
        />
      </Routes>
    </BrowserRouter>
  );
}
