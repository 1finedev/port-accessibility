import React from 'react';
import DummyLoader from '../loaders/Loader';
import styles from './DogCard.module.css';

interface DogCardProps {
  id: number; // Add id prop
  name: string;
  age: number;
  height: string;
  color: string;
  favoritePortFeature: string;
  favoriteMeal: string;
}

const DogCardCategory = ({
  label,
  value
}: {
  label: string;
  value: string | number;
}) => (
  <p className={styles.dog_card__category}>
    <span
      className={styles.dog_card__category_label}
      aria-label={`${label}:`}
      role="text"
    >
      {label}:
    </span>
    <span
      className={styles.dog_card__category_value}
      aria-label={`${value}`}
      role="text"
    >
      {value}
    </span>
  </p>
);

const DogCard: React.FC<DogCardProps> = ({
  id,
  name,
  age,
  height,
  color,
  favoritePortFeature,
  favoriteMeal
}) => {
  const showAlert = () => {
    alert(`Dog's name is ${name}`);
  };

  const [showLoader, setShowLoader] = React.useState(true);

  return (
    <div className={styles.dog_card} key={id}>
      <div className={styles['dog_card__image-container']}>
        {showLoader && <DummyLoader />}
        <img
          src={`https://placedog.net/400/400/random?id=${id}`}
          className={styles.dog_card__image}
          onLoad={() => setShowLoader(false)}
          alt={`${color} dog named ${name}`}
        />
      </div>

      <h2 className={styles.dog_card__title}>{name}</h2>

      <div
        aria-label={`Details about ${name}`}
        className={styles.dog_card__categories}
      >
        <DogCardCategory label="I.D" value={id} />
        <DogCardCategory label="Age" value={age} />
        <DogCardCategory label="Height" value={height} />
        <DogCardCategory label="Color" value={color} />
        <DogCardCategory label="Favorite Feature" value={favoritePortFeature} />
        <DogCardCategory label="Favorite Meal" value={favoriteMeal} />
      </div>
      <button className={styles.dog_card__button} onClick={showAlert}>
        Alert {name}'s name
      </button>
    </div>
  );
};

export default DogCard;
