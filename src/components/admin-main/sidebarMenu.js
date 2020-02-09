import React from 'react';

export const sidebarMenuTop = (props) => {
    return (
        props.sidebar.id.map(sidebarId => (
            sidebarId < 5 &&
                <div key={sidebarId} className="col-md-12 sidebarMenu">
                    <img className="sidebarMenu-Icon" src={props.sidebar.image[sidebarId]} />
                    <a href={props.sidebar.link[sidebarId]} className="sidebarMenu-Link"> {props.sidebar.name[sidebarId]} </a>
                </div>
        ))
    );
}

export const sidebarMenuBottom = (props) => {
    return (
        props.sidebar.id.map(sidebarId => (
            sidebarId > 4 &&
                <div key={sidebarId} className="col-md-12 sidebarMenu">
                    <img className="sidebarMenu-Icon" src={props.sidebar.image[sidebarId]} />
                    <a href={props.sidebar.link[sidebarId]} className="sidebarMenu-Link"> {props.sidebar.name[sidebarId]} </a>
                </div>
        ))
    );
}