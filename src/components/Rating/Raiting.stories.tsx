import React from 'react';

import Rating from "./Rating";

export default {
    title: 'Rating',
    component: Rating
}

export const Empty = () => <Rating value={0}/>
export const HighRating = () => <Rating value={5}/>

