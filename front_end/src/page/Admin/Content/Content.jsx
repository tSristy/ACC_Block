import { Alert, Autocomplete, Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, ImageList, ImageListItem, InputLabel, Modal, Snackbar, Stack, styled, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ServerApi } from '../../../Route/ServerApi';
import { AuthContext } from '../../../Route/AuthContext';
import DeleteIcon from '@mui/icons-material/Delete';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Content = () => {

    const { user } = useContext(AuthContext);

    const contentList = [
        { id: 1, label: 'Projects', code: '1010' },
        { id: 2, label: 'News & Articles', code: '1020' },
        { id: 3, label: 'Review', code: '1030' }
    ]

    const [dataInfo, setDataInfo] = useState({
        content_type: "",
        title: "",
        initial_text: "",
        detail_text: "",
        redirect_url: "",
        position: 1
    })


    const [file, setFile] = useState();
    const [previews, setPreviews] = useState();
    const [displayMsg, setDisplayMsg] = useState({
        open: false,
        msg: null
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setPreviews(URL.createObjectURL(file));
        }
    };

    const handleValueChange = (e) => {
        setDataInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const [openAlert, setOpenAlert] = useState(false);
    const [msgText, setMsgText] = useState({});
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };


    const handleUpload = async () => {
        if (file.length === 0)
            return setDisplayMsg({
                open: true,
                msg: `Select one image please`
            });

        const formData = new FormData();
        formData.append('content_type', dataInfo.content_type);
        formData.append('position', 1);
        formData.append('images', file);
        formData.append('title', dataInfo.title);
        formData.append('initial_text', dataInfo.initial_text);
        formData.append('detail_text', dataInfo.detail_text);
        formData.append('redirect_url', dataInfo.redirect_url);

        ServerApi(`/img/content-upload`, 'POST', user.access_token, formData, true)
            // .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.ok) {
                    setOpenAlert(true);
                    setMsgText({ status: true, msg: "Your action has been successfully executed" });
                    setDataInfo({
                        content_type: "",
                        title: "",
                        initial_text: "",
                        detail_text: "",
                        redirect_url: "",
                        position: 1
                    });
                    setFile();
                    setPreviews();
                }
                else {
                    setOpenAlert(true);
                    setMsgText({ status: false, msg: "Something is wrong. Please try again again" })
                }
            })
    }

    const [mediaList, setMediaList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        ServerApi(`/img/content-list`, 'GET', user.access_token)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res) {
                    setMediaList(res.mediaList);
                    setProjectList(res.projectList);
                    setReviewList(res.reviewList);
                } else return null;
            })
    }, [user, file])

    return (
        <Grid container spacing={2}>
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleAlertClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleAlertClose}
                    severity={msgText.status ? "success" : "error"}
                    variant="outlined"
                    sx={{ width: '100%' }}
                >{msgText.msg}</Alert>
            </Snackbar>

            <Grid size={{ xs: 12, md: 5 }}>
                <Box>
                    <h6>Create New Slider</h6>
                    {
                        displayMsg.open ?
                            <Alert severity="warning">
                                {displayMsg.msg}
                            </Alert> : null
                    }
                    <Container sx={{ p: 2 }}>
                        <InputLabel htmlFor="component-simple" sx={{ pb: 1, fontSize: "14px", fontWeight: "400" }}>Content Type</InputLabel>

                        <Autocomplete sx={{ pb: 2 }} size='small'
                            disablePortal
                            options={contentList}
                            getOptionLabel={(option) => option.label || null}
                            onChange={(e, value) => {
                                setDataInfo(previousState => {
                                    return { ...previousState, content_type: value?.label }
                                })
                            }}
                            renderInput={(params) => <TextField color='success' {...params} placeholder='Search content type' />}
                        />

                        <InputLabel htmlFor="component-simple" sx={{ pb: 1, fontSize: "14px", fontWeight: "400" }}>Content writing</InputLabel>

                        <TextField sx={{ pb: 2 }} color='success' size='small'
                            fullWidth label="Content Title" name="title"
                            variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Name' />

                        <TextField sx={{ pb: 2 }} color='success' size='small'
                            fullWidth label="Highlights" multiline rows={3} name="initial_text"
                            variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Highlight of the content' />

                        <TextField sx={{ pb: 2 }} color='success' name="detail_text"
                            multiline fullWidth label="Description" size='small'
                            rows={6}
                            variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Describe your thoughts' />

                        <TextField sx={{ pb: 2 }} color='success' size='small' name="redirect_url"
                            fullWidth label="Re-direct URL"
                            variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Provide official urls like news' />

                        <Stack sx={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {previews && (
                                <img
                                    src={previews}
                                    alt={`preview`}
                                    width="345px"
                                    height={dataInfo.content_type === "Projects" ? "200px" : "240px"}
                                    style={{ border: '1px solid #ccc', borderRadius: '4px', objectFit: "cover" }}
                                />
                            )}
                            <Button color='success' variant="outlined"
                                component="label"
                                role={undefined}
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                                sx={{ my: 2, width: '100%' }}
                            >
                                Choose Images
                                <VisuallyHiddenInput
                                    type="file"
                                    multiple accept="image/*" onChange={handleFileChange}
                                />
                            </Button>
                            <Button onClick={handleUpload} color='success' variant='contained'
                                sx={{ mb: 2, width: '100%' }}>Upload</Button>
                        </Stack>
                    </Container>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
                <Container sx={{ pb: 2 }}>
                    <h6>Blogs & Articles</h6>
                    <Box sx={{
                        p: 1,
                        display: 'flex',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        width: '100%',
                        height: '170px',
                        border: '2px dashed #bebebeff'
                    }}>
                        {mediaList?.length > 0 && mediaList.map((item,index)=>(
                            <Box sx={{ m: 2, bgcolor: 'white' }} key={index}>
                                <img width='150px' height='150px'
                                    src={item.image_url}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </Box>)
                        )}
                    </Box>
                </Container>


                <Container sx={{ pb: 2 }}>
                    <h6>Projects</h6>
                    <Box sx={{
                        p: 1,
                        display: 'flex',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        width: '100%',
                        height: '170px',
                        border: '2px dashed #bebebeff'
                    }}>
                        {projectList?.length > 0 && projectList.map((item,index)=>(
                            <Box sx={{ m: 2, bgcolor: 'white' }} key={index}>
                                <img width='150px' height='150px'
                                    src={item.image_url}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </Box>)
                        )}
                    </Box>
                </Container>

                <Container sx={{ pb: 2 }}>
                    <h6>Review</h6>
                    <Box sx={{
                        p: 1,
                        display: 'flex',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        width: '100%',
                        height: '170px',
                        border: '2px dashed #bebebeff'
                    }}>
                        {reviewList?.length > 0 && reviewList.map((item,index)=>(
                            <Box sx={{ m: 2, bgcolor: 'white' }} key={index}>
                                <img width='150px' height='150px'
                                    src={item.image_url}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </Box>)
                        )}
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Content;