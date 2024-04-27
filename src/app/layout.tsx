import "bootstrap/scss/bootstrap.scss";
import Header from "./components/header";

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