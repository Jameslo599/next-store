import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Welcome to America's African Violet Store!
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          We make it easy to find violets and supplies AVSA Store – Offering
          software, books, member supplies and more! <br />
          <br />
          Commercial Vendors – Buy violets and supplies with the reputable
          dealers associated with AVSA. <br /> <br /> Corporate Partners – AVSA
          receives a portion of the proceeds when you shop with these
          businesses.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products" className="text-[18px]">
            Our Products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
