// ProtectedRoute.js
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = ({ children }) => {
    const { auth, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading && !auth) {
            navigate('/great-wall');
        }
    }, [auth, loading, navigate]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // full screen center
                }}
            >
                <CircularProgress size={60} color="primary" />
            </Box>
        );
    }

    return auth ? children : null;
};

export default ProtectedRoute;
