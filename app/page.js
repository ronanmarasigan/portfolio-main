import { Navbar } from '../components';
import { About, Contact, Hero, Explore } from '../sections';

const Page = () => (

  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Explore />
  </div>
);

export default Page;
