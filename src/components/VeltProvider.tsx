import { ReactNode } from 'react';
import { VeltProvider as BaseVeltProvider } from '@veltdev/react';

// Get API key from environment variable or use a placeholder
const VELT_API_KEY = import.meta.env.VITE_VELT_API_KEY || '';

export function VeltProvider({ children }: { children: ReactNode }) {
  return (
    <BaseVeltProvider apiKey={VELT_API_KEY}>
      {children}
    </BaseVeltProvider>
  );
} 