/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request?: (...args: any[]) => Promise<any>;
      on?: (event: string, callback: (...args: any[]) => void) => void;
      removeListener?: (event: string, callback: (...args: any[]) => void) => void;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TradingView: any;
  }
  