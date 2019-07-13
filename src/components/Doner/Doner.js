import React from 'react';
import styles from './Doner.module.css';
import DonerIngredient from './DonerIngredient/DonerIngredient';

const Doner = (props) => {
    return (
        <div className={styles.Doner}>
            <DonerIngredient type="bread-top" />
            <DonerIngredient type="cheese" />
            <DonerIngredient type="meat" />
            <DonerIngredient type="bread-bottom" />
        </div>
    );
};

export default Doner;