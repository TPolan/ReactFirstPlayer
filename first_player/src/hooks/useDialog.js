import {useState} from 'react';

const useDialog = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const showSpinner = () => {
        if (dialogOpen) {
            setLoading(!loading);
        }
        setTimeout(() => {
            setLoading(!loading);
        }, 1500);
    }
    const handleDialog = () => {
        showSpinner();
        setDialogOpen(!dialogOpen);
    }

    return ({
        handleDialog,
        isOpen: dialogOpen,
        isLoading:loading
    })
}

export default useDialog;