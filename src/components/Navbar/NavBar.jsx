import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const navigationData = [
  {
    "id": 1,
    "name": "Home",
    "url": "/"
  },
  {
    "id": 2,
    "name": "About",
    "url": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "url": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "url": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "url": "/contact"
  }
]


const NavBar = () => {

    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-5'>

            <div className='flex gap-2' onClick={() => setOpen(!open)}>
                {
                open ? 
                <X className='md:hidden'></X> : 
                <Menu className='md:hidden'></Menu>
                }

                <ul className='md:hidden'>
                    {
                        links
                    }
                </ul>
            
            <h3>My NavBar</h3>
            </div>

            <ul className='md:flex hidden'>
                {
                   links 
                }
            </ul>
            
            {/* <ul className='flex gap-5'> 
                {
                    navigationData.map(route => <li>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}
            {/* <ul className='flex gap-[20px]'>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}

            <button className='btn btn-primary'>Sign in</button>
        </nav>
    );
};

export default NavBar;