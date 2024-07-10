import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Meal Planner</h1>
        <MealCard
          title="Spaghetti Bolognese"
          description="A classic Italian pasta dish."
          image="https://via.placeholder.com/150"
        />
        <MealCard
          title="Chicken Curry"
          description="A spicy and savory chicken dish."
          image="https://via.placeholder.com/150"
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;