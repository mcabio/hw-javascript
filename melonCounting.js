
'use strict';
// melons_to_add
const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba'];


// Function creates an empty list where the for loop adds the melon types and how many there are
// of its kind. melonList is the parameter where the melonsToAdd list will be passed through.

function countMelons(melonList) { 
    const melonCounts = {};

    for (const melon of melonList) // for loop iterates over every melon in the melonsToAdd array.
        if (melonCounts[melon]) {  // If the melon has already been added to the melonCounts list and the loop
            melonCounts[melon] += 1; // encounters another melon of the same type, add 1 to that same melon type.
        } else {                     // If the loop is encountering a melon type for the first time,
            melonCounts[melon] = 1   // Create a new melon instance in that list.
        }
    return melonCounts; // Return all the melons types and how many were of that type.
}
    
console.log(countMelons(melonsToAdd)); // Calls function 

// Using Array.reduce instead of a function

// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//     if (mCounts[melon]) {
//       mCounts[melon] += 1;
//     } else {
//       mCounts[melon] = 1;
//     }
  
//     return mCounts;
//   }, {});
  
//   console.log(melonCounts);



// Using short-circuit evaluation to set count

// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//     mCounts[melon] = (mCounts[melon] || 0) + 1;
  
//     return mCounts;
//   }, {});
  
//   console.log(melonCounts);