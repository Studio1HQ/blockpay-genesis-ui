import { ScanLine, Bitcoin, CreditCard, Wallet, Link, Check, Users } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Feature = ({ icon, title, description, theme }: { icon: React.ReactNode; title: string; description: string; theme: string }) => (
  <div className="feature-card animate-slide-up">
    <div className="feature-icon-bg">
      {icon}
    </div>
    <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
  </div>
);

const FeatureSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="features" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-teal opacity-5"></div>
      <div className="absolute top-40 left-20 w-4 h-4 rounded-sm bg-teal-500/30 animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-[10%] w-6 h-6 rounded-full border border-teal-500/30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What do we <span className="gradient-text">provide?</span>
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            BlockPay combines traditional UPI simplicity with the security and innovation of blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<ScanLine className="w-6 h-6 text-teal-400" />}
            title="Quick QR Payments"
            description="Scan and pay instantly with secure QR codes for Bitcoin transactions at any merchant."
            theme={theme}
          />
          
          <Feature 
            icon={<Bitcoin className="w-6 h-6 text-teal-400" />}
            title="Bitcoin Integration"
            description="Use Bitcoin for everyday purchases with real-time conversion rates and minimal fees."
            theme={theme}
          />
          
          <Feature 
            icon={<Wallet className="w-6 h-6 text-teal-400" />}
            title="Secure Wallet"
            description="Your crypto assets are protected with military-grade encryption and biometric security."
            theme={theme}
          />
          
          <Feature 
            icon={<Link className="w-6 h-6 text-teal-400" />}
            title="Blockchain Security"
            description="All transactions are verified and recorded on the blockchain for ultimate transparency."
            theme={theme}
          />
          
          <Feature 
            icon={<CreditCard className="w-6 h-6 text-teal-400" />}
            title="Traditional Banking Bridge"
            description="Link your existing bank accounts and cards for seamless fund transfers."
            theme={theme}
          />
          
          <Feature 
            icon={<Users className="w-6 h-6 text-teal-400" />}
            title="Merchant Network"
            description="Growing network of merchants accepting cryptocurrency payments through our platform."
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
