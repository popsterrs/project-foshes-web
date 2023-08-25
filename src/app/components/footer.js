'use client'
import 'src/app/styles/footer.css'

export default function Footer() {
    return (
        <footer className='footer-bounds'>
            <div className='footer-wrapper'>
                <p>Copyright © 2023 popsters</p>
                <p>Coded in <a href='https://code.visualstudio.com/' target='_blank'>Visual Studio Code</a>, built with <a href='https://nextjs.org/' target='_blank'>Next.js</a> and deployed with <a href='https://vercel.com/' target='_blank'>Vercel</a>.</p>
            </div>
        </footer>
    );
}