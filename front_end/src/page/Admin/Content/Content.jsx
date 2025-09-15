import { Alert, Autocomplete, Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, ImageList, ImageListItem, InputLabel, Modal, Stack, styled, TextField, Typography } from '@mui/material';
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
        page_name: 'Blogs & Articles',
        content_type: "",
        title: "",
        initial_text: "",
        detail_text: "",
        redirect_url: "",
        position: 1
    })


    const [file, setFile] = useState([]);
    const [previews, setPreviews] = useState([]);
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


    const handleUpload = async () => {
        if (file.length === 0)
            return setDisplayMsg({
                open: true,
                msg: `Select one image please`
            });

        const formData = new FormData();
        file.forEach((file, index) => {
            formData.append('page_name', dataInfo.page_name);
            formData.append('content_name', dataInfo.content_type);
            formData.append('position', 1);
            formData.append('images', file);
            formData.append('title', dataInfo.title);
            formData.append('initial_text', dataInfo.initial_text);
            formData.append('detail_text', dataInfo.detail_text);
            formData.append('redirect_url', dataInfo.redirect_url);
        });


        ServerApi(`/img/content-upload`, 'POST', user.access_token, formData, true)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                    <h6>Create New Slider</h6>


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
                            renderInput={(params) => <TextField color='success' {...params} placeholder='search content type' />}
                        />



                        <TextField multiline color='success' sx={{ pb: 2 }} fullWidth size="small" onChange={(e) => {

                        }} placeholder='Describe your thoughts' />

                        {previews && (
                            <img
                                src={previews}
                                alt={`preview`}
                                width="200"
                                height="200"
                                style={{ border: '1px solid #ccc', borderRadius: '4px', objectFit: "cover" }}
                            />
                        )}
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
                    <h6>Media</h6>

                </Box>
            </Grid>
        </Grid>
    );
};

export default Content;