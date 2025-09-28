import { Alert, Autocomplete, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, ImageList, ImageListItem, InputLabel, Modal, Snackbar, Stack, styled, TextField, Typography } from '@mui/material';
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


const ImgSettings = () => {
    const { user } = useContext(AuthContext);
    const imgTypes = [
        { id: 1, label: 'Banner' },
        { id: 2, label: 'Slide' },
    ]

    const pageLists = [
        { id: 1, label: 'Home', code: '0000' },
        { id: 2, label: 'About', code: '0001' },
        { id: 3, label: 'ACC Blocks', code: '0002' },
        { id: 4, label: 'ACC Panels', code: '0003' },
        { id: 5, label: 'Blogs & Articles', code: '0004' },
        { id: 6, label: 'Contact', code: '0005' },
    ]

    const [imgNum, setImgNum] = useState(1);
    const [displayMsg, setDisplayMsg] = useState({
        open: false,
        msg: null
    });
    const [imgData, setImgData] = useState({
        type: "Banner",
        pageName: "",
        position: "",
    })


    const [file, setFile] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState();

    // const [modalOpen, setModalOpen] = useState(false);

    const handleFileChange = (e) => {
        setLoading(true)
        const selectedFiles = Array.from(e.target.files);

        if (selectedFiles.length === imgNum ) {
            setFile(selectedFiles);

            const previewPromises = selectedFiles.map((file, index) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(file);
                });
            });
            Promise.all(previewPromises).then((previews) => {
                setPreviews(previews);
                // setPosition(selectedFiles.map((_, index) => index+1));
                setLoading(false);
            });
        } else {
            setLoading(false)
            setDisplayMsg({
            open: true,
            msg: `Please select only ${imgNum} images`
        })}
    };


    const [openAlert, setOpenAlert] = useState(false);
    const [msgText, setMsgText] = useState({});

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };


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
            table: `website_banners`
        })
        ServerApi(`/img/delete`, 'PUT', user.access_token, bodyData)
            .then(res => {
                if (res.ok) {
                    setOpenAlert(true);
                    setMsgText({ status: true, msg: "Your action has been successfully executed" });
                    setFile();
                    setDelId();
                    setModalOpen(false);
                    setModalInfo();
                }
                else {
                    setOpenAlert(true);
                    setMsgText({ status: false, msg: "Something is wrong. Please try again again" })
                }
            })
    }

    const handleUpload = async () => {
        if (file.length === 0)
            return setDisplayMsg({
                open: true,
                msg: `Select one image please`
            });

        const formData = new FormData();
        file.forEach((file, index) => {
            formData.append('type', imgData.type);
            formData.append('pageName', imgData.pageName);
            formData.append('position', index + 1)
            formData.append('images', file);
        });

        ServerApi(`/img/upload`, 'POST', user.access_token, formData, true)
            // .then(res => res.json())
            .then(res => {
                if (res.ok) {
                    setOpenAlert(true);
                    setMsgText({ status: true, msg: "Your action has been successfully executed" });
                    setImgData({
                        type: "Slide",
                        pageName: "",
                        position: "",
                    });
                    setFile([]);
                    setPreviews([]);
                }
                else {
                    setOpenAlert(true);
                    setMsgText({ status: false, msg: "Something is wrong. Please try again again" })
                }
            })
    }


    const [imgLists, setImgLists] = useState([{
        id: 1, img_url: '', img_name: ""
    }])

    useEffect(() => {
        ServerApi(`/img/banner-list`, 'GET', user.access_token)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setImgLists(res.data)
                } else return null;
            })
    }, [user, file])


    return (
        <Grid container spacing={2}>
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
                            {modalInfo.page_name} Page {modalInfo.type}
                        </Typography>
                        <Stack direction="row" sx={{
                            justifyContent: "space-between",
                            alignItems: 'center'
                        }}>

                            <Typography sx={{ fontSize: '12px', color: 'gray', mt: 2 }}>Image Uploaded {modalInfo.created_at.split('T')[0]} {modalInfo.type === "Banner" ? `& The banner has only 1 image` : `& The slider position number is ${modalInfo.position}`}</Typography>
                            <IconButton onClick={(e) => handlePermission(modalInfo.id)}>
                                <DeleteIcon fontSize='small' />
                            </IconButton>
                        </Stack>
                        <img src={modalInfo.img_url} alt={modalInfo.img_name} width="100%" height="500px" style={{ objectFit: 'cover' }} />

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

            <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                    <h6>Create New Slider</h6>
                    {
                        displayMsg.open ?
                            <Alert severity="warning">
                                {displayMsg.msg}
                            </Alert> : null
                    }

                    <Container sx={{ p: 2 }}>
                        <InputLabel htmlFor="component-simple" sx={{ pb: 1, fontSize: "14px", fontWeight: "400" }}>Page Name</InputLabel>


                        <Autocomplete sx={{ pb: 2 }} size='small'
                            disablePortal
                            defaultValue="Home"
                            options={pageLists}
                            getOptionLabel={(option) => option.label || 'Home'}
                            onChange={(e, value) => {
                                setImgData(previousState => {
                                    return { ...previousState, pageName: value?.label }
                                })
                            }}
                            renderInput={(params) => <TextField color='success' {...params} placeholder='search page' />}
                        />

                        <Autocomplete sx={{ pb: 2 }} size='small'
                            disablePortal
                            options={imgTypes}
                            defaultValue="Banner"
                            getOptionLabel={(option) => option.label || "Banner"}
                            onChange={(e, value) => {
                                setImgData(previousState => {
                                    return { ...previousState, type: value?.label }
                                })
                            }}
                            renderInput={(params) => <TextField color='success' {...params} label="Image Type" />}
                        />

                        <InputLabel htmlFor="component-simple" sx={{ pb: 1, fontSize: "14px", fontWeight: "400" }}>Image Number</InputLabel>


                        <TextField disabled={imgData.type === 'Slide' ? false : true} color='success' sx={{ pb: 2 }} fullWidth size="small" value={imgNum} onChange={(e) => {
                            if (e.target.value < 6) {
                                setImgNum(e.target.value)
                            } else setDisplayMsg({
                                open: true,
                                msg: `Please change the number of images within 6`
                            })
                        }} placeholder='Max number is 5' />

                        <div style={{
                            height: "150px", display: 'flex', flexWrap: 'wrap', gap: '10px', overflow: "auto",
                            opacity: '.8', padding: '5px', border: '2px dashed #e2e1e1ff'
                        }}>
                            {previews.length > 0 && previews.map((src, index) => (
                                <img
                                    // onClick={(e)=>{ setModalOpen(true);setNewArr(file); setNewPrev(previews)}}
                                    key={index}
                                    src={src}
                                    alt={`preview-${index}`}
                                    width={imgData.type === "Banner" ? "100%" : "150"}
                                    height="150"
                                    style={{ border: '1px solid #ccc', borderRadius: '4px', objectFit: "cover" }}
                                />
                            ))}

                            {loading && (<CircularProgress />)}

                            {/* {modalOpen && (
                                    <Modal open={modalOpen} onClose={(e) => setModalOpen(false)} >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                bgcolor: 'background.paper',
                                                p: 4,
                                                maxHeight: '80vh',
                                                overflowY: 'auto',
                                            }}
                                        >
                                        <Typography variant='h6' sx={{ p:2}}>Images Settings</Typography>
                                            {
                                                newArr.map((photo, index) => (
                                                    <Card sx={{ display: 'flex' }} key={index}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                                <Typography component="div" sx={{ fontSize: '18px' }}>
                                                                    Change Image Position
                                                                </Typography>
                                                                <TextField id="standard-basic" type="number"
                                                                    // slotProps={{ htmlInput: { min: 1, max: file.length } }} 
                                                                    value={position[index]} variant="standard"
                                                                    onChange={(e) => handlePosition(e, index)} 
                                                                    onClick={(e)=> setStorePositionVar(position[index])}/>
                                                            </CardContent>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                                <IconButton aria-label="delete">
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                        <CardMedia
                                                            component="img"
                                                            sx={{
                                                                height: 151, width: 151,
                                                                objectFit: 'cover', p: 2
                                                            }}
                                                            image={newPrev[index]}
                                                        />
                                                    </Card>
                                                ))
                                            }
                                        </Box>
                                    </Modal>
                                )} */}


                        </div>
                        <Stack>
                            <Button color='success' variant="outlined"
                                component="label"
                                role={undefined}
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                                sx={{ mb: 2 }}
                            >
                                Choose Images
                                <VisuallyHiddenInput
                                    type="file"
                                    multiple accept="image/*" onChange={handleFileChange}
                                />
                            </Button>
                            <Button onClick={handleUpload} color='success' variant='contained'
                                sx={{ mb: 2 }}>Upload</Button>
                        </Stack>
                    </Container>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                    <h6>Existing Images</h6>
                    <ImageList variant="quilted" cols={3} gap={8} sx={{ p: 1, border: '2px dashed #e2e1e1ff' }}>
                        {imgLists.length > 0 && imgLists.map((item) => (
                            <ImageListItem key={item.id}>
                                <img onClick={(e) => { setModalInfo(item); setModalOpen(true) }}
                                    srcSet={`${item.img_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img_url}?w=248&fit=crop&auto=format`}
                                    alt={item.img_name}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ImgSettings;