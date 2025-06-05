import BackButton from '../components/main/BackButton.jsx';
import Line from '../components/main/Line.jsx';
import classes from '../components/css/Home.module.css';


const Contactus = () => {
  return (
    <>
      <div className={classes.links}>
      <BackButton />
      <Line
        to="/world/oneofoneluxury"
        className={classes.navLink}
        style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '1rem' }}
      >
         <p>
          to become one of our models, work with us, hire our models, or for any other questions, email us at  <a href="mailto:support@wonwonleywonmodels.com" style={{ color: "black", textDecoration: "underline" }}>support@wonwonleywonmodels.com</a>.
        </p>
      </Line>
    </div>
    </>
  );
};

export default Contactus;
