import { CartItem } from '@/components/cart-item'
import { CardForm } from '@/components/card-form'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CaretLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { PixForm } from '@/components/pix-form'

export function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card')

  function handleChangePaymentMethod(newPaymentMethod: 'card' | 'pix') {
    setPaymentMethod(newPaymentMethod)
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-2">
      <Link className="mb-4 block" to="/">
        <Button variant="ghost">
          <CaretLeft size={18} className="mr-2" />
          Voltar
        </Button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Finalizar Compra</h1>
      <div className="space-y-4">
        <div className="space-y-4">
          <CartItem showQuantityInput={false} />
          <CartItem showQuantityInput={false} />
        </div>
        <Separator orientation="horizontal" />
        <div className="border border-border grid grid-cols-3 p-4 rounded-md gap-4 items-start">
          <div className="col-start-1 col-end-3 space-y-4">
            <header className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => handleChangePaymentMethod('card')}
                variant="ghost"
                className={cn(
                  paymentMethod === 'card' && 'bg-muted hover:bg-muted',
                )}
              >
                Cartão de crédito
              </Button>
              <Button
                onClick={() => handleChangePaymentMethod('pix')}
                variant="ghost"
                className={cn(
                  paymentMethod === 'pix' && 'bg-muted hover:bg-muted',
                )}
              >
                PIX
              </Button>
            </header>
            {paymentMethod === 'card' ? <CardForm /> : <PixForm />}
          </div>
          <div className="bg-muted rounded-md p-2 space-y-4">
            <header>
              <strong className="text-lg">Detalhes de compra</strong>
            </header>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <strong>R$ 460,00</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxa</span>
                <strong>R$ 0,00</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Desconto</span>
                <strong>R$ 0,00</strong>
              </div>
            </div>
            <Separator
              className="bg-muted-foreground"
              orientation="horizontal"
            />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <strong>R$ 460,00</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
