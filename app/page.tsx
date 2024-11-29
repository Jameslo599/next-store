import Hero from './home/Hero';
import FeaturedProjects from './home/FeaturedProducts';
import { Suspense } from 'react';
import LoadingContainer from '@/components/global/LoadingContainer';

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}></Suspense>
      <FeaturedProjects />
    </>
  );
}
export default HomePage;
