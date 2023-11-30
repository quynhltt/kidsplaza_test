import Layout from "../components/Layout/Layout";
import Homepage from "../pages/Homepage/Homepage";

export const userRoutes = [
    {
        path: '/',
        component: <Layout Component={Homepage} />
    },
]