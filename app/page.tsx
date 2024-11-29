import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProducts';
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
