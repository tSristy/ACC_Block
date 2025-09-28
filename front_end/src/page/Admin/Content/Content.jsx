import { Alert, Autocomplete, Avatar, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, InputLabel, Modal, Snackbar, Stack, styled, TextField, Typography } from '@mui/material';
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
    const [loading, setLoading] = useState(false);
    const [displayMsg, setDisplayMsg] = useState({
        open: false,
        msg: null
    });

    const handleFileChange = (e) => {
        setLoading(true);
        const file = e.target.files[0];
        if (file) {
            setFile(file);

            const imageUrl = URL.createObjectURL(file);
            const img = new Image();
            img.src = imageUrl;

            img.onload = () => {
                setPreviews(imageUrl);
                setLoading(false);
            };
        } else {
            setLoading(false);
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
                // console.log(res)
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


    const [openDialog, setOpenDialog] = useState(false);
    const [delId, setDelId] = useState(null);
    const handlePermission = (id) => {
        setOpenDialog(true);
        setDelId(id);
    }

    const handleDelete = () => {
        setOpenDialog(false);
        const bodyData = ({
            id: delId,
            table: `project_blogs_article`
        })
        ServerApi(`/img/delete`, 'PUT', user.access_token, bodyData)
            .then(res => {
                if (res.ok) {
                    setOpenAlert(true);
                    setMsgText({ status: true, msg: "Your action has been successfully executed" });
                    setFile();
                    setDelId();
                }
                else {
                    setOpenAlert(true);
                    setMsgText({ status: false, msg: "Something is wrong. Please try again again" })
                }
            })
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState();


    const [mediaList, setMediaList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [reviewList, setReviewList] = useState([]);
    const [viewOpener, setViewOpener] = useState({
        project: true,
        news: false,
        review: false
    })

    useEffect(() => {
        ServerApi(`/img/content-list`, 'GET', user.access_token)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                if (res) {
                    setMediaList(res.mediaList);
                    setProjectList(res.projectList);
                    setReviewList(res.reviewList);
                } else return null;
            })
    }, [user, file])

    return (
        <>
            {/* notification */}
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

            {/* modal  */}
            {modalOpen && modalInfo !== null && (
                <Modal
                    open={modalOpen}
                    onClose={(e) => { setModalOpen(false); setModalInfo(null) }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '70vw',
                        height: '70vh',
                        bgcolor: '#ffffff',
                        boxShadow: 24,
                        p: 4,
                        overflow: 'auto'
                    }}>
                        <Typography id="modal-modal-title" variant="h4" component="h2" color='success'>
                            {modalInfo.title}
                        </Typography>
                        {
                            modalInfo.redirect_url && <>
                                <Typography variant='overline'>Redirect </Typography>
                                <Typography variant='overline' component="a" target="_blank" href={modalInfo.redirect_url}>{modalInfo.redirect_url}</Typography>
                            </>
                        }
                        <Box sx={{
                            p: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}>
                            <img src={modalInfo.image_url} alt={modalInfo.image_url} width="350px" height="350px" style={{ objectFit: 'cover' }} />
                            <Box sx={{ flex: '1 1 300px' }}>
                                <Typography id="modal-modal-description" variant='h6' sx={{ mb: 2 }}>
                                    {modalInfo.initial_text}
                                </Typography>
                                <Typography sx={{ mb: 2 }}>{modalInfo.detail_text}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            )}

            {/* permission  */}
            <Dialog
                open={openDialog}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You can not undo your action after the action is done. So re-think again.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => { setOpenDialog(false); setDelId(null) }}>Disagree</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>


            <Grid container spacing={2}>
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
                                fullWidth label="Content Title" name="title" value={dataInfo.title}
                                variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Name' />

                            <TextField sx={{ pb: 2 }} color='success' size='small' value={dataInfo.initial_text}
                                fullWidth label="Highlights" multiline rows={3} name="initial_text"
                                variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Highlight of the content' />

                            <TextField sx={{ pb: 2 }} color='success' name="detail_text" value={dataInfo.detail_text}
                                multiline fullWidth label="Description" size='small'
                                rows={6}
                                variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Describe your thoughts' />

                            <TextField sx={{ pb: 2 }} color='success' size='small' name="redirect_url"
                                fullWidth label="Re-direct URL" value={dataInfo.redirect_url}
                                variant="outlined" onChange={(e) => handleValueChange(e)} placeholder='Provide official urls like news' />

                            <Stack sx={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {loading && (<CircularProgress />)}
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


                <Grid size={{ xs: 12, md: 7 }} sx={{ bgcolor: '#f3f3f3ff', borderRadius: '8px' }}>
                    <Stack
                        direction="row" sx={{ p: 2, borderRadius: '8px', cursor: "pointer" }}
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}>
                        <Typography variant='overline' onClick={(e) => {
                            setViewOpener((prev) => ({
                                news: false, project: true, review: false
                            }))
                        }}>Projects</Typography>
                        <Typography variant='overline' onClick={(e) => {
                            setViewOpener((prev) => ({
                                news: true, project: false, review: false
                            }))
                        }}>News & Articles</Typography>
                        <Typography variant='overline' onClick={(e) => {
                            setViewOpener((prev) => ({
                                news: false, project: false, review: true
                            }))
                        }}>Reviews</Typography>
                    </Stack>
                    {viewOpener.project && projectList?.length > 0 && projectList.map((item, index) => (
                         <Box sx={{
                            m: 2, p: 2, bgcolor: 'white',
                            // border: 'dashed 2px #187b3d'
                        }} key={index}>
                            <Grid container>
                                <Grid size={{ xs: 5 }}>
                                    <img width='100%' height='150px' style={{ borderRadius: '8px', objectFit: 'cover' }}
                                        src={item.image_url}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </Grid>
                                <Grid size={{ xs: 7 }} sx={{ p: 2 }}>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Avatar sx={{ bgcolor: '#187b3d', width: 24, height: 24, fontSize: '13px' }}>A</Avatar>
                                        <Typography sx={{ fontSize: '12px', color: 'gray', ml: 1, mr: 'auto' }}>Admin</Typography>
                                        <Typography sx={{ fontSize: '12px', color: 'gray' }}>{item.created_at.split('T')[0]}</Typography>
                                    </Stack>
                                    <Typography variant='h6'>{item.title}</Typography>
                                    <Typography variant="subtitle2">{item.initial_text}</Typography>
                                    {/* <Typography sx={{ height: '140px', overflow: 'hidden' }}>{item.detail_text}</Typography> */}
                                    <Button onClick={(e) => { setModalInfo(item); setModalOpen(true) }}>... Read more</Button>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '12px', color: '#187b3d', fontWeight: 500 }}>News & Articles</Typography>
                                        <IconButton onClick={(e) => handlePermission(item.id)}>
                                            <DeleteIcon fontSize='small' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>)
                    )}

                    {viewOpener.review && reviewList?.length > 0 && reviewList.map((item, index) => (
                        <Box sx={{
                            m: 2, p: 2, bgcolor: 'white',
                            // border: 'dashed 2px #187b3d'
                        }} key={index}>
                            <Grid container>
                                <Grid size={{ xs: 5 }}>
                                    <img width='100%' height='150px' style={{ borderRadius: '8px', objectFit: 'cover' }}
                                        src={item.image_url}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </Grid>
                                <Grid size={{ xs: 7 }} sx={{ p: 2 }}>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Avatar sx={{ bgcolor: '#187b3d', width: 24, height: 24, fontSize: '13px' }}>A</Avatar>
                                        <Typography sx={{ fontSize: '12px', color: 'gray', ml: 1, mr: 'auto' }}>Admin</Typography>
                                        <Typography sx={{ fontSize: '12px', color: 'gray' }}>{item.created_at.split('T')[0]}</Typography>
                                    </Stack>
                                    <Typography variant='h6'>{item.title}</Typography>
                                    <Typography variant="subtitle2">{item.initial_text}</Typography>
                                    {/* <Typography sx={{ height: '140px', overflow: 'hidden' }}>{item.detail_text}</Typography> */}
                                    <Button onClick={(e) => { setModalInfo(item); setModalOpen(true) }}>... Read more</Button>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '12px', color: '#187b3d', fontWeight: 500 }}>News & Articles</Typography>
                                        <IconButton onClick={(e) => handlePermission(item.id)}>
                                            <DeleteIcon fontSize='small' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>)
                    )}

                    {viewOpener.news && mediaList?.length > 0 && mediaList.map((item, index) => (
                        <Box sx={{
                            m: 2, p: 2, bgcolor: 'white',
                            // border: 'dashed 2px #187b3d'
                        }} key={index}>
                            <Grid container>
                                <Grid size={{ xs: 5 }}>
                                    <img width='100%' height='150px' style={{ borderRadius: '8px', objectFit: 'cover' }}
                                        src={item.image_url}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </Grid>
                                <Grid size={{ xs: 7 }} sx={{ p: 2 }}>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Avatar sx={{ bgcolor: '#187b3d', width: 24, height: 24, fontSize: '13px' }}>A</Avatar>
                                        <Typography sx={{ fontSize: '12px', color: 'gray', ml: 1, mr: 'auto' }}>Admin</Typography>
                                        <Typography sx={{ fontSize: '12px', color: 'gray' }}>{item.created_at.split('T')[0]}</Typography>
                                    </Stack>
                                    <Typography variant='h6'>{item.title}</Typography>
                                    <Typography variant="subtitle2">{item.initial_text}</Typography>
                                    {/* <Typography sx={{ height: '140px', overflow: 'hidden' }}>{item.detail_text}</Typography> */}
                                    <Button onClick={(e) => { setModalInfo(item); setModalOpen(true) }}>... Read more</Button>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '12px', color: '#187b3d', fontWeight: 500 }}>News & Articles</Typography>
                                        <IconButton onClick={(e) => handlePermission(item.id)}>
                                            <DeleteIcon fontSize='small' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>)
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default Content;