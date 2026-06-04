"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Menu, X, ChevronRight, CheckCircle2, Globe, Shield, 
  Cpu, Building2, Store, Activity, Smartphone, Server, 
  Users, TrendingUp, DollarSign, HeartHandshake, FileText, 
  Mic, Briefcase
} from "lucide-react";
import Link from "next/link";

// Mock Data
const stats = [
  { label: "Businesses Served", value: "10,000+" },
  { label: "Vendors Registered", value: "50,000+" },
  { label: "Projects Completed", value: "2,500+" },
  { label: "Customer Satisfaction", value: "99.9%" }
];

const products = [
  {
    title: "LocalPro",
    description: "Business directory helping businesses increase visibility, generate leads, and connect with customers.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    features: ["Business Listings", "Lead Generation", "Reviews & Ratings"],
    link: "localpro.vensaas.com"
  },
  {
    title: "Vensaas eCommerce",
    description: "AI-powered eCommerce and reseller platform to scale your online sales.",
    icon: <Store className="w-8 h-8 text-blue-600" />,
    features: ["Product Catalog", "AI Product Descriptions", "Marketing Automation"],
    link: "rizzri.vensaas.com"
  },
  {
    title: "Vensaas Labs",
    description: "Cloud pathology laboratory management software.",
    icon: <Activity className="w-8 h-8 text-blue-600" />,
    features: ["Sample Collection", "Report Generation", "WhatsApp Delivery"],
    link: "labs.vensaas.com/demo"
  },
  {
    title: "SafeGate",
    description: "Apartment, gated community and society management platform.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    features: ["Visitor Management", "Maintenance Billing", "Security Monitoring"],
    link: "vensaas.com/safegate"
  },
  {
    title: "AI Voice",
    description: "Generate realistic voiceovers using your own voice.",
    icon: <Mic className="w-8 h-8 text-blue-600" />,
    features: ["Voice Cloning", "Telugu Voiceovers", "Social Media Ads"],
    link: "aivoice.vensaas.com"
  },
  {
    title: "Bazaro",
    description: "AI-powered marketplace platform to connect buyers and sellers.",
    icon: <Store className="w-8 h-8 text-blue-600" />,
    features: ["B2B Marketplace", "Vendor Management", "Order Tracking"],
    link: "bazaro.vensaas.com"
  }
];

const aiFeatures = [
  "AI Content Writing",
  "AI Product Photography",
  "AI Voice Generation",
  "AI Marketing Assistant",
  "AI Business Analytics",
  "AI Automation Workflows",
  "AI Customer Support",
  "AI Lead Generation"
];

