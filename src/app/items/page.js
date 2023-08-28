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

function GetImageURL(imageID) {
    return fetch(`https://thumbnails.roblox.com/v1/assets?assetIds=${imageID}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`)
        .then(result => {
            console.log(result);
            result = result.json();
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
}

function Image(props) {
    if (props.hasOwnProperty('icon')) {
        // const imageURL = GetImageURL(props.icon).data[0].imageUrl


        return (
            <div>
                {/* <pre>{GetImageURL(props.icon)}</pre> */}
            </div>
            // <img src={GetImageURL(props.icon).imageUrl}></img>
        )
    } else {
        return (
            <span>No Image Fount</span>
        )
    }
}

function ItemCard(props) {
    return (
        <div className='items-grid-card'>
            <Image {...props} />

            <div className='items-grid-card-info'>
                <h1>{props.name}</h1>
                <p>{(props.description != "") ? props.description : 'No Description Fount'}</p>
            </div>
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
        <div className='items-grid'>
            {items.map(item => (
                <ItemCard key={item.id}{...item}></ItemCard>
            ))}
            {items.map(item => (
                <ItemCard key={item.id}{...item}></ItemCard>
            ))}
            {items.map(item => (
                <ItemCard key={item.id}{...item}></ItemCard>
            ))}
            {items.map(item => (
                <ItemCard key={item.id}{...item}></ItemCard>
            ))}
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