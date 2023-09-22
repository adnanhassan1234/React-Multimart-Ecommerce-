import React from 'react';
import './button.scss';
import { motion } from 'framer-motion';

const Button = ({title ,submit, width}) => {
    return (
        <>
            <motion.button whileTap={{scale: 1.3}} type={submit} className='btn btn-primary' style={{width:width}}>{title}</motion.button>
        </>
    );
};

export default Button;