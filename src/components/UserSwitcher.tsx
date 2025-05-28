import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useVeltClient } from '@veltdev/react';
import { VeltPresence } from '@veltdev/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Define our Rick and Morty characters
const users = [
  {
    userId: 'rick-sanchez',
    name: 'Rick Sanchez',
    email: 'rick@citadel.universe',
    photoUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    color: '#55CC44',
    textColor: '#ffffff',
    organizationId: 'blockpay-org'
  },
  {
    userId: 'morty-smith',
    name: 'Morty Smith',
    email: 'morty@earth.c137',
    photoUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    color: '#FFCC00',
    textColor: '#000000',
    organizationId: 'blockpay-org'
  },
  {
    userId: 'summer-smith',
    name: 'Summer Smith',
    email: 'summer@earth.c137',
    photoUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    color: '#FF6B8B',
    textColor: '#ffffff',
    organizationId: 'blockpay-org'
  },
  {
    userId: 'beth-smith',
    name: 'Beth Smith',
    email: 'beth@earth.c137',
    photoUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    color: '#4A90E2',
    textColor: '#ffffff',
    organizationId: 'blockpay-org'
  }
];

export function UserSwitcher() {
  const { client } = useVeltClient();
  const [currentUser, setCurrentUser] = useState<number | null>(null);

  useEffect(() => {
    // Check if user is already signed in from localStorage
    const storedUser = localStorage.getItem('veltCurrentUser');
    if (storedUser) {
      const userIndex = parseInt(storedUser);
      setCurrentUser(userIndex);
      identifyUser(userIndex);
    } else {
      // Auto-select first user if none is selected
      identifyUser(0);
    }
  }, [client]);

  const identifyUser = async (index: number) => {
    if (!client) return;
    
    // Sign out any existing user first
    await client.signOutUser();
    
    // Identify the new user
    await client.identify(users[index]);
    
    // Set document info for Velt
    client.setDocument('blockpay-landing', { documentName: 'BlockPay Landing Page' });
    
    // Store the current user in localStorage
    localStorage.setItem('veltCurrentUser', index.toString());
    
    // Update state
    setCurrentUser(index);
  };

  const handleUserSwitch = (index: number) => {
    identifyUser(index);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Active user indicator */}
      {currentUser !== null && (
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          {/* <span className="text-xs text-gray-300">Playing as {users[currentUser].name}</span> */}
        </div>
      )}
      
      {/* Presence component to show online users */}
      <VeltPresence />
      
      {/* User avatars for switching */}
      <div className="flex -space-x-1 overflow-hidden">
        {users.map((user, index) => (
          <TooltipProvider key={user.userId}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar 
                  className={`w-8 h-8 cursor-pointer transition-all duration-300 border-2 ${
                    currentUser === index 
                      ? 'border-yellow-500 scale-110 z-10 relative' 
                      : 'border-teal-600 opacity-80 hover:opacity-100 hover:z-10 hover:scale-105'
                  }`}
                  onClick={() => handleUserSwitch(index)}
                >
                  <AvatarImage src={user.photoUrl} alt={user.name} />
                  <AvatarFallback 
                    className="bg-teal-900 text-teal-200"
                  >
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Switch to {user.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
} 