import DummyComponent from "./home-page/dummy/dummy-component";
import HeroPageComponent from "./home-page/hero-page/hero-page-component";
import LearnersTodayComponent from "./home-page/learners-today/learners-today";
import OurpromisesComponent from "./home-page/our-promise/our-promise-component";
import WeatherAppComponent from "./home-page/weather-app/weather-app-component";
import "./index.css";
function App() {
  return (
    <div>
      {/* <HeroPageComponent /> */}
      {/* <LearnersTodayComponent /> */}
      {/* <DummyComponent /> */}
      <OurpromisesComponent />
      {/* <WeatherAppComponent /> */}
    </div>
  );
}

export default App;
