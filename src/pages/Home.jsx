import Hero from '../components/Hero.jsx';
import Divider from '../components/Divider.jsx';
import { Directory, Tools } from '../components/QuickLinks.jsx';
import { Mission, TaxAlert } from '../components/Sections.jsx';

export default function Home({ intro }) {
  return (
    <>
      <Hero intro={intro} />
      <Tools />
      <Directory />
      <TaxAlert />
      <Divider />
      <Mission />
    </>
  );
}
