import { AuthLayout } from "../../core/layouts";
import { LoginPage, RegisterPage, VerifyPage } from "./pages";

const routes = [{
    path: "auth",
    element: <AuthLayout />,
    children: [
        { path: "login", element: <LoginPage /> },
        { path: "verify", element: <VerifyPage /> },
        { path: "register", element: <RegisterPage /> }
    ]
}];

export default routes;