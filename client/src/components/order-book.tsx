export function OrderBook() {
    return (
      <div className="space-y-2">
        <div className="grid grid-cols-3 text-sm text-muted-foreground">
          <div>Price</div>
          <div className="text-center">Amount</div>
          <div className="text-right">Total</div>
        </div>
        
        {/* Sell orders */}
        <div className="space-y-1">
          <div className="grid grid-cols-3 text-sm text-red-500">
            <div>24.00</div>
            <div className="text-center">2.0000</div>
            <div className="text-right">48.00</div>
          </div>
          <div className="grid grid-cols-3 text-sm text-red-500">
            <div>23.00</div>
            <div className="text-center">5.0000</div>
            <div className="text-right">115.00</div>
          </div>
        </div>
  
        {/* Spread */}
        <div className="text-sm text-muted-foreground py-2 text-center">
          Spread: 1.00
        </div>
  
        {/* Buy orders */}
        <div className="space-y-1">
          <div className="grid grid-cols-3 text-sm text-emerald-500">
            <div>22.00</div>
            <div className="text-center">4.0000</div>
            <div className="text-right">88.00</div>
          </div>
          <div className="grid grid-cols-3 text-sm text-emerald-500">
            <div>19.00</div>
            <div className="text-center">4.0000</div>
            <div className="text-right">76.00</div>
          </div>
        </div>
      </div>
    )
  }
  
  