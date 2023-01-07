import { Navbar } from '../components';
import { About, Contact, Hero, Drawing, Explore } from '../sections';

const Page = () => (

  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Explore />
    <Drawing />
  </div>
);

export default Page;
