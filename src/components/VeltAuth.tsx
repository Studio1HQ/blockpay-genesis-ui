import { useEffect, useRef } from 'react';
import { useVeltClient } from '@veltdev/react';

interface VeltAuthProps {
  user?: {
    userId: string;
    name: string;
    email: string;
    photoUrl: string;
    color: string;
    textColor: string;
    organizationId: string;
  };
}

export function VeltAuth({ user }: VeltAuthProps) {
  const { client } = useVeltClient();
  const prevUserIdRef = useRef<string | undefined>();
  const isInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!client || !user) return;

    const identifyUser = async () => {
      try {
        // Always set the document first, as required by Velt
        console.log('Setting document ID...');
        client.setDocument('blockpay-test-v3', { 
          documentName: 'BlockPay Test v3' 
        });

        // Check if this is a user switch (different userId than before)
        const isUserSwitch = prevUserIdRef.current && prevUserIdRef.current !== user.userId;
        
        if (isUserSwitch) {
          // Sign out the previous user first to clean up the session
          console.log('Signing out previous user:', prevUserIdRef.current);
          await client.signOutUser();
          
          // Longer delay to ensure complete cleanup and prevent duplicate users
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        // Only identify if it's a different user or first initialization
        if (!isInitializedRef.current || isUserSwitch) {
          console.log('Identifying user:', user.name, user.userId);
          await client.identify(user);
          
          // Remember the current user ID for next comparison
          prevUserIdRef.current = user.userId;
          isInitializedRef.current = true;
          
          console.log(`Successfully identified user: ${user.name} (ID: ${user.userId})`);
        } else {
          console.log('User already identified, skipping re-identification');
        }
      } catch (error) {
        console.error('Error in VeltAuth:', error);
      }
    };

    identifyUser();
  }, [client, user]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (client && isInitializedRef.current) {
        console.log('Cleaning up VeltAuth...');
        client.signOutUser().catch(console.error);
      }
    };
  }, [client]);

  return null; // This component doesn't render anything
} 