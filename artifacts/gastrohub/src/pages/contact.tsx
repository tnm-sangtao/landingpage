import { useState, useEffect } from "react";
import { Button, BentoCard } from "@/components/shared";
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
    <div className="flex flex-col w-full bg-background min-h-screen relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="pt-24 pb-24 md:pt-32 md:pb-32 z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Info & Trust Badges */}
            <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] bg-primary/10 text-primary rounded-full border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  F&B Operations Consulting
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                  Start your restaurant digitization journey.
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Share your restaurant's operational model. GastroHub's engineers and operations specialists are ready to guide you in boosting profit margins.
                </p>
              </div>

              {/* Info Cards styled in Bento Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-4">
                <BentoCard className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Contact Email</h4>
                    <a href="mailto:hello@gastrohub.vn" className="text-base font-bold text-foreground hover:text-primary transition-colors block mt-1">
                      hello@gastrohub.vn
                    </a>
                  </div>
                </BentoCard>

                <BentoCard className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Head Office</h4>
                    <address className="not-italic text-sm text-foreground mt-1 leading-relaxed">
                      12th Floor, Bitexco Financial Tower,<br />
                      District 1, Ho Chi Minh City, Vietnam
                    </address>
                  </div>
                </BentoCard>

                <BentoCard className="p-6 space-y-3 sm:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Support Availability</h4>
                    <p className="text-sm font-semibold text-foreground mt-1 leading-relaxed">
                      24/7 Technical support — Email response within 10 minutes
                    </p>
                  </div>
                </BentoCard>
              </div>

              {/* Trust Badge */}
              <div className="pt-6 border-t border-border flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Trusted by over <strong className="text-foreground">500+ restaurant owners</strong> in Vietnam & Germany.
                </p>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-right duration-700">
              <div className="bg-card/65 backdrop-blur-md border border-card-border p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Activation Request Submitted!</h3>
                    <p className="text-muted-foreground text-base max-w-md mb-6 leading-relaxed">
                      Thank you, <strong className="text-foreground">{formData.fullName}</strong>. Your 14-day GastroHub Pro trial for <strong>{formData.restaurantName}</strong> has been scheduled for cloud provisioning. Our engineering team will email you at <strong>{formData.email}</strong> within 10 minutes.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="px-6 py-2.5 text-sm">
                      Back to Contact Page
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">Register for Free Trial & Get Consultation</h2>
                      <p className="text-sm text-muted-foreground mt-1">Experience all features for 14 days, no credit card required.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-foreground">
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
                          className="w-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 rounded-2xl text-sm transition-all placeholder:text-muted-foreground/35"
                        />
                      </div>

                      {/* Restaurant Name */}
                      <div className="space-y-2">
                        <label htmlFor="restaurantName" className="block text-sm font-semibold text-foreground">
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
                          className="w-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 rounded-2xl text-sm transition-all placeholder:text-muted-foreground/35"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* City */}
                      <div className="space-y-2">
                        <label htmlFor="city" className="block text-sm font-semibold text-foreground">
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
                          className="w-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 rounded-2xl text-sm transition-all placeholder:text-muted-foreground/35"
                        />
                      </div>

                      {/* Solution */}
                      <div className="space-y-2">
                        <label htmlFor="solution" className="block text-sm font-semibold text-foreground">
                          Solution of Interest <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            id="solution"
                            name="solution"
                            value={formData.solution}
                            onChange={handleChange}
                            className="w-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 rounded-2xl text-sm transition-all cursor-pointer appearance-none text-foreground"
                          >
                            <option value="" disabled>-- Select F&B Solution --</option>
                            <option value="digital-menu">Digital Menu (Smart Digital Menu)</option>
                            <option value="ca-kip">Automated Shifts (Staff Management)</option>
                            <option value="ai-menu">AI Menu (Translation & Optimization Assistant)</option>
                            <option value="all">All-in-One Ecosystem</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
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
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground">
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
                          className="w-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 rounded-2xl text-sm transition-all placeholder:text-muted-foreground/35"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
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
                          className="w-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 rounded-2xl text-sm transition-all placeholder:text-muted-foreground/35"
                        />
                      </div>
                    </div>

                    {/* Message (Optional) */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                        Special Requests or Additional Notes (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Briefly describe your restaurant model or your digitization goals..."
                        className="w-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 rounded-2xl text-sm transition-all placeholder:text-muted-foreground/35 resize-none"
                      />
                    </div>

                    {/* Privacy check */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <div className="flex items-center h-5">
                        <input
                          required
                          id="privacy"
                          type="checkbox"
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                      </div>
                      <label htmlFor="privacy" className="text-xs text-muted-foreground leading-normal cursor-pointer select-none">
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
