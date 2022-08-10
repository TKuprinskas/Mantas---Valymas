import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';
import { PaslaugosMenu, PrekesMenu } from './MenuItems';

export const Paslaugos = ({ onClick, ...props }) => {
    return (
        <Dropdown {...props}>
            {PaslaugosMenu.map((item, index) => {
                return (
                    <Dropdown.Item key={index} onClick={onClick}>
                        <Link to={item.url} className={item.cName}>
                            {item.title}
                        </Link>
                    </Dropdown.Item>
                );
            })}
        </Dropdown>
    );
};

export const Prekes = ({ ...props }) => (
    <Dropdown {...props}>
        {PrekesMenu.map((item, index) => {
            return (
                <Dropdown.Item key={index}>
                    <Link to={item.url} className={item.cName}>
                        {item.title}
                    </Link>
                </Dropdown.Item>
            );
        })}
    </Dropdown>
);
