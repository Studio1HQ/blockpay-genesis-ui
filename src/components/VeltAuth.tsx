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
        client.setDocument('blockpay-landing', { 
          documentName: 'BlockPay Landing Page' 
        });

        // Check if this is a user switch (different userId than before)
        const isUserSwitch = prevUserIdRef.current && prevUserIdRef.current !== user.userId;
        
        if (isUserSwitch) {
          // Sign out the previous user first to clean up the session
          // as recommended in https://docs.velt.dev/key-concepts/users/sign-out-user
          console.log('Signing out previous user:', prevUserIdRef.current);
          await client.signOutUser();
          
          // Small delay to ensure cleanup is complete
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // Identify the new user
        console.log('Identifying user:', user.name, user.userId);
        await client.identify(user);
        
        // Remember the current user ID for next comparison
        prevUserIdRef.current = user.userId;
        isInitializedRef.current = true;
        
        console.log(`Successfully identified user: ${user.name} (ID: ${user.userId})`);
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