import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
      id: 'm5',
      name: 'Paneer',
      description: 'Crispy...',
      price: 20.00,
    },
    {
      id: 'm6',
      name: 'Pizza',
      description: 'Loaded with crispy toppins..',
      price: 15.00,
    },
    {
      id: 'm7',
      name: 'Ice Cream',
      description: 'Strawberry flavour...',
      price: 18.99,
    },
    {
      id: 'm8',
      name: 'Manturian',
      description: 'Just Delicious',
      price: 25.00,
    },
    {
      id: 'm9',
      name: 'Chicken Tikka',
      description: 'Chicken...Spicy..',
      price: 40.45,
    },
    {
      id: 'm10',
      name: 'Fried Rice',
      description: 'Healthy...',
      price: 10.25,
    },
];

const AvailableMeals = () => {

    const mealList = (DUMMY_MEALS.map(meal => 
      <MealItem
        id = {meal.id}
        key = {meal.id}
        name = {meal.name}
        description = {meal.description}
        price = {meal.price}
      />
      ));

    return (
        <section className={classes.meals}>
          <Card>
            <ul>{mealList}</ul>
          </Card>
        </section>
    );
};

export default AvailableMeals;
