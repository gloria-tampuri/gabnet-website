import React from 'react';
import classes from './Category.module.css';
import ExploreCategory from '../../ExploreCategory';

export default function Category() {
  return (
    <section className={classes.Category}>
      <h1 className={classes.Title}>Explore our Category</h1>
      <ExploreCategory />
    </section>
  );
}
