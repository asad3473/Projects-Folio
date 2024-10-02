import React, { lazy, Suspense } from 'react';
import '../src/Portfoliosite/Portfolio.css';
import Loader from './Portfoliosite/Loader';
// Lazy loading the components
const Navbar = lazy(() => import('./Portfoliosite/Navbar'));
const Follow = lazy(() => import('./Portfoliosite/Follow'));
const Image = lazy(() => import('./Portfoliosite/Image'));
const Aboutme = lazy(() => import('./Portfoliosite/Aboutme'));
const Services = lazy(() => import('./Portfoliosite/Services'));
const Skills = lazy(() => import('./Portfoliosite/Skills'));
const Projects = lazy(() => import('./Portfoliosite/Projects'));
const Contactus = lazy(() => import('./Portfoliosite/Contactus'));

function App() {
  return (
    <div>
      {/* Suspense with fallback */}
      <Suspense fallback={<Loader/>}>
        <Navbar />
        <div className='img'>
          <Follow />
          <Image />
          <Aboutme />
          <Services />
          <Skills />
          <Projects />
          <Contactus />
          <hr className=' bg-yellow-200' />
          <div className='text-center text-[#a9adb8] text-xs md:text-xl py-2'>
            <span>© 2024. Designed by Asad Ullah. All right reserved. </span>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
