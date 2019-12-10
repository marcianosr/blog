import React from "react";
import styles from "./categories.module.scss";

const categoriesList: string[] = [
  "Front-end",
  "JavaScript",
  "CSS",
  "Powerlifting",
];

const Categories = () => (
  <nav className={styles.categoriesListContainer}>
    <ul className={styles.categoriesList}>
      {categoriesList.map(category => (
        <li className={styles.categoriesListItem}>{category}</li>
      ))}
    </ul>
  </nav>
);

export default Categories;
