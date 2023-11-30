import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from './MenuItem'

export default function SubMenuItem({ subMenu, isToggled }) {
    return (
        <ul className={`subMenu ${isToggled ? 'show' : ''}`}>
            {subMenu.map((subItem) => {
                return (
                    <MenuItem item={subItem} key={subItem.id} />
                )
            })}
        </ul>
    )
}
