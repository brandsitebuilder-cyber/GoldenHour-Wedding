/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Invitation from './components/Invitation';
import Schedule from './components/Schedule';
import DetailsRSVP from './components/DetailsRSVP';
import Registry from './components/Registry';
import Accommodation from './components/Accommodation';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent/30 overflow-x-hidden">
        <Navbar />
        <MusicPlayer />
        <main>
          <Hero />
          <OurStory />
          <Invitation />
          <Schedule />
          <DetailsRSVP />
          <Registry />
          <Accommodation />
          <FAQ />
          <Gallery />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
