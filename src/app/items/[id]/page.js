'use client'
import 'src/app/styles/item-page.css'
import Image from 'src/app/components/item-image.js';
import { GetItemById } from 'src/app/scripts/data.js';
import { useState, useEffect } from 'react';

export default function ItemPage({params}) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        async function fetchItemData() {
            const fetchedItemData = await GetItemById(params.id);
            setItem(fetchedItemData);
        }
        fetchItemData();
    }, []);

    return (
        <div class='item-page-bound'>
            <div class='item-page-wrapper'>
                <div class='item-page-desktop'>
                    <div class='item-page-left'>
                        <Image {...item} />
                        <h1>{item.id}</h1>
                    </div>
                    <div class='item-page-right'>

                    </div>
                </div>
            </div>
        </div>
    )
  }