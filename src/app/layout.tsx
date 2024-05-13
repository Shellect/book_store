import "bootstrap/scss/bootstrap.scss";
import "./styles.css";
import {Header} from "../components/Header";

export default function RootLayout({children}) {
    return (
        <html>
        <body>
        <Header></Header>
        {children}
        </body>
        </html>
    )
}