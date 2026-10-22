import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { FamilyPage } from './pages/FamilyPage';
import { VariantPage } from './pages/VariantPage';
import { DishesPage } from './pages/DishesPage';
import { CountriesPage } from './pages/CountriesPage';
import { CountryPage } from './pages/CountryPage';
import { CookbookPage } from './pages/CookbookPage';
import { AboutPage } from './pages/AboutPage';
import { NotFound } from './pages/NotFound';
import { CreditsPage } from './pages/CreditsPage';

// Hash routing keeps the built site working on any static host without rewrites.
export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dishes" element={<DishesPage />} />
          <Route path="dish/:familyId" element={<FamilyPage />} />
          <Route path="dish/:familyId/:variantId" element={<VariantPage />} />
          <Route path="countries" element={<CountriesPage />} />
          <Route path="country/:code" element={<CountryPage />} />
          <Route path="cookbook" element={<CookbookPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="credits" element={<CreditsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
