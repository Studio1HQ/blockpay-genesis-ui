
import { Button } from '@/components/ui/button';
import { Download, Check } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-teal-900/0 via-dark-teal-100/5 to-dark-teal-900/0 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Left Column - App Preview */}
            <div className="bg-gradient-to-br from-dark-teal-50 to-dark-teal-900 p-8 py-12 md:p-12 flex justify-center">
              <div className="relative w-64 h-[500px] rounded-3xl bg-dark-teal-900 border-8 border-dark-teal-900 shadow-2xl overflow-hidden">
                {/* Phone Screen Content */}
                <div className="h-full bg-dark-teal-900 flex flex-col">
                  {/* App Header */}
                  <div className="p-4 bg-gradient-teal">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-white">BlockPay</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                        <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Balance Section */}
                  <div className="p-6 bg-dark-teal-200">
                    <p className="text-sm text-white/70">Available Balance</p>
                    <h2 className="text-2xl font-bold text-white mt-1">₿ 0.0321</h2>
                    <p className="text-sm text-white/70">≈ $842.57</p>
                    
                    <div className="mt-6 flex gap-2">
                      <div className="flex-1 bg-teal-500 text-white text-center rounded-lg py-2 text-sm">Send</div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm text-white text-center rounded-lg py-2 text-sm">Receive</div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm text-white text-center rounded-lg py-2 text-sm">Scan</div>
                    </div>
                  </div>
                  
                  {/* Recent Transactions */}
                  <div className="flex-1 p-6">
                    <h3 className="text-white/90 mb-4 font-medium">Recent Transactions</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-dark-teal-100 p-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                            <CoffeeIcon className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <p className="text-white text-sm">Coffee Shop</p>
                            <p className="text-xs text-white/60">Today, 9:32 AM</p>
                          </div>
                        </div>
                        <p className="text-white font-medium">-₿0.0001</p>
                      </div>
                      
                      <div className="bg-dark-teal-100 p-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                            <ShoppingBagIcon className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <p className="text-white text-sm">Grocery Store</p>
                            <p className="text-xs text-white/60">Yesterday</p>
                          </div>
                        </div>
                        <p className="text-white font-medium">-₿0.0008</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Bar */}
                  <div className="bg-dark-teal-50 p-3 flex justify-around">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                        <HomeIcon className="w-3 h-3 text-teal-400" />
                      </div>
                      <p className="text-xs text-white/60 mt-1">Home</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-dark-teal-100 flex items-center justify-center">
                        <QrCode className="w-3 h-3 text-white/60" />
                      </div>
                      <p className="text-xs text-white/60 mt-1">Scan</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-dark-teal-100 flex items-center justify-center">
                        <UsersIcon className="w-3 h-3 text-white/60" />
                      </div>
                      <p className="text-xs text-white/60 mt-1">Profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Download CTA */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">
                Ready to <span className="gradient-text">experience</span> the future of payments?
              </h2>
              
              <p className="text-gray-300 mb-8">
                Download BlockPay now and join thousands of users who are already enjoying secure, 
                lightning-fast blockchain payments for their daily transactions.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                  <span>Quick setup in under 2 minutes</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                  <span>Secure multi-layer encryption</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                  <span>Zero transaction fees for first 30 days</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                  <span>24/7 customer support</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-6 px-6 rounded-xl">
                  <Download className="w-5 h-5" /> Download for iOS
                </Button>
                <Button variant="outline" className="flex items-center gap-2 border-teal-700 hover:border-teal-500 bg-transparent hover:bg-dark-teal-50 text-white py-6 px-6 rounded-xl">
                  <Download className="w-5 h-5" /> Download for Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple icons for the phone UI
const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const CoffeeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8h1a4 4 0 010 8h-1" />
    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

export default CTASection;
