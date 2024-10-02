import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Animation() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      once: false,    // Whether animation should happen only once - while scrolling down
      mirror: true    // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Scroll down to see animations!</h1>

      <div data-aos="fade-in" style={{ height: '500px', backgroundColor: '#e0e0e0' }}>
        <p>Section 1 - fade-in effect</p>
      </div>

      <div data-aos="fade-left" style={{ height: '500px', backgroundColor: '#c0c0c0' }}>
        <p>Section 2 - fade-left effect</p>
      </div>

      <div data-aos="fade-right" style={{ height: '500px', backgroundColor: '#a0a0a0' }}>
        <p>Section 3 - fade-right effect</p>
      </div>

      <div data-aos="zoom-in" style={{ height: '500px', backgroundColor: '#808080' }}>
        <p>Section 4 - zoom-in effect</p>
      </div>

      <div data-aos="flip-left" style={{ height: '500px', backgroundColor: '#606060' }}>
        <p>Section 5 - flip-left effect</p>
      </div>
    </div>
  );
}
