import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css'; // Import the CSS for styling

const About: React.FC = () => {
  const handleClick = () => {
    alert('Thanks! Your feedback is important to us.');
  };

  return (
    <main id="main-content" className={styles.about__container}>
      <h1 className={styles.about__title}>About This Website</h1>
      <p className={styles['about__text-color']}>
        This website is an accessibility exercise designed to demonstrate the
        importance of accessibility in web development. It showcases various
        features that can be implemented to enhance user experience for
        individuals with disabilities.
      </p>
      <section className="">
        <h2 className={styles.about__subheading}>Helpful Resources</h2>
        <dl>
          <dt className={styles['desc-list-term']}>
            <Link
              className={styles.about__link}
              to="https://webaim.org/resources/contrastchecker/"
              target="_blank"
            >
              WebAIM Contrast Checker
            </Link>
          </dt>
          <dd className={styles['desc-list-definition']}>
            Check color contrasts to ensure they meet the AA grade (should be at
            least 4.5).
          </dd>
          <dt className={styles['desc-list-term']}>
            <Link
              className={styles.about__link}
              to="https://htmlcolorcodes.com/"
              target="_blank"
            >
              HTML Color Codes
            </Link>
          </dt>
          <dd className={styles['desc-list-definition']}>
            A tool to help you pick hex colors.
          </dd>
          <dt className={styles['desc-list-term']}>
            <Link
              className={styles.about__link}
              to="https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"
              target="_blank"
            >
              Landmark Navigation Extension
            </Link>
          </dt>
          <dd className={styles['desc-list-definition']}>
            Chrome extension to navigate through landmarks.
          </dd>
        </dl>
      </section>

      <div className={styles['about__button-container']}>
        <button className={styles.about__button} onClick={handleClick}>
          Was this page helpful? Click here to let us know!
        </button>
      </div>
    </main>
  );
};

export default About;
