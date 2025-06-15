
import React from "react";
import { MessageCircle, Inbox, Upload, Menu, ToggleLeft, ToggleRight, HelpCircle } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { UserSwitcher } from "./UserSwitcher";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { VeltComments, VeltCommentsSidebar, VeltSidebarButton, VeltCommentTool } from '@veltdev/react';

const BottomToolbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <>
      {/* Velt Comments Components */}
      <VeltComments darkMode={theme === "dark"} popoverTriangleComponent={false} />
      <VeltCommentsSidebar darkMode={theme === "dark"} />
      
      <div className="fixed bottom-4 left-4 right-4 z-40 flex justify-center">
        <div className="glass-card rounded-full px-4 py-3 flex items-center justify-between gap-2 teal-glow w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl sm:gap-3 md:gap-4 lg:gap-6 sm:justify-center">
          {/* Comment Tool - Using MessageCircle icon */}
          <VeltCommentTool>
            <button className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/20 flex-shrink-0">
              <MessageCircle size={20} className="sm:w-5 sm:h-5" />
            </button>
          </VeltCommentTool>
          
          {/* Messages Icon - Wrapped with VeltSidebarButton */}
          <VeltSidebarButton>
            <button className="text-muted-foreground hover:text-foreground transition-colors relative p-2 rounded-lg hover:bg-accent/20 flex-shrink-0">
              <Inbox size={20} className="sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full"></span>
            </button>
          </VeltSidebarButton>
          
          {/* Divider - Hidden on very small screens */}
          <div className="hidden sm:block h-6 w-[1px] bg-border/50 flex-shrink-0"></div>
          
          {/* Toggle Switch for Dark/Light Mode */}
          <button 
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/20 flex-shrink-0" 
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <ToggleLeft size={20} className="sm:w-5 sm:h-5 cursor-pointer" />
            ) : (
              <ToggleRight size={20} className="sm:w-5 sm:h-5 cursor-pointer" />
            )}
          </button>
          
          {/* Profile Section - Replaced with UserSwitcher */}
          <div className="flex-shrink-0">
            <UserSwitcher />
          </div>
          
          {/* Divider - Hidden on small screens */}
          <div className="hidden md:block h-6 w-[1px] bg-border/50 flex-shrink-0"></div>
          
          {/* Help Button with Tooltip - Hidden on very small screens */}
          <div className="hidden md:block flex-shrink-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/20">
                    <HelpCircle size={20} className="sm:w-5 sm:h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[250px] p-4">
                  <h4 className="font-bold mb-2">Collaborative Features</h4>
                  <ul className="text-sm list-disc ml-4 space-y-1">
                    <li>Switch between Rick and Morty characters</li>
                    <li>See other users' cursors in real-time</li>
                    <li>Add comments anywhere on the page</li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {/* Upload Icon - Hidden on very small screens */}
          <button className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/20 flex-shrink-0">
            <Upload size={20} className="sm:w-5 sm:h-5" />
          </button>
          
          {/* Menu Icon */}
          <button className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/20 flex-shrink-0">
            <Menu size={20} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomToolbar;
