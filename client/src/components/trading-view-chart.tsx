
import { useEffect, useRef } from 'react'

export function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'BITSTAMP:ETHUSD',
          interval: '1',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: 'tradingview_chart'
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div ref={containerRef} id="tradingview_chart" className="h-[600px]" />
  )
}

