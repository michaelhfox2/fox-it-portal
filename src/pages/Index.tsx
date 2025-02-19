
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe2, Shield, Briefcase, Server, Users, ChevronDown } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Virtual CIO",
      description: "Strategic technology leadership and guidance for your enterprise",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Project Management",
      description: "End-to-end project planning and implementation",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "IT Support",
      description: "Advanced support services across all technology stacks",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        </div>
        
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-fox-dark mb-6">
              Fox 2 IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-fox-gray max-w-2xl mx-auto mb-8">
              Global Enterprise IT Services Provider
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-fox-purple text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-fox-dark" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4" id="services">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-fox-dark mb-4"
            >
              Our Services
            </motion.h2>
            <p className="text-fox-gray text-lg max-w-2xl mx-auto">
              Comprehensive enterprise IT solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-fox-purple mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-fox-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-fox-gray">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-fox-dark text-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Global Reach, Local Expertise
            </h2>
            <div className="flex items-center justify-center mb-8">
              <Users className="h-16 w-16 text-fox-purple" />
            </div>
            <p className="text-lg text-gray-300 mb-8">
              Based in South Africa, serving enterprises worldwide with comprehensive IT solutions and support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-fox-dark text-center mb-8">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fox-purple"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fox-purple"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fox-purple"
              />
              <button className="w-full bg-fox-purple text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
