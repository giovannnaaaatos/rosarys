import React from 'react'
import Logo from '../../assets/img/Logo.png';
import './Menu.css'

function ButtonLink(props) {
    // props => { className: "quertc", href: ""}
    //console.log(props);
    return (
        <a href="props.href" className={props.className}>
            miau?        
        </a> 
        );
    }
    
    export default ButtonLink;