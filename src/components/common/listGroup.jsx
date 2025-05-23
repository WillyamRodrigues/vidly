import React, { Component } from 'react';

const ListGroup = props => {
    const {items, textProperty ="name", valueProperty="_id", onItemSelect,selectedItem } = props;

    return (
        <ul className="list-group">
            {items.map(item =>  (
                <li  onClick={() => onItemSelect(item) } key={item[valueProperty]} className={item === selectedItem? "list-group-item active":"list-group-item"}>
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};


 
export default ListGroup;