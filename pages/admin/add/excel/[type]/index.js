import React, { useState } from 'react'
import { useGlobalContext } from '../../../../../context';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { useRouter } from 'next/router';
import styles from '../../../../../styles/Add.module.css';

const index = () => {
    const { adminSideBarOpen } = useGlobalContext()
    const [progress, setProgress] = useState(0)
    const router = useRouter()
    const { type } = router.query

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
            <Paper style={{ padding: '50px' }} spacing={5}>
                <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>

                    <Grid item xs={12}>
                        <Typography variant="h6">
                            {`Suba el Excel que contine: "${type}"`}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="contained-button-file">
                            <input accept="image/*" id="contained-button-file" multiple type="file" style={{ display: "none" }} />
                            <Button variant="contained" component="span" startIcon={<UploadFileIcon />}>
                                Upload
                            </Button>
                        </label>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
                            <Grid item xs={10}>
                                <LinearProgress variant="determinate" value={progress} color={progress == 100 ? "success" : "secondary"} />
                            </Grid>

                            {progress == 100 ? (<Grid item xs={2}>
                                <CloudDoneIcon color="success" />
                            </Grid>) : (<Grid item xs={2}>
                                <CircularProgress />
                            </Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

index.layout = 'admin'

export default index
