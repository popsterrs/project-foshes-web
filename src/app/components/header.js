'use client'
import 'src/app/styles/header.css';
import { PrimaryButton, SecondaryButton } from 'src/app/components/ui/buttons.js'
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
    function BurgerMenuClick() {
        const blur = document.getElementById('blur');
        const navbar = document.getElementById('navbar');

        if (window.matchMedia('(max-width: 700px)')) {
            if (navbar.style.display === 'none') {
                blur.style.filter = 'blur(24px)';
                navbar.style.display = 'block';
            } else {
                blur.style.filter = 'blur(0px)';
                navbar.style.display = 'none'
            }
        }

    }

    return (
        <header className='header-bounds'>
            <div className='header-wrapper'>
                <a href='/'>
                    <h6 className='header-title'>Foshes Universe</h6>
                </a>

                <div id='navbar' className='header-navbar'>
                    <a href='/items'>Items</a>
                    <a href='/players'>Players</a>
                    <a href='/trading'>Trading</a>
                    <a href='/blogs'>Blogs</a>
                </div>

                <PrimaryButton content={<span>Sign Into Roblox</span>} className='header-sign-in' />
                <SecondaryButton content={<RxHamburgerMenu/>} className='header-burger-button' onClick={BurgerMenuClick}/>
            </div>
        </header>
    );
}