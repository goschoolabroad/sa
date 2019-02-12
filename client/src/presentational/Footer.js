import React from 'react';

export const Footer = () => {
  return (
    <footer className="p-4 text-center text-white bg-dark">
      <p>&copy; {new Date().getFullYear()} SchoolAbroad</p>
      <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-0">
        <li key={1} className="pr-2"><a title="Go to our Facebook Page" href="https://www.facebook.com/theproactivedev/"><i className="fa fa-facebook-square" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
        <li key={2} className="pr-2"><a title="Visit our LinkedIn Profile" href="https://ph.linkedin.com/in/eirin-gonzales-5951aa9b"><i className="fa fa-linkedin" aria-hidden="true"></i><span className="sr-only">LinkedIn</span></a></li>
        <li key={3} className="pr-2"><a title="Visit our Twitter Profile" href="https://twitter.com/theproactivedev"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
      </ul>


      <div className="credits">
        <p>All images used in this website are not ours. All credits go to the owners of the school logos. And the images used as background are all from <a title="Visit website" href="https://unsplash.com/">Unsplash</a>. And content listed here are all just examples as development is ongoing.</p>
      </div>
    </footer>
  )
};