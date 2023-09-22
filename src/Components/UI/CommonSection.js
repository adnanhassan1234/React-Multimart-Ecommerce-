import React from 'react';

const CommonSection = ({title}) => {
    return (
        <>
            <div className="common_section">
                <div className="container">
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    );
};

export default CommonSection;