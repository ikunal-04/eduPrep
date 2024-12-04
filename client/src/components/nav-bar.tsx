import { ConnectButton } from '@rainbow-me/rainbowkit'

export function NavBar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">Perpetual DEX</h1>
          <a href="/" className="text-muted-foreground hover:text-primary">Home</a>
        </div>
        <ConnectButton />
      </div>
    </nav>
  )
}

