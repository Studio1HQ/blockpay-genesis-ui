import { useState, useEffect, useMemo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VeltPresence } from '@veltdev/react';
import { VeltAuth } from './VeltAuth';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Check } from 'lucide-react';

// Define our users
const users = [
  {
    userId: 'user-alpha-rick-2025',
    name: 'Rick Sanchez',
    email: 'rick.sanchez@blockpay.genesis',
    photoUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    color: '#55CC44',
    textColor: '#ffffff',
    organizationId: 'blockpay-genesis-org'
  },
  {
    userId: 'user-beta-morty-2025',
    name: 'Morty Smith',
    email: 'morty.smith@blockpay.genesis',
    photoUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    color: '#4A90E2',
    textColor: '#ffffff',
    organizationId: 'blockpay-genesis-org'
  }
];

export function UserSwitcher() {
  // Randomize initial user selection instead of always defaulting to Rick
  const [currentUser, setCurrentUser] = useState<number>(() => {
    const randomIndex = Math.floor(Math.random() * users.length);
    console.log('Initial random user selected:', users[randomIndex].name);
    return randomIndex;
  });

  // Memoize the user object to prevent unnecessary re-renders
  const currentUserWithId = useMemo(() => {
    return users[currentUser];
  }, [currentUser]);

  const handleUserSwitch = (index: number) => {
    if (index !== currentUser) {
      console.log('Switching user from', users[currentUser].name, 'to', users[index].name);
      setCurrentUser(index);
    }
  };

  // Log current user changes
  useEffect(() => {
    console.log('Current user changed to:', users[currentUser].name, 'with ID:', currentUserWithId.userId);
  }, [currentUser, currentUserWithId.userId]);

  return (
    <>
      {/* VeltAuth component handles user identification */}
      <VeltAuth user={currentUserWithId} />
      
      <div className="flex items-center gap-2">
        {/* Active user indicator */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
        
        {/* Presence component to show online users - flexible width */}
        <div className="flex-shrink-0">
          <VeltPresence />
        </div>
        
        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background/50 border border-border hover:bg-accent/50 transition-all duration-200 group">
              <Avatar className="w-6 h-6 ring-2 ring-primary/30 flex-shrink-0">
                <AvatarImage src={users[currentUser].photoUrl} alt={users[currentUser].name} />
                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                  {users[currentUser].name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium text-foreground hidden sm:inline whitespace-nowrap">
                {users[currentUser].name}
              </span>
              <ChevronDown className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
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
    </>
  );
} 
