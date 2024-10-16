import React, { useState } from 'react';
import DummyLoader from '../../shared/loaders/Loader';
import styles from './DogCard.module.css'; // Import the CSS for styling

const Manage = () => {
  const [dogData, setDogData] = useState({
    name: '',
    age: '',
    height: '',
    color: '',
    favoriteToy: '',
    favoriteMeal: ''
  });

  const [showLoader, setShowLoader] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('New Dog Added:', dogData);
    setDogData({
      name: '',
      age: '',
      height: '',
      color: '',
      favoriteToy: '',
      favoriteMeal: ''
    });
  };

  return (
    <main id="main-content" className={styles.manage_container}>
      <h1>Add a New Dog</h1>

      <form
        aria-label="Fill the form to add your dog details to our records."
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.form_group}>
          <label className={styles.form_group__label} htmlFor="name">
            Dog Name:{' '}
          </label>
          <input
            id="name"
            className={styles.form_group__input}
            type="text"
            name="name"
            value={dogData.name}
            onChange={handleChange}
            required
            placeholder="Charlie"
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_group__label} htmlFor="age">
            Dog Age:
          </label>

          <input
            className={styles.form_group__input}
            type="number"
            name="age"
            id="age"
            value={dogData.age}
            onChange={handleChange}
            required
            placeholder="3"
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_group__label} htmlFor="height">
            Height (centimeters):
          </label>

          <input
            className={styles.form_group__input}
            type="number"
            name="height"
            id="height"
            value={dogData.height}
            onChange={handleChange}
            required
            placeholder="24"
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_group__label} htmlFor="color">
            Color:
          </label>

          <input
            className={styles.form_group__input}
            type="color"
            id="color"
            name="color"
            value={dogData.color}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_group__label} htmlFor="favoriteToy">
            Favorite Toy:
          </label>
          <input
            className={styles.form_group__input}
            type="text"
            id="favoriteToy"
            name="favoriteToy"
            value={dogData.favoriteToy}
            onChange={handleChange}
            required
            placeholder="Ball"
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_group__label} htmlFor="favoriteMeal">
            Favorite Meal:
          </label>
          <input
            className={styles.form_group__input}
            type="text"
            id="favoriteMeal"
            name="favoriteMeal"
            value={dogData.favoriteMeal}
            onChange={handleChange}
            required
            placeholder="Chicken Nuggets"
          />
        </div>
        <button
          type="submit"
          className={styles.submit_button}
          onClick={() =>
            alert(`Dog name: ${dogData.name} was added successfully!`)
          }
        >
          Add Dog
        </button>
      </form>
      <div className={styles['form__image-container']}>
        {showLoader && <DummyLoader />}
        <img
          onLoad={() => setShowLoader(false)}
          className={styles.form__image}
          src={`https://placedog.net/1000/300/random?id=128`}
          alt="Group of three black dogs and one white dog peeking over a fence"
        />
      </div>
    </main>
  );
};

export default Manage;
