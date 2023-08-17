import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings, Banner, Newsletter } from "./Components";
import { bannerAPI, brands, footerAPI, hero, memory, navlinks, placesAPI, pricingapi } from "./Data/travigodata";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newsletter/>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
