
import { ScanLine, Bitcoin, CreditCard, Wallet, Link, Check, Users } from 'lucide-react';

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="feature-card animate-slide-up">
    <div className="feature-icon-bg">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureSection = () => {
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
          <p className="text-gray-300">
            BlockPay combines traditional UPI simplicity with the security and innovation of blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<ScanLine className="w-6 h-6 text-teal-400" />}
            title="Quick QR Payments"
            description="Scan and pay instantly with secure QR codes for Bitcoin transactions at any merchant."
          />
          
          <Feature 
            icon={<Bitcoin className="w-6 h-6 text-teal-400" />}
            title="Bitcoin Integration"
            description="Use Bitcoin for everyday purchases with real-time conversion rates and minimal fees."
          />
          
          <Feature 
            icon={<Wallet className="w-6 h-6 text-teal-400" />}
            title="Secure Wallet"
            description="Your crypto assets are protected with military-grade encryption and biometric security."
          />
          
          <Feature 
            icon={<Link className="w-6 h-6 text-teal-400" />}
            title="Blockchain Security"
            description="All transactions are verified and recorded on the blockchain for ultimate transparency."
          />
          
          <Feature 
            icon={<CreditCard className="w-6 h-6 text-teal-400" />}
            title="Traditional Banking Bridge"
            description="Link your existing bank accounts and cards for seamless fund transfers."
          />
          
          <Feature 
            icon={<Users className="w-6 h-6 text-teal-400" />}
            title="Merchant Network"
            description="Growing network of merchants accepting cryptocurrency payments through our platform."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
