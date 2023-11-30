import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SubMenuItem from './SubMenuItem'

export default function MenuItem({ item }) {
    const [toggle, setToggle] = useState(false);
    return (
        <li className='menuItem'>
            {item.children ?
                (<>
                    <button aria-haspopup='menu' aria-expanded={toggle ? "true" : "false"} onClick={() => setToggle(prev => !prev)} className='space-x-1'>
                        <span>{item.name}</span>
                        <span><i class="fa-solid fa-chevron-right"></i></span>
                    </button>
                    <SubMenuItem subMenu={item.children} isToggled={toggle} />
                </>)
                : (<NavLink to={item.url_path}>{item.name}</NavLink>)}
        </li>
    )
}
