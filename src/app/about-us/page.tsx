// src/app/about-us/page.tsx
'use client';

import { useState } from 'react';
import { 
  Users, 
  Globe, 
  Award, 
  Target, 
  Heart, 
  Lightbulb,
  TrendingUp,
  Calendar,
  MapPin,
  Star,
  Leaf,
  Zap,
  Shield,
  ArrowRight,
  Play,
  CheckCircle,
  Building,
  Rocket,
  DollarSign
} from 'lucide-react';

// Types
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  milestone?: string;
}

interface Statistic {
  number: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-black py-24 mt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold">
                <Building className="w-4 h-4 mr-2" />
                SINCE 2016
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Pioneering the
                <span className="text-yellow-400"> Future</span>
                <br />
                of Mobility
              </h1>
              
              <p className="text-xl text-black leading-relaxed max-w-lg">
                From a vision to create greener transportation, DYU has sold over 1,000,000 smart electric bicycles worldwide, revolutionizing urban mobility one ride at a time.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2016</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Bikes Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">60+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Countries</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center group">
                Our Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Journey
              </button>
            </div>
          </div>

          {/* Right Content - Company Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                <p className="text-gray-400">Company Team Image Here</p>
              </div>
            </div>
            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
              Top 50 Brand
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
              $14M Funded
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mission & Vision Section
const MissionVisionSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Our <span className="text-yellow-400">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With a mission to make smart travel accessible to all, we&apos;re building the future of sustainable transportation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To make smart travel accessible to all while striving for a cleaner community and a greener planet. We believe that every journey should be efficient, sustainable, and enjoyable.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a greener world by providing sustainable and efficient transportation solutions, championing the pillars of technology and talent, fueled by a conviction that clean energy is the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Company Timeline
const TimelineSection: React.FC = () => {
  const timeline: TimelineEvent[] = [
    {
      year: "2016",
      title: "DYU Brand Established",
      description: "DYU brand established, secured tens of millions in venture capital",
      milestone: "Foundation"
    },
    {
      year: "2017",
      title: "Record-Breaking Crowdfunding",
      description: "Product crowdfunding raised $1,700,000, setting a record in the e-bike industry",
      milestone: "$1.7M Raised"
    },
    {
      year: "2018",
      title: "US Market Entry",
      description: "DYU entered Costco in the United States",
      milestone: "Costco Partnership"
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Operations centers established in the United States, Poland, Netherlands, and the United Kingdom",
      milestone: "4 Operation Centers"
    },
    {
      year: "2021",
      title: "Worldwide Reach",
      description: "Successfully expanded to over 60 countries and regions worldwide",
      milestone: "60+ Countries"
    },
    {
      year: "2022",
      title: "Million Users Milestone",
      description: "Global user base surpassed 1 million+",
      milestone: "1M+ Users"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Ranked among the top 50 emerging brands",
      milestone: "Top 50 Brand"
    },
    {
      year: "2024",
      title: "Major Funding Round",
      description: "Completed $14 million in financing",
      milestone: "$14M Series"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Our <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From startup to global leader - here&apos;s how we built the future of electric mobility
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400 hidden lg:block"></div>
          
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-6`}>
                {/* Timeline Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} text-center lg:text-inherit`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                    {/* Arrow for desktop */}
                    <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 ${index % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-yellow-400">{event.year}</span>
                        {event.milestone && (
                          <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-bold">
                            {event.milestone}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-black">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-black" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Empty space for opposite side */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Company Values Section
const ValuesSection: React.FC = () => {
  const values: Value[] = [
    {
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge technology and design that transforms how people move.",
      icon: Lightbulb
    },
    {
      title: "Sustainability",
      description: "Champions the pillars of technology and talent, fueled by a conviction that clean energy is the future",
      icon: Leaf
    },
    {
      title: "Accessibility",
      description: "Making smart travel accessible to all - ensuring everyone can enjoy efficient, affordable mobility.",
      icon: Heart
    },
    {
      title: "Quality",
      description: "Built with premium parts - every DYU bike represents our commitment to excellence and durability.",
      icon: Shield
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Our <span className="text-yellow-400">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The principles that guide every decision and drive our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Global Impact & Statistics
const ImpactSection: React.FC = () => {
  const stats: Statistic[] = [
    {
      number: "1M+",
      label: "Bikes Sold Worldwide",
      icon: Globe
    },
    {
      number: "60+",
      label: "Countries Served",
      icon: MapPin
    },
    {
      number: "$14M",
      label: "Latest Funding",
      icon: DollarSign
    },
    {
      number: "Top 50",
      label: "Emerging Brand",
      icon: Award
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Global <span className="text-yellow-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Riding a DYU is not just a commute; it&apos;s a statement, a commitment to a sustainable future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-black rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            Making a <span className="text-yellow-400">Difference</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every DYU bike represents a step towards cleaner cities, reduced emissions, and healthier communities. 
            Together with our riders, we&apos;re building a more sustainable world, one journey at a time.
          </p>
          <div className="mt-8">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section (Simplified)
const TeamSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Meet Our <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate innovators behind DYU&apos;s revolutionary electric bikes
          </p>
        </div>

        {/* Team Grid Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Team Member {member} Photo</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-2">Team Member {member}</h3>
                <p className="text-gray-600 mb-4">Executive Role</p>
                <p className="text-gray-500 text-sm">
                  Dedicated to advancing sustainable mobility solutions...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-yellow-400 text-black py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Ready to Join Our Journey?
          </h2>
          
          <p className="text-xl font-semibold">
            Be part of the electric revolution that&apos;s transforming how the world moves
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-yellow-400 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center">
              <Rocket className="w-6 h-6 mr-2" />
              Explore Our Bikes
            </button>
            <button className="border-2 border-black text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all">
              Contact Us
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm font-semibold">
            <div className="flex items-center justify-center">
              <Globe className="w-4 h-4 mr-2" />
              <span>Global Shipping Available</span>
            </div>
            <div className="flex items-center justify-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>2-Year Warranty</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-4 h-4 mr-2" />
              <span>1M+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function AboutUsPage(): React.JSX.Element {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionVisionSection />
      <TimelineSection />
      <ValuesSection />
      <ImpactSection />
      <TeamSection />
      <FinalCTASection />
    </main>
  );
}