import React from 'react'
import '../css/Menu.css';
import { dataMenu } from '../../../assets/data/dataMenu'
import MenuItem from './MenuItem';

export default function Menu() {
    return (
        <nav className='sideMenu'>
            <div className="headerMenu space-x-2">
                <span><i class="fa-solid fa-bars"></i></span>
                <span>Danh mục</span>
            </div>
            <ul className='menuContent'>
                {dataMenu.map((item) => {
                    return <MenuItem item={item} key={item.id} />
                })}
            </ul>
        </nav>
    )
}
