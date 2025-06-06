
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
      
      <div className="fixed bottom-3 sm:bottom-6 left-2 right-2 sm:left-0 sm:right-0 z-50 flex justify-center">
        <div className="glass-card rounded-full px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 teal-glow max-w-full overflow-hidden">
          {/* Comment Tool - Using MessageCircle icon */}
          <VeltCommentTool>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            </button>
          </VeltCommentTool>
          
          {/* Messages Icon - Wrapped with VeltSidebarButton */}
          <VeltSidebarButton>
            <button className="text-muted-foreground hover:text-foreground transition-colors relative">
              <Inbox size={20} className="sm:w-6 sm:h-6" />
              <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></span>
            </button>
          </VeltSidebarButton>
          
          {/* Divider - Hidden on very small screens */}
          <div className="hidden xs:block h-6 sm:h-8 w-[1px] bg-border"></div>
          
          {/* Toggle Switch for Dark/Light Mode */}
          <button 
            className="text-muted-foreground hover:text-foreground transition-colors" 
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <ToggleLeft size={20} className="sm:w-6 sm:h-6 cursor-pointer" />
            ) : (
              <ToggleRight size={20} className="sm:w-6 sm:h-6 cursor-pointer" />
            )}
          </button>
          
          {/* Profile Section - Replaced with UserSwitcher */}
          <UserSwitcher />
          
          {/* Divider - Hidden on small screens */}
          <div className="hidden sm:block h-6 sm:h-8 w-[1px] bg-border"></div>
          
          {/* Help Button with Tooltip - Hidden on very small screens */}
          <div className="hidden sm:block">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <HelpCircle size={20} className="sm:w-6 sm:h-6" />
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
          <button className="hidden xs:block text-muted-foreground hover:text-foreground transition-colors">
            <Upload size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          {/* Menu Icon */}
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Menu size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomToolbar;
