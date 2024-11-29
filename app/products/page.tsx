import ProductsContainer from '@/components/products/ProductsContainer';

type Params = Promise<{ layout?: string; search?: string }>;

async function ProductsPage({ searchParams }: { searchParams: Params }) {
  const params = await searchParams;
  const layout = params.layout || 'grid';
  const search = params.search || '';

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;
