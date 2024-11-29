import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div
          className="h-14 sm:w-14 bg-no-repeat bg-center"
          style={{ backgroundImage: 'var(--logo)' }}
        ></div>
      </Link>
    </div>
  );
};
export default Logo;
