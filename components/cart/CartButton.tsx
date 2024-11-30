import { fetchCartItems } from '@/utils/actions';

async function CartButton() {
  const numItemsInCart = await fetchCartItems();
}
