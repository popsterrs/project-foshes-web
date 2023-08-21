'use client'
import 'src/app/styles/header.css';

export default function Header() {
    return (
        <header className='header-bounds'>
            <div className='header-wrapper'>
                <h6 className='header-title'>Foshes Universe</h6>

                <div className='header-navbar'>
                    <button>Items</button>
                    <button>Players</button>
                    <button>Trading</button>
                </div>

                <button className='header-sign-in'>
                    Sign Into Roblox
                </button>
            </div>
        </header>
    );
}