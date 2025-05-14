
import { ScanLine, Wallet, Bitcoin } from 'lucide-react';

const CardPreview = () => {
  return (
    <div className="relative w-full max-w-md h-80 perspective">
      {/* Floating card */}
      <div className="animate-float absolute z-20 w-full aspect-[3/2] rounded-2xl glass-card teal-glow bg-gradient-to-br from-gray-800/90 to-dark-teal-200/90 p-6 flex flex-col justify-between transform -rotate-12">
        {/* Card header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold gradient-text">BlockPay</h3>
            <p className="text-gray-400 text-sm">Universal Payment Interface</p>
          </div>
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-full p-1">
            <Bitcoin className="w-5 h-5 text-dark-teal-900" />
          </div>
        </div>
        
        {/* Card number */}
        <div className="mt-6">
          <div className="text-gray-400 text-xs mb-1">Wallet ID</div>
          <div className="text-white tracking-wider">**** **** **** 8423</div>
        </div>
        
        {/* Card footer */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-gray-400 text-xs">Balance</div>
            <div className="text-2xl font-bold text-white">$842.57</div>
          </div>
          <div className="bg-teal-500/20 rounded-lg p-2">
            <ScanLine className="w-8 h-8 text-teal-300" />
          </div>
        </div>
      </div>
      
      {/* Second card for depth */}
      <div className="absolute z-10 w-full aspect-[3/2] rounded-2xl glass-card bg-gradient-to-br from-gray-800/70 to-dark-teal-100/50 transform -rotate-6 translate-y-4 translate-x-2"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-8 -right-16 w-32 h-32 rounded-full bg-teal-500/30 blur-3xl z-0"></div>
      <div className="absolute -top-12 -left-10 w-20 h-20 rounded-full border border-teal-500/20 z-30"></div>
    </div>
  );
};

export default CardPreview;
