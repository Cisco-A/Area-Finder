import SearchNavbar from "./SearchNavBar";

interface SpecialLayoutProps {
    children: React.ReactNode;
  
}

const SpecialLayout: React.FC<SpecialLayoutProps> = ({ children }) => {
    return (
      <>
        <SearchNavbar />
        <main>{children}</main>
      </>
    );
  };
  
  export default SpecialLayout;