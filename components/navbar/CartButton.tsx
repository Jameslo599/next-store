import Link from 'next/link';
import { Button } from '../ui/button';
import { LucideShoppingCart } from 'lucide-react';

async function CartButton() {
  const numItemsInCart = 9;

  return (
    <div>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="flex justify-center items-center relative"
      >
        <Link href="./cart">
          <LucideShoppingCart />
          <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 items-center justify-center text-xs text-center pt-1">
            {numItemsInCart}
          </span>
        </Link>
      </Button>
    </div>
  );
}
export default CartButton;
