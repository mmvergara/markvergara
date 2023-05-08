import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="pl-[50px] pt-[30px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
