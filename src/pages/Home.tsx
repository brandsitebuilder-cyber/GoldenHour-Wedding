import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Gallery from '../components/Gallery';
import Schedule from '../components/Schedule';
import VenueDetails from '../components/VenueDetails';
import RSVP from '../components/RSVP';

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Gallery />
      <Schedule />
      <VenueDetails />
      <RSVP />
    </>
  );
}
