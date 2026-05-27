import { useState } from "react";
import { Button } from "@/components/shared";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="pt-32 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-16">
            
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
                Hãy trò chuyện về nhà hàng của bạn.
              </h1>
              <p className="text-muted-foreground text-lg">
                Đội ngũ chuyên gia F&B của chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp phù hợp nhất.
              </p>
              
              <div className="space-y-6 pt-8 border-t border-border">
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Email</div>
                  <a href="mailto:hello@gastrohub.vn" className="text-xl font-bold hover:text-primary transition-colors">hello@gastrohub.vn</a>
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Văn phòng</div>
                  <address className="not-italic text-lg">
                    Tầng 12, Tòa nhà Bitexco,<br />
                    Quận 1, TP. Hồ Chí Minh
                  </address>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center h-full py-16 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Cảm ơn bạn.</h3>
                    <p className="text-muted-foreground text-lg">Đội ngũ GastroHub sẽ liên hệ trong vòng 24 giờ.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="text-2xl md:text-3xl leading-[1.8] font-medium animate-in fade-in duration-500">
                    <span className="text-muted-foreground">Xin chào GastroHub,</span><br/>
                    <span>Tôi là </span>
                    <input required type="text" placeholder="tên của bạn" className="bg-transparent border-b-2 border-border focus:border-primary outline-none px-2 w-48 text-center text-primary placeholder:text-muted-foreground/30 transition-colors" />
                    <span> đang quản lý </span>
                    <input required type="text" placeholder="tên nhà hàng" className="bg-transparent border-b-2 border-border focus:border-primary outline-none px-2 w-56 text-center text-primary placeholder:text-muted-foreground/30 transition-colors" />
                    <br/>
                    <span> tại </span>
                    <input required type="text" placeholder="thành phố" className="bg-transparent border-b-2 border-border focus:border-primary outline-none px-2 w-40 text-center text-primary placeholder:text-muted-foreground/30 transition-colors" />
                    <span>. Tôi muốn tìm hiểu về </span>
                    <select required className="bg-transparent border-b-2 border-border focus:border-primary outline-none text-primary cursor-pointer transition-colors appearance-none pb-1">
                      <option value="" disabled selected hidden>chọn giải pháp</option>
                      <option value="digital-menu">Digital Menu</option>
                      <option value="ca-kip">Ca kíp tự động</option>
                      <option value="ai-menu">AI Menu</option>
                      <option value="all">Tất cả</option>
                    </select>
                    <span>.</span><br/>
                    <span>Bạn có thể liên hệ tôi qua email </span>
                    <input required type="email" placeholder="địa chỉ email" className="bg-transparent border-b-2 border-border focus:border-primary outline-none px-2 w-64 text-center text-primary placeholder:text-muted-foreground/30 transition-colors" />
                    <span> hoặc số điện thoại </span>
                    <input required type="tel" placeholder="số điện thoại" className="bg-transparent border-b-2 border-border focus:border-primary outline-none px-2 w-48 text-center text-primary placeholder:text-muted-foreground/30 transition-colors" />
                    <span>.</span>
                    
                    <div className="mt-12">
                      <Button type="submit" variant="solid" className="px-10 py-5 text-lg">
                        Gửi thông tin
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
