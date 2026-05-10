"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import {
  Stethoscope, Smile, Layers, HeartPulse,
  Scissors, Sparkles, Wand2, Zap, ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-7 h-7" />,
  Smile: <Smile className="w-7 h-7" />,
  Layers: <Layers className="w-7 h-7" />,
  HeartPulse: <HeartPulse className="w-7 h-7" />,
  Scissors: <Scissors className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
  Wand2: <Wand2 className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
};

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-100",   badge: "bg-blue-100 text-blue-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", badge: "bg-purple-100 text-purple-700" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-600",   border: "border-teal-100",   badge: "bg-teal-100 text-teal-700" },
  red:    { bg: "bg-red-50",    text: "text-red-600",    border: "border-red-100",    badge: "bg-red-100 text-red-700" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100", badge: "bg-orange-100 text-orange-700" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-100", badge: "bg-yellow-100 text-yellow-700" },
  pink:   { bg: "bg-pink-50",   text: "text-pink-600",   border: "border-pink-100",   badge: "bg-pink-100 text-pink-700" },
  green:  { bg: "bg-green-50",  text: "text-green-600",  border: "border-green-100",  badge: "bg-green-100 text-green-700" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold tracking-widest uppercase mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Our Complete Range of <span className="text-primary">Dental Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            From routine check-ups to advanced procedures — we offer comprehensive, affordable dental care under one roof with transparent pricing in Indian Rupees.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICE_CATEGORIES.map((category, index) => {
              const colors = colorMap[category.color] ?? colorMap.blue;
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Category Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Icon badge */}
                    <div className={`absolute top-4 left-4 ${colors.badge} p-3 rounded-2xl shadow-lg`}>
                      {iconMap[category.iconName]}
                    </div>
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                      <p className="text-white/80 text-sm mt-1">{category.tagline}</p>
                    </div>
                  </div>

                  {/* Sub-services list */}
                  <div className="p-6">
                    <p className="text-foreground/70 mb-5 text-sm leading-relaxed">{category.description}</p>

                    <div className="space-y-3 mb-6">
                      {category.subServices.map((sub) => (
                        <div
                          key={sub.name}
                          className={`flex items-center justify-between p-3 rounded-xl ${colors.bg} border ${colors.border}`}
                        >
                          <span className={`font-semibold text-sm ${colors.text}`}>{sub.name}</span>
                          <span className="font-bold text-foreground text-sm bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                            {sub.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services/${category.slug}`}
                      className={`inline-flex items-center gap-2 font-bold text-sm ${colors.text} hover:gap-3 transition-all`}
                    >
                      View Full Details & Procedure
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-white/80 text-lg mb-8">Call us or WhatsApp us today. Consultations start at just ₹200.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917020911752"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
            >
              📞 Call: 070209 11752
            </a>
            <a
              href="https://wa.me/917020911752"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors shadow-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
