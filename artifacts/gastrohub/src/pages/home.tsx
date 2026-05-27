import { Link } from "wouter";
import { TechTag, AmbientGlow, BentoCard, ScrollReveal, Button } from "@/components/shared";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <ScrollReveal>
              <TechTag>Restaurant OS v3.0</TechTag>
              <h1 className="mt-8 text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground">
                Vận hành nhà hàng không chút lãng phí.
              </h1>
              <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
                GastroHub tích hợp toàn bộ quy trình: thu hút khách hàng, tự động xếp ca nhân viên và tối ưu thực đơn AI vào một lưới điều khiển sạch sẽ.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/lien-he">
                  <Button variant="solid" className="px-8 py-4 text-lg">Dùng thử miễn phí</Button>
                </Link>
                <Link href="/tinh-nang">
                  <Button variant="outline" className="px-8 py-4 text-lg">Xem demo</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-5 relative h-[500px] w-full lg:block hidden">
            <AmbientGlow color="orange" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
              <div className="bg-card border border-card-border p-6 rounded-2xl shadow-xl w-80 translate-x-10 hover:-translate-y-2 transition-transform duration-500">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Tăng trưởng</div>
                <div className="text-2xl font-bold text-primary">Khách hàng tháng này +32%</div>
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%] rounded-full" />
                </div>
              </div>
              
              <div className="bg-card border border-card-border p-6 rounded-2xl shadow-xl w-72 -translate-x-12 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <div className="w-4 h-4 rounded bg-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Ca kíp tự động</div>
                    <div className="text-sm text-muted-foreground">Đã xếp 42 ca tuần tới</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-card-border p-6 rounded-2xl shadow-xl w-80 translate-x-4 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <TechTag color="purple">AI Menu</TechTag>
                    <div className="mt-2 font-bold">Đề xuất Combo</div>
                  </div>
                  <div className="text-purple-500 font-bold">+18% Revenue</div>
                </div>
              </div>
            </div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <path d="M 150 150 C 200 200, 150 300, 200 350" stroke="hsl(var(--border))" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              <path d="M 250 250 C 300 200, 250 100, 300 150" stroke="hsl(var(--border))" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Pain-point Section */}
      <section className="bg-foreground text-background py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="lg:sticky lg:top-32 self-start">
              <TechTag color="orange">Vấn đề</TechTag>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight">
                Vận hành mệt mỏi vì công cụ phân mảnh?
              </h2>
              <p className="mt-6 text-xl text-muted-foreground/80 leading-relaxed max-w-md">
                Excel lỗi, Zalo trôi tin nhắn, app gọi món riêng biệt đang nuốt chửng 4 tiếng mỗi ngày của bạn.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {[
                {
                  id: "01",
                  title: "Zalo trôi ca, nhân sự đi trễ",
                  desc: "Thông báo ca kíp bị trôi giữa hàng trăm tin nhắn tán gẫu."
                },
                {
                  id: "02",
                  title: "Bảng Excel chấm công rối loạn",
                  desc: "Cuối tháng đối soát công nợ mất hàng giờ, dễ sai sót."
                },
                {
                  id: "03",
                  title: "Khách gọi món bị sót đơn",
                  desc: "Giờ cao điểm menu giấy quá tải, khách đợi lâu, mất trải nghiệm."
                },
                {
                  id: "04",
                  title: "Doanh thu không rõ nguồn gốc",
                  desc: "Không biết món nào bán chạy, bàn nào lợi nhuận cao."
                }
              ].map((card) => (
                <div key={card.id} className="bg-[#121216] border border-[#1E1E24] p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                  <div className="text-primary font-mono font-bold mb-4">{card.id}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features/Solution Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <TechTag>Giải pháp</TechTag>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight">
              Bốn trụ cột tăng trưởng
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[320px]">
            {/* Card 1 */}
            <BentoCard className="md:col-span-2 p-10 flex flex-col md:flex-row gap-10 items-center justify-between">
              <div className="max-w-md z-10">
                <TechTag>Growth Booster</TechTag>
                <h3 className="text-3xl font-bold mt-6 mb-4">Kéo thêm khách — không cần agency.</h3>
                <p className="text-muted-foreground text-lg">Tự động hóa thu hút đánh giá 5 sao Google và tối ưu vị trí hiển thị trên Google Maps giúp tăng 30% khách hàng tự nhiên.</p>
              </div>
              <div className="relative w-full max-w-[300px] aspect-[4/3] bg-muted/50 rounded-xl border border-border flex items-center justify-center overflow-hidden">
                <div className="bg-card shadow-lg p-4 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded flex items-center justify-center font-bold">G</div>
                  <div>
                    <div className="font-bold text-sm">Google Maps</div>
                    <div className="text-primary text-xs">★★★★★ 4.9 (203)</div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Card 2 */}
            <BentoCard className="p-10 flex flex-col justify-between">
              <div className="z-10">
                <TechTag>Seamless Experience</TechTag>
                <h3 className="text-2xl font-bold mt-6 mb-4">Digital Menu & Đặt bàn.</h3>
                <p className="text-muted-foreground">Khách hàng quét QR gọi món nhanh, đặt bàn trước mượt mà, không cần nhân viên chạy bàn.</p>
              </div>
              <div className="mt-8 self-end w-24 h-24 border border-border rounded-xl flex items-center justify-center bg-muted/30">
                <div className="grid grid-cols-2 gap-1 w-12 h-12">
                  <div className="bg-foreground rounded-sm"></div>
                  <div className="bg-foreground rounded-sm"></div>
                  <div className="bg-foreground rounded-sm"></div>
                  <div className="bg-primary rounded-sm"></div>
                </div>
              </div>
            </BentoCard>

            {/* Card 3 */}
            <BentoCard className="p-10 flex flex-col justify-between">
              <div className="z-10">
                <TechTag>Operational Ease</TechTag>
                <h3 className="text-2xl font-bold mt-6 mb-4">Tạm biệt ca kíp Zalo.</h3>
                <p className="text-muted-foreground">Xếp ca tự động, chấm công bằng khuôn mặt siêu nhanh, không còn nhắc nhở thủ công.</p>
              </div>
              <div className="mt-8 flex gap-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold ${i%2===0 ? 'bg-primary text-white' : 'bg-muted'}`}>
                    U{i}
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Card 4 */}
            <BentoCard className="md:col-span-2 p-10 flex flex-col md:flex-row gap-10 items-center justify-between overflow-hidden relative">
              <AmbientGlow color="purple" className="-right-20 -bottom-20" />
              <div className="max-w-md z-10">
                <TechTag color="purple">AI Smart Assistant</TechTag>
                <h3 className="text-3xl font-bold mt-6 mb-4">Thực đơn tối ưu hóa bởi AI.</h3>
                <p className="text-muted-foreground text-lg">Tự động phát hiện dị ứng thực phẩm, dịch menu đa ngôn ngữ tức thời, đề xuất combo tăng doanh thu.</p>
              </div>
              <div className="z-10 bg-card border border-border p-4 rounded-xl shadow-lg w-full max-w-[280px]">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-border">
                  <div className="font-bold text-sm">Phở Bò Kobe</div>
                  <div className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">AI Translated</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">EN: Kobe Beef Noodle Soup</div>
                  <div className="text-xs text-muted-foreground">JP: 神戸牛フォー</div>
                  <div className="text-xs text-muted-foreground">KR: 神戸牛フォー</div>
                </div>
                <div className="mt-4 text-[10px] text-destructive bg-destructive/10 px-2 py-1 rounded inline-block">
                  Contains: Peanuts
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* 4. Singular Moment */}
      <section className="py-40 bg-background flex justify-center text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <TechTag>Our Philosophy</TechTag>
            <blockquote className="mt-12 text-[clamp(2rem,4.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground">
              "Mỗi món ăn ngon bắt đầu từ một quy trình vận hành trơn tru."
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-8 rounded-2xl flex flex-col justify-between h-[320px]">
              <p className="text-lg leading-relaxed font-medium">"Trước đây tôi mất 2 tiếng mỗi sáng để xếp ca. Giờ hệ thống tự làm, tôi chỉ check điện thoại."</p>
              <div className="mt-6">
                <div className="font-bold">Anh Minh Tuấn</div>
                <div className="text-sm text-muted-foreground">Chủ chuỗi Phở Việt (3 chi nhánh)</div>
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-2xl flex flex-col justify-between h-[320px] lg:mt-12">
              <p className="text-lg leading-relaxed font-medium">"Số đánh giá Google của quán tăng từ 47 lên 203 chỉ trong 2 tháng. Khách mới tìm đến nhiều hơn hẳn."</p>
              <div className="mt-6">
                <div className="font-bold">Chị Lan Phương</div>
                <div className="text-sm text-muted-foreground">Chủ Café Ambrosia</div>
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-2xl flex flex-col justify-between h-[320px] md:col-span-2 lg:col-span-1 lg:mt-24">
              <p className="text-lg leading-relaxed font-medium">"Menu AI dịch tự động cho khách nước ngoài. Không còn màn chỉ tay trên điện thoại nữa."</p>
              <div className="mt-6">
                <div className="font-bold">Anh Đức Khoa</div>
                <div className="text-sm text-muted-foreground">F&B Manager, The Rooftop Bar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="bg-[#0A0A0C] text-white py-40 relative overflow-hidden">
        <AmbientGlow color="purple" className="-top-20 -right-20" />
        <AmbientGlow color="orange" className="top-1/2 -left-40" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight">
            Khi bạn đã sẵn sàng tăng tốc.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground/80">
            Dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng. Hủy bất kỳ lúc nào.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link href="/lien-he">
              <Button variant="solid" className="px-10 py-5 text-xl w-full sm:w-auto">Dùng thử miễn phí</Button>
            </Link>
            <p className="text-sm text-muted-foreground/60">Đã có 1,200+ nhà hàng tin dùng GastroHub</p>
          </div>
        </div>
      </section>
    </div>
  );
}
