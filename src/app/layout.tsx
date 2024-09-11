import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import {Header} from "@/components/ui";

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