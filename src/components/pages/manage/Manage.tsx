import React, { useState } from 'react';
import DummyLoader from '../../shared/loaders/Loader';
import styles from './Manage.module.css'; // Import the CSS for styling

interface IDogData {
  [key: string]: string | number;
  name: string;
  age: number;
  height: number;
  color: string;
  favoriteToy: string;
  favoriteMeal: string;
}

const Manage = () => {
  const [dogData, setDogData] = useState<IDogData>({
    name: '',
    age: 0,
    height: 0,
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

    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = {} as IDogData;

    const castToNumber = ['age', 'height'];

    formData.forEach((value, key) => {
      // ensures numeric values are cast to number
      if (castToNumber.includes(key)) {
        formValues[key] = Number(value);
        return;
      } else {
        formValues[key] = value as string;
      }
    });

    // basic validation
    const requiredFields = [
      'name',
      'age',
      'height',
      'color',
      'favoriteToy',
      'favoriteMeal'
    ];

    for (const field of requiredFields) {
      if (!formValues[field]) {
        alert('Please fill in all the fields.');
        return;
      }
    }

    setDogData(formValues);

    alert(`Dog name: ${dogData.name} was added successfully!`);
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
            aria-required="true"
            aria-label="Dog's Name"
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
            aria-required="true"
            aria-label="Dog's Age"
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
            aria-required="true"
            aria-label="Dog's Height"
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
            aria-required="true"
            aria-label="Dog's Color"
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
            aria-label="Dog's Favorite Toy"
            aria-required="true"
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
            aria-label="Dog's Favorite Meal"
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className={styles.submit_button}
          aria-label="Add Dog"
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
          alt=""
        />
      </div>
    </main>
  );
};

export default Manage;
