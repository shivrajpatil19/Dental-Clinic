import { SERVICE_CATEGORIES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, IndianRupee, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return SERVICE_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string; priceBg: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-200",   badge: "bg-blue-100",   priceBg: "bg-blue-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", badge: "bg-purple-100", priceBg: "bg-purple-600" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-600",   border: "border-teal-200",   badge: "bg-teal-100",   priceBg: "bg-teal-600" },
  red:    { bg: "bg-red-50",    text: "text-red-600",    border: "border-red-200",    badge: "bg-red-100",    priceBg: "bg-red-600" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", badge: "bg-orange-100", priceBg: "bg-orange-600" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200", badge: "bg-yellow-100", priceBg: "bg-yellow-500" },
  pink:   { bg: "bg-pink-50",   text: "text-pink-600",   border: "border-pink-200",   badge: "bg-pink-100",   priceBg: "bg-pink-600" },
  green:  { bg: "bg-green-50",  text: "text-green-600",  border: "border-green-200",  badge: "bg-green-100",  priceBg: "bg-green-600" },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = SERVICE_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const colors = colorMap[category.color] ?? colorMap.blue;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
          <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${colors.text} drop-shadow`}>
            {category.tagline}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">{category.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
          <p className="text-lg text-foreground/70 leading-relaxed">{category.description}</p>
        </div>

        {/* Sub-services */}
        <div className="space-y-12">
          {category.subServices.map((sub, index) => (
            <div
              key={sub.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Sub-service Header */}
              <div className={`${colors.bg} border-b ${colors.border} px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}>
                <div className="flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-full ${colors.badge} ${colors.text} font-bold text-lg flex items-center justify-center flex-shrink-0`}>
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">{sub.name}</h2>
                </div>
                <div className={`flex items-center gap-2 ${colors.priceBg} text-white px-6 py-2 rounded-full font-bold text-xl shadow-sm self-start sm:self-auto`}>
                  <IndianRupee className="w-5 h-5" />
                  <span>{sub.price.replace("₹", "").replace("Contact for Pricing", "Contact Us")}</span>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">About This Treatment</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{sub.description}</p>
                  <div className="space-y-2">
                    {["Expert doctors with years of experience", "Painless procedures with local anaesthesia", "Modern equipment & sterile environment"].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-step Procedure */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Step-by-Step Procedure</h3>
                  <ol className="space-y-3">
                    {sub.procedure.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <span className={`w-6 h-6 rounded-full ${colors.badge} ${colors.text} font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          {stepIndex + 1}
                        </span>
                        <span className="text-foreground/70 text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Summary Box */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-foreground mb-6">Pricing Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.subServices.map((sub) => (
              <div
                key={sub.name}
                className={`flex items-center justify-between p-4 rounded-2xl ${colors.bg} border ${colors.border}`}
              >
                <div className="flex items-center gap-2">
                  <ChevronRight className={`w-4 h-4 ${colors.text}`} />
                  <span className="font-medium text-sm text-foreground">{sub.name}</span>
                </div>
                <span className={`font-bold text-sm ${colors.text}`}>{sub.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground/50 mt-4">
            * Prices are indicative. Final pricing may vary based on case complexity. Please call us or visit for a personalized quote.
          </p>
        </div>

        {/* Book CTA */}
        <div className="mt-10 text-center">
          <p className="text-foreground/60 mb-4 text-sm">Have questions? We are happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917020911752"
              className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-md inline-flex items-center justify-center gap-2"
            >
              📞 Book an Appointment
            </a>
            <a
              href="https://wa.me/917020911752"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors shadow-md inline-flex items-center justify-center gap-2"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
