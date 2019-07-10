import React from 'react';

import { Menu } from "semantic-ui-react";

import { Link } from "./../routes.js";

export default () => {
    return (
        <Menu style={{ marginTop : '10px' }}>
            <Link route="/">
                <a className="item">
                     crowd coin
                </a>
            </Link>
            <Menu.Item>
                  check
            </Menu.Item>
            <Menu.Menu position="right">
                <Link route="/">
                   <a className="item">
                       campaign
                   </a>
                </Link>
                
            </Menu.Menu>
        </Menu>
    )
}