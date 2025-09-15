import { Alert, Autocomplete, Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogTitle, Grid, IconButton, ImageList, ImageListItem, InputLabel, Modal, Stack, styled, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
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
        title: "Slide",
        pageCode: "",
        position: "",
    })


    const [file, setFile] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const [newArr, setNewArr] = useState([])
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length === imgNum || selectedFiles.length < 6) {
            setFile(selectedFiles);
            setNewArr(selectedFiles);
            const previewPromises = selectedFiles.map(file => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(file);
                });
            });
            Promise.all(previewPromises).then(setPreviews);
        } else setDisplayMsg({
            open: true,
            msg: `Please select only ${imgNum} images`
        })
    };

   const handlePosition = (e, index) => {
  const positionNum = parseInt(e.target.value); // Convert from 1-based

   const tempArr = file.slice(0,file.length);
        const tempVar = tempArr.slice(index, 1)[0];

        tempArr.splice(positionNum, 0, tempVar);
        
  setNewArr(tempArr); // update state
};


    const handleUpload = async () => {
        if (file.length === 0)
            return setDisplayMsg({
                open: true,
                msg: `Select one image please`
            });

        const formData = new FormData();
        file.forEach((file, index) => {
            formData.append('title', imgData.title);
            formData.append('pageCode', imgData.pageCode);
            formData.append('position', index + 1)
            formData.append('images', file);
        });


        ServerApi(`/img/upload`, 'POST', user.access_token, formData, true)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }


    const [imgLists, setImgLists] = useState([{
        id: 1, img: ''
    }])


    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                {
                    displayMsg.open ?
                        <Alert severity="warning">
                            {displayMsg.msg}
                        </Alert> : null
                }
                <Button onClick={handleFileChange}>d</Button>
                <Box>
                    <h6>Create New Slider</h6>

                    <Container sx={{ p: 2 }}>
                        <InputLabel htmlFor="component-simple" sx={{ pb: 1, fontSize: "14px", fontWeight: "400" }}>Page Name</InputLabel>


                        <Autocomplete sx={{ pb: 2 }} size='small'
                            disablePortal
                            options={pageLists}
                            getOptionLabel={(option) => option.label || null}
                            onChange={(e, value) => {
                                setImgData(previousState => {
                                    return { ...previousState, pageCode: value?.code }
                                })
                            }}
                            renderInput={(params) => <TextField color='success' {...params} placeholder='search page' />}
                        />

                        <Autocomplete sx={{ pb: 2 }} size='small'
                            disablePortal
                            options={imgTypes}
                            getOptionLabel={(option) => option.label || null}
                            onChange={(e, value) => {
                                setImgData(previousState => {
                                    return { ...previousState, title: value?.label }
                                })
                            }}
                            renderInput={(params) => <TextField color='success' {...params} label="Image Type" />}
                        />

                        <InputLabel htmlFor="component-simple" sx={{ pb: 1, fontSize: "14px", fontWeight: "400" }}>Image Number</InputLabel>


                        <TextField disabled={imgData.title === 'Slide' ? false : true} color='success' sx={{ pb: 2 }} fullWidth size="small" value={imgNum} onChange={(e) => {
                            if (e.target.value < 6) {
                                setImgNum(e.target.value)
                            } else setDisplayMsg({
                                open: true,
                                msg: `Please change the number of images within 6`
                            })
                        }} placeholder='Max number is 5' />

                        {previews.length > 0 && (
                            <div style={{
                                height: "150px", display: 'flex', flexWrap: 'wrap', gap: '10px', overflow: "auto",
                                opacity: '.8', padding: '5px', border: '2px dashed #e2e1e1ff'
                            }}>
                                {previews.map((src, index) => (
                                    <img onClick={(e) => setModalOpen(true)}
                                        key={index}
                                        src={src}
                                        alt={`preview-${index}`}
                                        width={imgData.title === "Banner" ? "100%" : "150"}
                                        height="150"
                                        style={{ border: '1px solid #ccc', borderRadius: '4px', objectFit: "cover" }}
                                    />
                                ))}

                                {modalOpen && (
                                    <Modal open={modalOpen} onClose={(e)=>setModalOpen(false)} >
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
                                        {
                                            newArr.map((photo, index) => (
                                                <Card sx={{ display: 'flex' }} key={index}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                                            <Typography component="div" sx={{ fontSize: '18px' }}>
                                                                Change Image Position
                                                            </Typography>
                                                            <TextField id="standard-basic" type="number"
                                                                slotProps={{ htmlInput: { min: 1, max: file.length } }} value={index} variant="standard" onChange={(e) => handlePosition(e, index)} />
                                                        </CardContent>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                            <IconButton aria-label="delete">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                    <CardMedia
                                                        component="img"
                                                        sx={{ height:151,width: 151, 
                                                            objectFit: 'cover', p: 2 }}
                                                        image={previews[index]}
                                                    />
                                                </Card>
                                            ))
                                        }
                                        </Box>
                                    </Modal>
                                )}
                            </div>
                        )}
                        <Stack>
                            <Button color='success' variant="outlined"
                                component="label"
                                role={undefined}
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Choose Images
                                <VisuallyHiddenInput
                                    type="file"
                                    multiple accept="image/*" onChange={handleFileChange}
                                />
                            </Button>

                        </Stack>
                    </Container>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {imgLists.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid>
    );
};

export default ImgSettings;