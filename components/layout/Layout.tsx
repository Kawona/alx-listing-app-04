import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ childred: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mn-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;