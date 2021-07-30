import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log("DemoOutput is running");

    return (
        <MyParagraph>{props.showText ? 'This is new!' : '\u00A0'}</MyParagraph>
    );
};

export default React.memo(DemoOutput);