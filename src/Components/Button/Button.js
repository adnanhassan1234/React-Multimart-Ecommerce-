import React from 'react';
import './button.scss';
import { motion } from 'framer-motion';

const Button = ({title ,submit}) => {
    return (
        <>
            <motion.button whileTap={{scale: 1.3}} type={submit} className='btn btn-primary'>{title}</motion.button>
        </>
    );
};

export default Button;