import * as React from 'react';
import { CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

interface LoaderProps {
}

const useStyles = makeStyles({
	root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        right: '0px',
        bottom: '0px',
        top: '0px',
        left: '0px',
        textAlign: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    container:{
        height: '100%',
        outline: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    }
});

const LoadingIndicator: React.FC<LoaderProps> = (): JSX.Element => {
    // const buttonclasses = ButtonStyle();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <CircularProgress size={150}/>
            </div>
        </div>
    )
}

LoadingIndicator.defaultProps = {}

export default LoadingIndicator;