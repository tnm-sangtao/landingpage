import { useState, useEffect } from "react";
import { Button, BentoCard, AmbientGlow } from "@/components/shared";
import { Mail, MapPin, Sparkles, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    restaurantName: "",
    city: "",
    solution: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic SEO Metadata and JSON-LD Schema injection for Google Crawler
  useEffect(() => {
    // 1. Update Title and Meta Description
    document.title = "Contact GastroHub - Start Free Trial & Get F&B Digitization Consultation";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Contact GastroHub specialists to activate your 14-day free trial. Digitize your menu, automate scheduling, and explode your restaurant sales today."
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Contact GastroHub specialists to activate your 14-day free trial. Digitize your menu, automate scheduling, and explode your restaurant sales today.";
      document.head.appendChild(newMeta);
    }

    // 2. Inject Structured JSON-LD Data for SEO
    const schemaId = "gastrohub-contact-jsonld";
    let script = document.getElementById(schemaId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact GastroHub",
        "description": "Start a 14-day free trial of GastroHub Pro and connect with F&B operations consultants.",
        "url": window.location.href,
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "GastroHub Platform",
          "email": "hello@gastrohub.vn",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12th Floor, Bitexco Financial Tower",
            "addressLocality": "District 1",
            "addressRegion": "Ho Chi Minh City",
            "postalCode": "700000",
            "addressCountry": "VN"
          }
        }
      });
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup injected script on unmount
      const scriptToRemove = document.getElementById(schemaId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request with luxury micro-delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen text-zinc-900 relative overflow-hidden">
      {/* Decorative ambient glows */}
      <AmbientGlow color="emerald" className="top-1/4 left-0 opacity-15 scale-150" />
      <AmbientGlow color="sky" className="bottom-1/4 right-0 opacity-10 scale-125" />

      <section className="pt-24 pb-24 md:pt-32 md:pb-32 z-10 hero-dot-bg">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Info & Trust Badges */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-zinc-900">
                  Start your restaurant digitization journey.
                </h1>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Share your restaurant's operational model. GastroHub's engineers and operations specialists are ready to guide you in boosting profit margins.
                </p>
              </div>

              {/* Unified Contact Info Panel */}
              <div className="bg-white/60 border border-zinc-200/50 rounded-3xl p-8 space-y-6 shadow-sm backdrop-blur-sm">
                {/* Contact Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Contact Email</h4>
                    <a href="mailto:hello@gastrohub.vn" className="text-base font-semibold text-zinc-900 hover:text-primary transition-colors block mt-0.5">
                      hello@gastrohub.vn
                    </a>
                  </div>
                </div>

                <div className="h-px bg-zinc-100" />

                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Head Office</h4>
                    <address className="not-italic text-sm text-zinc-600 mt-1 leading-relaxed">
                      12th Floor, Bitexco Financial Tower,<br />
                      District 1, Ho Chi Minh City, Vietnam
                    </address>
                  </div>
                </div>

                <div className="h-px bg-zinc-100" />

                {/* Support Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Support Availability</h4>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      24/7 Technical support — Email response within 10 minutes
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2.5">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  ].map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Restaurant Owner ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-xs text-zinc-500">
                  Trusted by over <strong className="text-zinc-900">500+ restaurant owners</strong> in Vietnam & Germany.
                </p>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-right duration-700">
              <div className="bg-white border border-zinc-200/60 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden hover:border-primary/20 transition-all duration-500">
                <AmbientGlow color="emerald" className="opacity-5 scale-110 top-0 right-0" />
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 border border-primary/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-3">Activation Request Submitted!</h3>
                    <p className="text-zinc-600 text-base max-w-md mb-6 leading-relaxed">
                      Thank you, <strong className="text-zinc-900">{formData.fullName}</strong>. Your 14-day GastroHub Pro trial for <strong>{formData.restaurantName}</strong> has been scheduled for cloud provisioning. Our engineering team will email you at <strong>{formData.email}</strong> within 10 minutes.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="px-6 py-2.5 text-sm border-zinc-200 text-zinc-800 hover:border-primary hover:text-primary bg-white shadow-sm">
                      Back to Contact Page
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                      <h2 className="text-xl font-bold text-zinc-900">Register for Free Trial & Get Consultation</h2>
                      <p className="text-sm text-zinc-500 mt-1">Experience all features for 14 days, no credit card required.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-zinc-700">
                          Your Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          autoComplete="name"
                          aria-required="true"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none px-4 py-3 rounded-2xl text-sm text-zinc-900 transition-all placeholder:text-zinc-400"
                        />
                      </div>

                      {/* Restaurant Name */}
                      <div className="space-y-2">
                        <label htmlFor="restaurantName" className="block text-sm font-semibold text-zinc-700">
                          Restaurant Name <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          id="restaurantName"
                          name="restaurantName"
                          value={formData.restaurantName}
                          onChange={handleChange}
                          placeholder="Gastro Bistro"
                          autoComplete="organization"
                          aria-required="true"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none px-4 py-3 rounded-2xl text-sm text-zinc-900 transition-all placeholder:text-zinc-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* City */}
                      <div className="space-y-2">
                        <label htmlFor="city" className="block text-sm font-semibold text-zinc-700">
                          City <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Ho Chi Minh City"
                          autoComplete="address-level2"
                          aria-required="true"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none px-4 py-3 rounded-2xl text-sm text-zinc-900 transition-all placeholder:text-zinc-400"
                        />
                      </div>

                      {/* Solution */}
                      <div className="space-y-2">
                        <label htmlFor="solution" className="block text-sm font-semibold text-zinc-700">
                          Solution of Interest <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            id="solution"
                            name="solution"
                            value={formData.solution}
                            onChange={handleChange}
                            className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none px-4 py-3 rounded-2xl text-sm text-zinc-900 transition-all cursor-pointer appearance-none"
                          >
                            <option value="" className="bg-white text-zinc-400" disabled>-- Select F&B Solution --</option>
                            <option value="digital-menu" className="bg-white text-zinc-900">Digital Menu (Smart Digital Menu)</option>
                            <option value="ca-kip" className="bg-white text-zinc-900">Automated Shifts (Staff Management)</option>
                            <option value="ai-menu" className="bg-white text-zinc-900">AI Menu (Translation & Optimization Assistant)</option>
                            <option value="all" className="bg-white text-zinc-900">All-in-One Ecosystem</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-zinc-700">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="johndoe@gmail.com"
                          autoComplete="email"
                          aria-required="true"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none px-4 py-3 rounded-2xl text-sm text-zinc-900 transition-all placeholder:text-zinc-400"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700">
                          Phone Number <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+84 90 123 4567"
                          autoComplete="tel"
                          aria-required="true"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none px-4 py-3 rounded-2xl text-sm text-zinc-900 transition-all placeholder:text-zinc-400"
                        />
                      </div>
                    </div>

                    {/* Message (Optional) */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-zinc-700">
                        Special Requests or Additional Notes (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Briefly describe your restaurant model or your digitization goals..."
                        className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none px-4 py-3 rounded-2xl text-sm text-zinc-900 transition-all placeholder:text-zinc-400 resize-none"
                      />
                    </div>

                    {/* Privacy check */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <div className="flex items-center h-5">
                        <input
                          required
                          id="privacy"
                          type="checkbox"
                          className="w-4 h-4 rounded border-zinc-300 text-primary focus:ring-primary bg-zinc-50"
                        />
                      </div>
                      <label htmlFor="privacy" className="text-xs text-zinc-500 leading-normal cursor-pointer select-none">
                        I agree to receive emails and consultation calls from GastroHub. Your information is kept 100% confidential in accordance with our <span className="text-primary hover:underline">Privacy Policy</span>.
                      </label>
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="solid"
                        disabled={isSubmitting}
                        className="w-full py-4 text-base font-semibold rounded-2xl flex items-center justify-center gap-2 group transition-all duration-300 active:scale-95 disabled:opacity-75 disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending Request...
                          </>
                        ) : (
                          <>
                            Submit Registration Request
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
