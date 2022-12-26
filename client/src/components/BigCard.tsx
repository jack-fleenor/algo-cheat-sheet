import React from 'react';
// import example from './example.svg'
import './BigCard.css';

const BigCard = (props: { title: string | null, description: string | null }) => {
  const { title, description } = props;
  return (
    <div className="bigCardContainer">
    </div>
  )
}

export default BigCard