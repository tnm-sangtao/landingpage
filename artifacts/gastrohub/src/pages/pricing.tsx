import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, TechTag, AmbientGlow } from "@/components/shared";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-extrabold leading-tight tracking-tight">
          Đơn giản, minh bạch, không ẩn phí.
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Chọn gói phù hợp với quy mô nhà hàng của bạn. Nâng cấp hoặc hủy bất kỳ lúc nào.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-6xl relative">
          <AmbientGlow color="orange" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-40" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10 items-center">
            {/* Starter */}
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-xl font-bold">Starter</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">490k</span>
                <span className="text-muted-foreground">/tháng</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Dành cho quán nhỏ, 1 chi nhánh</p>
              
              <ul className="mt-8 space-y-4 mb-8">
                {["Digital Menu + QR", "Google Reviews automation", "Báo cáo cơ bản", "Hỗ trợ giờ hành chính"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">Bắt đầu ngay</Button>
            </div>

            {/* Pro */}
            <div className="bg-card border-2 border-primary p-8 rounded-2xl shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <TechTag color="orange">Phổ biến nhất</TechTag>
              </div>
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-primary">990k</span>
                <span className="text-muted-foreground">/tháng</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Dành cho nhà hàng vừa, tới 3 chi nhánh</p>
              
              <ul className="mt-8 space-y-4 mb-8">
                {["Tất cả tính năng Starter", "Ca kíp tự động", "AI Menu (Đa ngôn ngữ)", "Đặt bàn online", "Báo cáo chuyên sâu"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Link href="/lien-he">
                <Button variant="solid" className="w-full">Dùng thử miễn phí 14 ngày</Button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">Liên hệ</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Dành cho chuỗi F&B lớn</p>
              
              <ul className="mt-8 space-y-4 mb-8">
                {["Không giới hạn chi nhánh", "Dedicated account manager", "Custom integrations (POS, ERP)", "SLA 99.9%", "Hỗ trợ 24/7"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">Nhận báo giá</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Câu hỏi thường gặp</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold">GastroHub có phù hợp với quán nhỏ không?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Hoàn toàn phù hợp. Gói Starter của chúng tôi được thiết kế đặc biệt cho các quán café, quán ăn nhỏ với đầy đủ tính năng cốt lõi giúp số hóa quy trình mà không làm tăng chi phí vận hành.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold">Tôi có thể dùng thử trước khi mua không?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Có. Chúng tôi cung cấp 14 ngày dùng thử miễn phí đầy đủ tính năng cho gói Pro. Bạn không cần nhập thông tin thẻ tín dụng để bắt đầu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold">Dữ liệu của tôi có được bảo mật không?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Dữ liệu của bạn được mã hóa và lưu trữ an toàn trên hạ tầng đám mây đạt chuẩn quốc tế. Chúng tôi cam kết không chia sẻ dữ liệu kinh doanh của bạn cho bất kỳ bên thứ ba nào.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold">Có thể xuất báo cáo ra Excel không?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Có. Mọi báo cáo doanh thu, nhân sự, kho bãi đều có thể xuất ra file Excel (.xlsx) hoặc CSV chỉ với 1 click.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold">Phần mềm có hoạt động offline không?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                GastroHub là phần mềm đám mây (Cloud SaaS) nên cần kết nối internet. Tuy nhiên, tính năng gọi món nội bộ (POS) có chế độ offline tạm thời và sẽ đồng bộ dữ liệu khi có mạng lại.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-bold">Tôi có thể hủy đăng ký bất lúc nào không?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Có. Bạn có thể tự do nâng cấp, hạ cấp hoặc hủy gói dịch vụ bất kỳ lúc nào ngay trong phần cài đặt tài khoản.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
