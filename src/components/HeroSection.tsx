import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CardPreview from './CardPreview';
import { useTheme } from '@/components/ThemeProvider';

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-teal-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-teal-600/10 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-teal-400/50 animate-pulse-glow"></div>
      <div className="absolute top-3/4 left-1/3 w-6 h-6 rounded-full border border-teal-500/30"></div>
      
      {/* Curved line SVG */}
      <svg className="absolute top-20 right-0 h-[60%] w-[40%] text-teal-700/10" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0,50 C40,10 60,90 100,50 C140,10 160,90 200,50" 
          stroke="currentColor" 
          fill="none" 
          strokeWidth="0.5"
        />
      </svg>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div className="order-2 md:order-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-teal-400 font-medium tracking-widest mb-2">WELCOME</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Blockchain</span> for <br />
            everyday payments
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            Revolutionizing digital transactions with secure blockchain technology.
            Scan, pay, and track in bitcoin with our UPI platform that combines
            simplicity and security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-6 rounded-full">
              Get Started
            </Button>
            
            <Button variant="outline" className={`group border-teal-700 hover:border-teal-500 bg-transparent hover:bg-dark-teal-50 flex items-center gap-2 px-6 py-6 rounded-full ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Button>
          </div>
        </div>

        {/* Right Column - Card Preview */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <CardPreview />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
