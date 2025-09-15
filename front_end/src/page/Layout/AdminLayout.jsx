import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../component/Header/AdminHeader";
import Sidebar from "../../component/SideBar/Sidebar";

const AdminLayout = () => {
    return (
        <Stack direction="row" sx={{
            height: '100vh',
            backgroundColor: '#ffffffff',
            overflow: 'clip'
        }}>
            <Sidebar />
            <Stack direction="column" sx={{ flexGrow: 1, overflow: "hidden" }}>
                <AdminHeader />
                <Stack sx={{ flexGrow: 1, p: 5, height: '89vh', overflow: "auto" }}>
                    <Outlet />
                </Stack>
                {/* <Footer /> */}
            </Stack>
        </Stack>
    );
};

export default AdminLayout;