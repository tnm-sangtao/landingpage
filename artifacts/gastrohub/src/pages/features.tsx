import { Link } from "wouter";
import { TechTag, Button, AmbientGlow } from "@/components/shared";

export default function Features() {
  const modules = [
    {
      id: "marketing",
      tag: "Marketing & Growth",
      title: "Phủ sóng khách hàng mới",
      desc: "Hệ thống tự động hóa chiến dịch marketing, tối ưu hóa Google Maps và quản lý chương trình khách hàng thân thiết. Tăng 30% lượng khách hàng tự nhiên chỉ sau 2 tháng.",
      bullets: ["Tối ưu hóa vị trí Google Maps", "Tự động xin đánh giá 5 sao", "Chương trình Loyalty tích hợp"],
      color: "orange",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8">
          <div className="space-y-4 w-full max-w-sm">
            <div className="h-12 bg-muted rounded flex items-center px-4 justify-between">
              <div className="flex gap-2 items-center"><div className="w-6 h-6 bg-primary/20 rounded-full" /><div className="h-2 w-24 bg-border rounded" /></div>
              <div className="text-primary text-xs font-bold">+45 Reviews</div>
            </div>
            <div className="h-12 bg-muted rounded flex items-center px-4 justify-between">
              <div className="flex gap-2 items-center"><div className="w-6 h-6 bg-primary/20 rounded-full" /><div className="h-2 w-32 bg-border rounded" /></div>
              <div className="text-primary text-xs font-bold">+120 Points</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "guest",
      tag: "Guest Experience",
      title: "Trải nghiệm không ma sát",
      desc: "Xóa bỏ thời gian chờ đợi với hệ thống Digital Menu quét QR và đặt bàn trực tuyến. Dịch thuật tự động bằng AI giúp tiếp đón khách du lịch mượt mà.",
      bullets: ["QR Digital Menu siêu tốc", "Đặt bàn trực tuyến", "Dịch thuật menu bằng AI"],
      color: "purple",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8">
          <div className="w-48 h-64 border-4 border-foreground rounded-[2rem] bg-background shadow-xl flex flex-col items-center p-4">
            <div className="w-16 h-2 bg-muted rounded-full mb-4" />
            <div className="w-32 h-32 bg-muted rounded-xl border border-border flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-foreground border-dashed" />
            </div>
            <div className="mt-4 w-full h-8 bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold rounded-lg uppercase tracking-wider">Gọi Món</div>
          </div>
        </div>
      )
    },
    {
      id: "hr",
      tag: "Operations & HR",
      title: "Vận hành nhân sự tự động",
      desc: "Giải phóng quản lý khỏi các tác vụ thủ công. Xếp ca thông minh dựa trên dữ liệu lịch sử, chấm công bằng khuôn mặt chống gian lận và tự động tính lương.",
      bullets: ["Xếp ca thông minh", "Chấm công bằng khuôn mặt", "Tự động tính lương"],
      color: "orange",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8">
          <div className="grid grid-cols-7 gap-2 w-full max-w-sm">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded-md flex items-center justify-center text-[10px] ${i%3 === 0 ? 'bg-primary text-white font-bold' : 'bg-muted'}`}>
                {i%3===0 ? 'Ca 1' : ''}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "ai",
      tag: "AI Menu Intelligence",
      title: "Thực đơn thông minh",
      desc: "Hệ thống AI phân tích dữ liệu bán hàng để đề xuất combo, phát hiện thành phần gây dị ứng và tự động thay đổi giá theo giờ cao điểm.",
      bullets: ["Phát hiện dị ứng thực phẩm", "Đề xuất combo tăng doanh thu", "Phân tích hiệu quả menu"],
      color: "purple",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8 overflow-hidden">
          <AmbientGlow color="purple" className="opacity-50" />
          <div className="z-10 w-full max-w-sm space-y-3">
            <div className="flex justify-between items-end border-b border-border pb-2">
              <div className="w-32 h-4 bg-muted rounded" />
              <div className="w-16 h-4 bg-purple-500/20 rounded" />
            </div>
            <div className="flex justify-between items-end border-b border-border pb-2">
              <div className="w-40 h-4 bg-muted rounded" />
              <div className="w-20 h-4 bg-purple-500/20 rounded" />
            </div>
            <div className="flex justify-between items-end border-b border-border pb-2">
              <div className="w-24 h-4 bg-muted rounded" />
              <div className="w-16 h-4 bg-purple-500/20 rounded" />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight">
            Mọi công cụ bạn cần, một nơi duy nhất.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Khám phá sức mạnh của hệ điều hành F&B toàn diện nhất.
          </p>
        </div>
      </section>

      {/* Modules */}
      <div className="bg-background pb-32">
        {modules.map((mod, index) => (
          <section key={mod.id} className="py-24 border-t border-border/50">
            <div className="container mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <TechTag color={mod.color as "orange"|"purple"}>{mod.tag}</TechTag>
                  <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-tight tracking-tight">
                    {mod.title}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {mod.desc}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {mod.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium">
                        <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-[400px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {mod.graphic}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#0A0A0C] text-white py-32">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight">
            Sẵn sàng thay đổi cách bạn vận hành?
          </h2>
          <div className="mt-10">
            <Link href="/lien-he">
              <Button variant="solid" className="px-10 py-5 text-xl">Dùng thử miễn phí</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
