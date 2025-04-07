import { Route, Routes } from "react-router-dom";
import UserPageComponent from "./home-page/user-page-details/user-page-component";
import HeroPageComponent from "./home-page/hero-page/hero-page-component";
import DummyComponent from "./home-page/dummy/dummy-component";
function App() {
  return (
    <Routes>
      {/* <HeroPageComponent /> */}
      {/* <LearnersTodayComponent /> */}
      {/* <DummyComponent /> */}
      {/* <OurpromisesComponent /> */}
      {/* <WeatherAppComponent /> */}
      {/* <UseStateComponent /> */}
      {/* <Route /> */}
      {/* <Route path="/user" element={<UserPageComponent />} />
      <Route path="/hero-page" element={<HeroPageComponent />} />
      <Route path="/" element={<DummyComponent />} /> */}
      <Route path="/quiz">
        <Route index element={<DummyComponent />} />

        <Route path="user" element={<UserPageComponent />} />
        <Route path="hero-page" element={<HeroPageComponent />} />
      </Route>
      <Route path="/:id" element={<DummyComponent />} />
    </Routes>
  );
}

export default App;
