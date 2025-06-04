import React from 'react';
import classes from "../../src/components/css/Home.module.css";
import Line from "../components/main/Line.jsx";
import BackButton from '../components/main/BackButton.jsx';

const Aboutus = () => {
  return (
    <div className={classes.links}>
      <BackButton />
      <Line
        to="/world/oneofoneluxury"
        className={classes.navLink}
        style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '1rem' }}
      >
        <p>
        we are a model agency, currently focused on female models. many of our models are also influencers/content creators. we hope our agency can support these models to become the best version of themselves.
        </p>
        <p style={{ margin: 0 }}>
          we are a company of the{" "}
          <a
            href="https://www.wonwonleywon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "underline" }}
          >
            wonwonleywon
          </a>
          {" "}fashion brand.
        </p>
      </Line>
    </div>
  );
};

export default Aboutus;
