import NavbarMain from '@/src/components/navbar/NavbarMain';
import ScrollNavigationButtons from '@/src/components/reusable/ScrollNavigationButtons';

const Navbar = () => {
  return (
    <nav>
      <NavbarMain />
      <ScrollNavigationButtons />
    </nav>
  );
};

export default Navbar;
