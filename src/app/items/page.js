'use client'
import 'src/app/styles/items.css'
import Image from 'src/app/components/item-image.js';
import { GetItems } from 'src/app/scripts/data.js';
import React, { useState, useEffect } from 'react';

function ItemCard(props) {
    const itemPageUrl = 'items/' + props.id

    return (
        <a href={itemPageUrl}>
            <div className='items-grid-card'>
                <Image {...props} />

                <div className='items-grid-card-info'>
                    <h1>{props.name}</h1>
                    <p>{(props.description != "") ? props.description : 'No Description Found'}</p>
                </div>
            </div>
        </a>
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
        <div className='items-grid'>
            {items.map(item => (
                <ItemCard key={item.id}{...item}></ItemCard>
            ))}
        </div>
    )
}

export default function Items() {
    return (
        <div className='items-bounds'>
            <div className='items-wrapper'>
                <ItemsGrid></ItemsGrid>
            </div>
        </div>
    )
}