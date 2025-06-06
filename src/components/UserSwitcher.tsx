
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useVeltClient } from '@veltdev/react';
import { VeltPresence } from '@veltdev/react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Check } from 'lucide-react';

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
        </div>
      )}
      
      {/* Presence component to show online users */}
      <VeltPresence />
      
      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background/50 border border-border hover:bg-accent/50 transition-all duration-200 group">
            {currentUser !== null && (
              <>
                <Avatar className="w-6 h-6 ring-2 ring-primary/30">
                  <AvatarImage src={users[currentUser].photoUrl} alt={users[currentUser].name} />
                  <AvatarFallback className="bg-primary/20 text-primary text-xs">
                    {users[currentUser].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium text-foreground hidden sm:inline">
                  {users[currentUser].name}
                </span>
              </>
            )}
            <ChevronDown className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-48 bg-popover/95 backdrop-blur-sm border border-border shadow-lg"
          sideOffset={8}
        >
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            Switch Character
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {users.map((user, index) => (
            <DropdownMenuItem
              key={user.userId}
              onClick={() => handleUserSwitch(index)}
              className="flex items-center gap-3 cursor-pointer hover:bg-accent/80 transition-colors"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.photoUrl} alt={user.name} />
                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-foreground">{user.name}</div>
                <div className="text-xs text-muted-foreground truncate">{user.email}</div>
              </div>
              {currentUser === index && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
} 