const faqs = [
  { q: "What is Vensaas?", a: "Vensaas is an AI-powered multi-business ecosystem helping organizations manage and grow operations through cloud-based software." },
  { q: "Is my data secure?", a: "Yes, we use enterprise-grade encryption, SSL, and regular cloud backups to ensure your data is always safe." },
  { q: "How do I become a partner?", a: "You can apply through our Partner Program page. We offer attractive recurring commissions for our partners." },
  { q: "Do you offer custom development?", a: "Absolutely. Our engineering team can build custom web apps, mobile apps, and ERP solutions tailored to your needs." }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="font-heading font-bold text-2xl text-slate-900 tracking-tight">Vensaas</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="#products" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Products</Link>
              <Link href="#solutions" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Solutions</Link>
              <Link href="#partners" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Partners</Link>
              <Link href="#company" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Company</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://sales.vensaas.com" className="text-blue-600 font-medium hover:text-blue-700 px-4 py-2 transition-colors">
                Become a Partner
              </a>
              <button className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Request Demo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 -z-10"></div>
          
          {/* Abstract BG Shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                Transform Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AI-Powered</span> Digital Solutions
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                From Local Listings to E-Commerce, Healthcare, Community Management, and Custom Software Development — Vensaas helps businesses automate, scale, and succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="w-full sm:w-auto bg-blue-600 text-white font-medium px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2">
                  Start Free Trial <ChevronRight className="w-5 h-5" />
                </button>
                <a href="https://sales.vensaas.com" className="w-full sm:w-auto bg-white text-slate-700 font-medium px-8 py-4 rounded-xl hover:bg-slate-50 transition-all shadow-md border border-slate-200 text-lg flex items-center justify-center">
                  Become a Partner
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-8">Trusted by Businesses Across India</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</span>
                    <span className="text-slate-500 font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5" /> <span>Secure Cloud Platform</span></div>
              <div className="flex items-center gap-2"><Server className="w-5 h-5" /> <span>Multi-Tenant Architecture</span></div>
              <div className="flex items-center gap-2"><Cpu className="w-5 h-5" /> <span>AI Enabled Workflows</span></div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Products Ecosystem</h2>
              <p className="text-lg text-slate-600">One Platform. Unlimited Business Possibilities. Discover our suite of specialized solutions.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-2">{product.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-slate-700 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href={`https://${product.link}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    Explore {product.title} <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Integration Section */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Artificial Intelligence Built Into Every Product</h2>
                <p className="text-xl text-slate-300 mb-10">
                  We don't just add AI as an afterthought. It's the core engine that powers automation, insights, and growth across the entire Vensaas ecosystem.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {aiFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                      <span className="font-medium text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Abstract AI Diagram */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl absolute inset-0"></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                  <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-slate-400 font-mono text-sm">vensaas-ai-core.ts</span>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="text-cyan-400">import <span className="text-slate-300">{`{ VensaasAI }`}</span> from <span className="text-emerald-400">'@vensaas/core'</span>;</div>
                    <br/>
                    <div className="text-slate-300">const ecosystem = new <span className="text-blue-400">VensaasAI</span>({`{`}</div>
                    <div className="text-slate-300 pl-4">tenantId: <span className="text-emerald-400">'bus_789'</span>,</div>
                    <div className="text-slate-300 pl-4">modules: [<span className="text-emerald-400">'Commerce'</span>, <span className="text-emerald-400">'LocalPro'</span>],</div>
                    <div className="text-slate-300 pl-4">automationLevel: <span className="text-emerald-400">'MAX'</span></div>
                    <div className="text-slate-300">{`});`}</div>
                    <br/>
                    <div className="text-slate-500">// AI analyzing and executing...</div>
                    <div className="text-emerald-400">✓ Generated 150 SEO product descriptions</div>
                    <div className="text-emerald-400">✓ Cloned voice for new marketing campaign</div>
                    <div className="text-emerald-400">✓ Identified 45 high-intent local leads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Vensaas */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Vensaas vs Traditional Solutions</h2>
              <p className="text-lg text-slate-600">Why thousands of businesses are switching to our unified platform.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-6">
                <div className="font-semibold text-slate-600">Feature</div>
                <div className="font-bold text-slate-900 text-center text-lg">Vensaas</div>
                <div className="font-semibold text-slate-500 text-center">Traditional IT</div>
              </div>
              
              {[
                "Cost & Deployment", "Platform Integration", "AI Capabilities", 
                "Mobile Accessibility", "Continuous Updates", "Support Ecosystem"
              ].map((feature, idx) => (
                <div key={idx} className="grid grid-cols-3 border-b border-slate-100 p-6 items-center">
                  <div className="font-medium text-slate-700">{feature}</div>
                  <div className="flex justify-center text-emerald-500"><CheckCircle2 className="w-6 h-6" /></div>
                  <div className="flex justify-center text-slate-300"><X className="w-6 h-6" /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Program */}
        <section id="partners" className="py-24 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Earn With Vensaas</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Join as a Vensaas Partner and earn recurring commissions by referring customers and businesses. Ideal for sales professionals, tech agencies, and community leaders.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Monthly Recurring Commissions", "Dedicated Partner Dashboard", "Marketing & Training Support", "Exclusive Territory Opportunities"].map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-blue-50 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-300 mr-3" /> {benefit}
                    </li>
                  ))}
                </ul>
                <a href="https://sales.vensaas.com" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg text-lg text-center">
                  Become a Partner Today
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Briefcase />, title: "Sales Partner" },
                  { icon: <Globe />, title: "Area Partner" },
                  { icon: <HeartHandshake />, title: "Service Partner" },
                  { icon: <Cpu />, title: "Technology Partner" }
                ].map((ptype, idx) => (
                  <div key={idx} className="bg-blue-700/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500">
                    <div className="text-blue-200 mb-4">{ptype.icon}</div>
                    <h3 className="font-bold text-lg">{ptype.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-slate-200 p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-lg text-slate-900 list-none">
                    {faq.q}
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="font-heading font-bold text-2xl text-white tracking-tight">Vensaas</span>
              </Link>
              <p className="mb-6 max-w-sm">One Platform. Unlimited Business Possibilities. Build, Manage & Scale with Vensaas.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">LocalPro</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Labs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SafeGate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Voice</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Vensaas Technologies. All rights reserved.</p>
            <p className="flex items-center gap-1 mt-4 md:mt-0">Made with <HeartHandshake className="w-4 h-4 text-blue-500" /> in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
