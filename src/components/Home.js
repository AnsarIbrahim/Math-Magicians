import React from 'react';
import '../styles/home.css';

const Home = () => (
  <div className="home-contain">
    <div className="head">
      <h1>Welcome to our page!</h1>
    </div>
    <div className="para">
      <p>
        Math-Magicians is a web application that combines a calculator
        functionality with daily inspirational quotes. The project aims to
        provide users with a convenient tool for performing mathematical
        calculations while also offering motivational quotes to uplift their
        spirits. The application consists of three main pages: Home, Calculator,
        and Quote. The Home page serves as the landing page and provides an
        overview of the Math-Magicians project. It may contain a brief
        description of the application&apos;s purpose, features, and benefits.
        This page sets the tone for the user&apos;s experience and introduces
        them to the concept of combining mathematics and inspiration. The
        Calculator page offers a fully functional calculator interface where
        users can perform various mathematical operations. The calculator
        supports basic arithmetic operations such as addition, subtraction,
        multiplication, and division. It may also include additional features
        like percentage calculations and a memory function.
      </p>
      <p>
        The Quote page displays a daily inspirational quote to motivate and
        inspire users. The quotes are fetched from an external API and can cover
        a wide range of topics, including success, happiness, and personal
        growth. The page may also include additional information about the
        quote&apos;s author or category. The navigation bar, present on all
        pages, allows users to easily switch between the Home, Calculator, and
        Quote pages. It provides clear links to each section of the application,
        ensuring seamless navigation. The Math-Magicians project aims to create
        a user-friendly and engaging experience by combining the practicality of
        a calculator with the positive impact of inspirational quotes. It caters
        to individuals who appreciate both the analytical aspects of mathematics
        and the emotional boost provided by motivational content.
      </p>
    </div>
  </div>
);

export default Home;
