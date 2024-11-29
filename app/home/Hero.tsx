import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          The future is bright with Divinity
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro
          reiciendis magnam illo sit culpa! Odio rem dolore deserunt molestias
          omnis nihil, quos aut, tenetur magni sed tempora error ut?
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
