import { ReactNode, useEffect } from 'react';
import { VeltProvider as BaseVeltProvider } from '@veltdev/react';

// Get API key from environment variable or use a placeholder
const VELT_API_KEY = import.meta.env.VITE_VELT_API_KEY || '';

export function VeltProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!VELT_API_KEY) {
      console.error('VITE_VELT_API_KEY is not set in environment variables');
    } else {
      console.log('Velt API Key loaded successfully');
    }
  }, []);

  if (!VELT_API_KEY) {
    console.warn('Velt API Key not found. Please set VITE_VELT_API_KEY in your .env file');
    return <>{children}</>;
  }

  return (
    <BaseVeltProvider apiKey={VELT_API_KEY}>
      {children}
    </BaseVeltProvider>
  );
}