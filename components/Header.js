import React from 'react';

import { Menu } from "semantic-ui-react";

export default () => {
    return (
        <Menu style={{ marginTop : '10px' }}>
            <Menu.Item>
                  check
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    campaigns
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}