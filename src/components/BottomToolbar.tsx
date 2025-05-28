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
      
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
        <div className="glass-card rounded-full px-4 py-3 flex items-center gap-4 sm:gap-6 md:gap-8 teal-glow">
          {/* Comment Tool - Using MessageCircle icon */}
          <VeltCommentTool>
            <button className="text-gray-300 hover:text-white transition-colors">
              <MessageCircle size={24} />
            </button>
          </VeltCommentTool>
          
          {/* Messages Icon - Wrapped with VeltSidebarButton */}
          <VeltSidebarButton>
            <button className="text-gray-300 hover:text-white transition-colors relative">
              <Inbox size={24} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full"></span>
            </button>
          </VeltSidebarButton>
          
          {/* Divider */}
          <div className="h-8 w-[1px] bg-gray-700/50"></div>
          
          {/* Toggle Switch for Dark/Light Mode */}
          <button 
            className="text-gray-300 hover:text-white transition-colors" 
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <ToggleLeft size={24} className="cursor-pointer" />
            ) : (
              <ToggleRight size={24} className="cursor-pointer" />
            )}
          </button>
          
          {/* Profile Section - Replaced with UserSwitcher */}
          <UserSwitcher />
          
          {/* Divider */}
          <div className="h-8 w-[1px] bg-gray-700/50"></div>
          
          {/* Help Button with Tooltip */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <HelpCircle size={24} />
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
          
          {/* Upload Icon */}
          <button className="text-gray-300 hover:text-white transition-colors">
            <Upload size={24} />
          </button>
          
          {/* Menu Icon */}
          <button className="text-gray-300 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomToolbar;
