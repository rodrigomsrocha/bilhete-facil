import { CartItem } from '@/components/cart-item'
import { Separator } from '@/components/ui/separator'

export function CartPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <Separator orientation="horizontal" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-lg">Subtotal</span>
          <strong className="text-right text-lg">R$ 690,00</strong>
        </div>
        <div className="text-muted-foreground flex justify-between">
          <span>Taxas</span>
          <strong className="text-bold">R$ 0,00</strong>
        </div>
        <div className="text-muted-foreground flex justify-between">
          <span>Disconto</span>
          <strong className="text-bold">R$ 0,00</strong>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-lg">Total</span>
        <strong className="text-right text-lg">R$ 690,00</strong>
      </div>
    </div>
  )
}
