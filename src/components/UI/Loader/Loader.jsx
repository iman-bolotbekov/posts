import React from 'react';
import {RiLoader4Fill} from 'react-icons/ri'
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <RiLoader4Fill className={cl.loader}/>
        </div>
    );
};

export default Loader;