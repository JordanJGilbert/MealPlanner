import React from 'react';

interface MealCardProps {
  title: string;
  description: string;
  image: string;
}

const MealCard: React.FC<MealCardProps> = ({ title, description, image }) => {
  return (
    <div className="meal-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MealCard;