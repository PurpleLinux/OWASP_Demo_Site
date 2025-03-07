import React from 'react';
import './Home.css';
import StartButton from './components/StartButton';

function Home() {
  return (
    <div className="Home">
      <div className="content-Column">
        <h2 className="Title-subtext-left">Education and demonstration of the</h2>
        <h1 className="Page-title">OWASP TOP TEN</h1>
        <h2 className="Title-subtext-right">by Bo Jane Brown</h2>
        <div>
          <StartButton />
        </div>
        <h2 className="about-header">About the site:</h2>
        <p className ="about-body">This page is designed for cyber security professionals, HR professionals, and recruiters to showcase Jane Brown’s understanding of web application programming and security. The site will walk you through each of the OWASP TOP TEN, providing an explanation of what each vulnerability is and a simulated demonstration of the vulnerability in action.</p>
        <h2 className='about-header'>About the author:</h2>
        <p className='about-body'>Jane Brown, aka “PurpleLinux,” is a cyber security professional certified by OffSec OSCP+, OffSec OSWP, CompTIA CNVP, CompTIA PenTest+, CompTIA Security+, and CompTIA Network+. She strives to gain in-depth and end-to-end knowledge of both offensive and defensive security, and would like to eventually apply these to become a CISO.</p>
      </div>
    </div>
  );
}

export default Home;
