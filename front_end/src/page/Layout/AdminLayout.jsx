import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../component/Header/AdminHeader";
import Sidebar from "../../component/SideBar/Sidebar";

const AdminLayout = () => {
    return (
        <div style={{
            height: '100vh',
            backgroundColor: '#ffffffff'
        }}>
             <Stack direction="row">
            <Sidebar/>
            <Stack direction="column" sx={{ flexGrow: 1, overflow: "auto" }}>
                <AdminHeader />
                <Stack sx={{ flexGrow: 1, p: 5 }}>
                    <Outlet />
                </Stack>
                {/* <Footer /> */}
            </Stack>
        </Stack>
        </div>
    );
};

export default AdminLayout;