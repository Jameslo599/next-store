import Container from '../global/Container';
import CartButton from './CartButton';
import { ModeToggle } from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="gap-4 flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-4">
        <Logo />

        <Suspense>
          {' '}
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center justify-end">
          <CartButton />
          <ModeToggle />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
