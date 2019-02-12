import React from 'react';
// import GetEmailForm from '../containers/GetEmailForm';

export const Home = () => {
  return (
    <main className="home">
    <section className="text-center introduction">
      <div className="overlay text-white">
        <div className="container">
          <h1>Do you want to study abroad?</h1>
          <p>But it's hard and tiring to send applications with different requirements to different universities?</p>
          <p>That's why we're here to make it easier for you!</p>
          <div className="text-center">
            <a className="btn btn-link mr-3" title="Learn more about SchoolAbroad" href="#h-howitworks">Learn More</a>
            <a className="btn btn-link" title="Learn more about SchoolAbroad" href="#h-howitworks">Sign Up</a>
          </div>
          {/* <GetEmailForm /> */}
        </div>
      </div>
    </section>
    <section className="container py-5" id="why-abroad">
      <h2 id="h-whyabroad" className="text-center text-sm-left">Why Study Abroad</h2>
      <p>These are the key points why you should consider studying abroad.</p>
      <ul className="list-unstyled">
        <li className="mb-3"><span className="rounded-circle px-2 py-1 font-weight-bold">01</span>It provides you with a new way of learning your program that you may not have seen in your own country.</li>
        <li className="mb-3"><span className="rounded-circle px-2 py-1 font-weight-bold">02</span>You see a brand new part of the world where it teaches you to adapt to the environment, to the people and to their culture.</li>
        <li className="mb-3"><span className="rounded-circle px-2 py-1 font-weight-bold">03</span>You also get to encounter a lot of good people with their own perspectives that you'll learn from them and have a good time.</li>
        <li className="mb-3"><span className="rounded-circle px-2 py-1 font-weight-bold">04</span>You also get to learn a new language and practice speaking it while you're living abroad.</li>
        <li className="mb-3"><span className="rounded-circle px-2 py-1 font-weight-bold">05</span>Studying abroad gives you a lot of edge on your career opportunities. Being able to study abroad, live with new people, learn a different culture and their language and adapt to the new environment signals that you work well with new people and that you adapt well with change. These things make you desirable back to your country in a good way both socially and professionally.</li>
      </ul>
    </section>
    <section className="text-center py-5 bg-dark" id="how-it-works">
      <div className="container text-white w-100">
        <h2 id="h-howitworks" className="pb-3">How it Works</h2>
      <iframe id="video" title="How School Abroad Works" frameBorder="0" src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1545571548&f=0DHvSYTK3SjgHvn3aBk70A&d=0&m=b&r=360p&volume=100&start_res=undefined&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=" allowFullScreen></iframe>
      </div>
    </section>
    <section className="container text-center py-5" id="pricing">
      <h2 id="h-pricing" className="pb-3"><span>Sign Up Now</span> <span className="d-block">and Upgrade Later</span></h2>
      <div className="pricing">
        <div className="package mx-2">
          <div className="text-center p-3">
            <p className="name">Bronze</p>
            <p className="price">249 USD</p>
            <button className="btn btn-default text-uppercase bg-white">Sign Up</button>
          </div>
          <ul className="list-unstyled text-left p-3">
            <li><i className="icon icon-check"></i>Accessible School Information</li>
            <li><i className="icon icon-check"></i>Match School Listing</li>
            <li><i className="icon icon-check"></i>3 University Applications</li>
            <li><i className="icon icon-check"></i>Application Fees</li>
          </ul>
        </div>
        <div className="package mx-2">
          <div className="text-center p-3">
            <p className="name">Silver</p>
            <p className="price">749 USD</p>
            <button className="btn btn-default text-uppercase bg-white">Sign Up</button>
          </div>
          <ul className="list-unstyled text-left p-3">
            <li><i className="icon icon-check"></i>Accessible School Information</li>
            <li><i className="icon icon-check"></i>Match School Listing</li>
            <li><i className="icon icon-check"></i>5 University Applications</li>
            <li><i className="icon icon-check"></i>Application Fees</li>
            <li><i className="icon icon-check"></i>One on One Consultation</li>
            <li><i className="icon icon-check"></i>Essay Assistance</li>
          </ul>
        </div>
        <div className="package mx-2"><div className="text-center p-3">
            <p className="name">Gold</p>
            <p className="price">1999 USD</p>
            <button className="btn btn-default text-uppercase bg-white">Sign Up</button>
          </div><ul className="list-unstyled text-left p-3">
            <li><i className="icon icon-check"></i>Accessible School Information</li>
            <li><i className="icon icon-check"></i>Match School Listing</li>
            <li><i className="icon icon-check"></i>10 University Applications</li>
            <li><i className="icon icon-check"></i>Application Fees</li>
            <li><i className="icon icon-check"></i>One on One Consultation</li>
            <li><i className="icon icon-check"></i>Essay Assistance</li>
            <li><i className="icon icon-check"></i>Visa Application</li>
            <li><i className="icon icon-check"></i>Visa Interview Practice</li>
            <li><i className="icon icon-check"></i>Scholarship or Financial Aid Search</li>
            <li><i className="icon icon-check"></i>Flight &amp; Accommodation Booking</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  );
}