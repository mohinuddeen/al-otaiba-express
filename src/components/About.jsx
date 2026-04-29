import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

function About() {
  const milestones = [
    { year: '2015', title: 'Company Founded', description: 'AOE Holding established in Dubai' },
    { year: '2017', title: 'First Acquisition', description: 'Entered real estate market' },
    { year: '2019', title: 'Global Expansion', description: 'Launched international brands' },
    { year: '2021', title: 'Digital Transformation', description: 'Expanded into e-commerce' },
    { year: '2024', title: 'Healthcare Innovation', description: 'Launched German Health Hub' },
  ];

  const values = [
    { icon: Award, title: 'Excellence', description: 'Committed to quality in everything we do' },
    { icon: Users, title: 'Innovation', description: 'Constantly evolving with market trends' },
    { icon: Globe, title: 'Global Reach', description: 'Operating across international markets' },
    { icon: TrendingUp, title: 'Growth', description: 'Strategic expansion and development' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About AOE Holding</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Al Otaiba Express Trading is a trusted B2B retail partner dedicated to supplying businesses with quality products, competitive pricing, and efficient service. Built for business and driven by trust, we focus on consistency, reliability, and speed to keep our clients’ operations running smoothly. With a commitment to long-term partnerships, we deliver practical solutions that support growth and everyday business success.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-4 group-hover:bg-blue-100 transition">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-navy-900">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-xl shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-blue-600 font-bold text-xl">{milestone.year}</span>
                      <h4 className="text-lg font-bold text-navy-900 mt-2">{milestone.title}</h4>
                      <p className="text-gray-600 mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default About;