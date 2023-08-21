'use client'
import 'src/app/styles/items.css'
import React, { useState, useEffect } from 'react';


function GetItems() {
    return fetch('https://api.projectfoshes.com/items')
      .then(response => response.json())
      .then(data => data.items)
      .catch(error => {
        console.error('Error fetching data:', error);
        return [];
      });
  }

function ItemCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

function ItemsGrid() { 
    const [items, setItems] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const fetchedItems = await GetItems();
        setItems(fetchedItems);
      }
      fetchData();
    }, []);

    return (
        <div>
        {items.map(item => (
            <ItemCard {...item}></ItemCard>
        ))}
      </div>
    )
}

export default function Items() {
    return (
        <div className='items-bounds'>
            <ItemsGrid></ItemsGrid>
        </div>  
    )
}