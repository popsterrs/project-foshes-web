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

function GetImageURLs(imageIds) {
    const ids=imageIds.join(',')

    console.log('called')

    // return fetch(`http://thumbnails.roblox.com/v1/assets?assetIds=${ids}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`, { mode: 'no-cors'})
    //     .then(result => {
    //         result = result.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    fetch(`http://thumbnails.roblox.com/v1/assets?assetIds=${ids}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`, { mode: 'no-cors' })
    .then(result => {
        return result.json(); // Add a return statement here
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}

function Image(props) {
    if (props.hasOwnProperty('icon')) {
        return (
            <div>

            </div>
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
    const imageIDs = [];
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedItems = await GetItems();
            setItems(fetchedItems);

            for (const item of fetchedItems) {
                imageIDs.push(item.icon)
            };

            const fetchedImageUrls = await GetImageURLs(imageIDs);
            setImageUrls(fetchedImageUrls);

            console.log(JSON.stringify(fetchedImageUrls));
            console.log(imageUrls);
            console.log(JSON.stringify(imageUrls));
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