import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DrinkPage.css';
import { trackPromise } from 'react-promise-tracker';

const Drink = () => {
  const [drinks, setDrinks] = useState({});

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    trackPromise(
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.drinks[0]);
        setDrinks(response.data.drinks[0]);
      }));
  }, []);

  return (
    <Container>
      <div class="randombox">
        <h2 class="drinkname">{drinks.strDrink}</h2>
        <img
          class="randomdrink"
          alt={drinks.strDrink}
          style={{
            float: 'left',
            width: 300,
            marginBottom: 20,
            marginRight: 20
          }}
          src={drinks.strDrinkThumb}
        />

        <div class="recipe">
          <h4>Recipe:</h4>
          <p>{drinks.strInstructions}</p>
          <p>
            {drinks.strMeasure1} {drinks.strIngredient1}
          </p>
          <p>
            {drinks.strMeasure2} {drinks.strIngredient2}
          </p>
          <p>
            {drinks.strMeasure3} {drinks.strIngredient3}
          </p>
          <p>
            {drinks.strMeasure4} {drinks.strIngredient4}
          </p>
          <p>
            {drinks.strMeasure5} {drinks.strIngredient5}
          </p>
          <p>
            {drinks.strMeasure6} {drinks.strIngredient6}
          </p>
          <p>
            {drinks.strMeasure7} {drinks.strIngredient7}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Drink;
