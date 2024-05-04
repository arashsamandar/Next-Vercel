/**
 * its really not a hard job to do arash
 * first you create the Header component
 * and export it
 * then :
 * footer.jsx and then export it
 * then Layout.jsx like
 */

const { default: Footer } = require("./Footer")

const Layout = () => {
    return(
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    )
}