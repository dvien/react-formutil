import React from 'react';
import FormContext from '../context';

function useFormContext() {
    if (!React.useState) {
        throw new Error(`Hooks api need react@>=16.8, Please upgrade your reactjs.`);
    }

    const { useContext } = React;
    const getFormContext = useContext(FormContext);

    return getFormContext();
}

export default useFormContext;
