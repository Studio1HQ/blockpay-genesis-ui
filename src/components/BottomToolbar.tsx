
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
      
      <div className="fixed bottom-4 left-3 right-3 sm:bottom-6 sm:left-4 sm:right-4 md:left-6 md:right-6 z-40 flex justify-center">
        <div className="glass-card rounded-full px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 teal-glow w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          {/* Comment Tool - Using MessageCircle icon */}
          <VeltCommentTool>
            <button className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-accent/20">
              <MessageCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </VeltCommentTool>
          
          {/* Messages Icon - Wrapped with VeltSidebarButton */}
          <VeltSidebarButton>
            <button className="text-muted-foreground hover:text-foreground transition-colors relative p-1 rounded-lg hover:bg-accent/20">
              <Inbox size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-primary rounded-full"></span>
            </button>
          </VeltSidebarButton>
          
          {/* Divider - Hidden on very small screens */}
          <div className="hidden sm:block h-5 md:h-6 lg:h-8 w-[1px] bg-border/50"></div>
          
          {/* Toggle Switch for Dark/Light Mode */}
          <button 
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-accent/20" 
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <ToggleLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer" />
            ) : (
              <ToggleRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer" />
            )}
          </button>
          
          {/* Profile Section - Replaced with UserSwitcher */}
          <div className="flex-shrink-0">
            <UserSwitcher />
          </div>
          
          {/* Divider - Hidden on small screens */}
          <div className="hidden md:block h-5 md:h-6 lg:h-8 w-[1px] bg-border/50"></div>
          
          {/* Help Button with Tooltip - Hidden on very small screens */}
          <div className="hidden md:block">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-accent/20">
                    <HelpCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
          <button className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-accent/20">
            <Upload size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Menu Icon */}
          <button className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-accent/20">
            <Menu size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomToolbar;
