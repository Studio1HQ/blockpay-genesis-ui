
import React, { useEffect, useState } from "react";
import { MessageCircle, Inbox, Upload, Menu } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

const BottomToolbar = () => {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    // Set initial theme based on system preference or saved preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("light-mode", savedTheme === "light");
    } else if (prefersDark) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Save preference to localStorage
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    
    // Toggle class on html element
    document.documentElement.classList.toggle("light-mode", !newIsDark);
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <div className="glass-card rounded-full px-4 py-3 flex items-center gap-4 sm:gap-6 md:gap-8 teal-glow">
        {/* Chat Icon */}
        <button className="text-gray-300 hover:text-white transition-colors">
          <MessageCircle size={24} />
        </button>
        
        {/* Messages Icon */}
        <button className="text-gray-300 hover:text-white transition-colors relative">
          <Inbox size={24} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full"></span>
        </button>
        
        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-700/50"></div>
        
        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <button 
            className="text-gray-300 hover:text-white transition-colors flex items-center" 
            onClick={toggleTheme}
          >
            {isDark ? <Moon size={20} className="text-teal-400" /> : <Sun size={20} className="text-yellow-400" />}
            <Switch 
              checked={isDark}
              onCheckedChange={toggleTheme}
              className="ml-2"
            />
          </button>
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          {/* First Avatar */}
          <Avatar className="w-8 h-8 border-2 border-teal-600">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-teal-900 text-teal-200">CN</AvatarFallback>
          </Avatar>
          
          {/* Second Avatar */}
          <Avatar className="w-8 h-8 border-2 border-teal-600">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-teal-900 text-teal-200">JD</AvatarFallback>
          </Avatar>
          
          {/* Third Avatar */}
          <Avatar className="w-8 h-8 border-2 border-yellow-500">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-teal-900 text-teal-200">MK</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-700/50"></div>
        
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
  );
};

export default BottomToolbar;
