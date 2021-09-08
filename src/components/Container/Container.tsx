import React from 'react';
import ClassNames from 'classnames/bind';

//styles
import styles from './Container.module.css';

const Container = (props: any) => {
    const { children, column } = props;
    let cx = ClassNames.bind({ ...styles });

    let containerStyles = cx({
        default: true,
        column: column,
    });

    return <div className={containerStyles}>{children}</div>;
};

export default Container;
