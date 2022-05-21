//use to wrap around other components from the children and render the children which are the components that will exist below it, every component that have a navbar, there will be a component wrapped around it and rendering the rest 
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
          <div>
              {children}
      </div>
    </>
  );
};

export default Layout;
