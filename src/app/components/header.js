import 'src/app/styles/header.css';
import { PrimaryButton, SecondaryButton } from 'src/app/components/ui/buttons.js'

export default function Header() {
    return (
        <header className='header-bounds'>
            <div className='header-wrapper'>
                <a href='/'>
                    <h6 className='header-title'>Foshes Universe</h6>
                </a>

                <div className='header-navbar'>
                    <a href='/items'>Items</a>
                    <a href='/players'>Players</a>
                    <a href='/trading'>Trading</a>
                    <a href='/blogs'>Blogs</a>
                </div>

                <PrimaryButton content={<span>Sign Into Roblox</span>} className='header-sign-in'/>
            </div>
        </header>
    );
}