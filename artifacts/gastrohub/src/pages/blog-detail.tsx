import { useEffect, useState } from "react";
import { Link } from "wouter";
import { TechTag } from "@/components/shared";

export default function BlogDetail() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen relative">
      {/* Progress Bar */}
      <div 
        className="fixed top-16 left-0 h-1 bg-primary z-50 transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <article className="pt-24 pb-32 container mx-auto px-6 flex flex-col items-center">
        <header className="max-w-3xl text-center mb-16">
          <TechTag>Marketing</TechTag>
          <h1 className="mt-6 text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight">
            5 chiến lược tối ưu Google Maps giúp nhà hàng tăng 40% khách mới
          </h1>
          <div className="mt-8 flex justify-center items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div className="text-left">
                <div className="font-bold text-foreground text-sm">Minh Hoàng</div>
                <div className="text-xs">Growth Lead</div>
              </div>
            </div>
            <div className="h-4 w-px bg-border mx-2" />
            <div className="text-sm">14/05/2024 • 6 phút đọc</div>
          </div>
        </header>

        <div className="w-full max-w-4xl aspect-[21/9] bg-muted rounded-2xl mb-16 border border-border" />

        <div className="w-full max-w-[680px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
          <p>Đối với ngành F&B hiện đại, cuộc chiến không chỉ diễn ra trên mặt phố mà còn trên các nền tảng số. Trong đó, Google Maps là mặt bằng đắt giá nhất mà bạn không phải trả tiền thuê. Khách hàng ngày nay hiếm khi "đi dạo tìm quán", họ "search Google Maps" trước khi quyết định.</p>
          
          <h2>1. Cập nhật hồ sơ Google Business Profile hoàn chỉnh 100%</h2>
          <p>Điều cơ bản nhất nhưng nhiều nhà hàng bỏ qua. Hãy đảm bảo thông tin của bạn chính xác đến từng chi tiết: giờ mở cửa, số điện thoại, địa chỉ, website. Đặc biệt quan trọng là việc cập nhật giờ mở cửa trong các dịp lễ tết để tránh trải nghiệm xấu cho khách hàng.</p>
          
          <h2>2. Hình ảnh chất lượng cao là "người bán hàng" thầm lặng</h2>
          <p>Thực khách "ăn bằng mắt" trước khi đến quán. Hãy đăng tải hình ảnh chuyên nghiệp về: món ăn signature, không gian quán, mặt tiền (để khách dễ tìm), và không khí khi quán đông khách. Tránh sử dụng ảnh stock.</p>

          <h2>3. Tự động hóa việc xin đánh giá</h2>
          <p>Đừng đợi khách tự nhớ để review. Với GastroHub, bạn có thể thiết lập hệ thống tự động gửi tin nhắn xin đánh giá Google Maps 1 giờ sau khi khách thanh toán xong. Những lời nhắc nhở tinh tế kèm link trực tiếp có thể tăng tỷ lệ đánh giá lên gấp 5 lần.</p>

          <h2>4. Phản hồi mọi đánh giá (kể cả 1 sao)</h2>
          <p>Cách bạn phản hồi một đánh giá tiêu cực nói lên nhiều điều về dịch vụ của bạn hơn là 10 đánh giá tích cực. Hãy trả lời nhanh chóng, chuyên nghiệp và có giải pháp rõ ràng.</p>

          <h2>5. Cập nhật bài viết thường xuyên</h2>
          <p>Google Maps không chỉ là danh bạ, nó là một mạng xã hội thu nhỏ. Đăng tải các ưu đãi, món mới, sự kiện hàng tuần giúp hồ sơ của bạn luôn "sống" trong mắt thuật toán của Google.</p>

          <div className="mt-12 p-8 bg-muted/50 rounded-xl border border-border">
            <h3 className="text-xl font-bold mt-0">Bắt đầu tự động hóa ngay hôm nay</h3>
            <p className="mb-6 text-base">GastroHub giúp bạn thu thập đánh giá 5 sao tự động từ khách hàng hài lòng và chặn đứng phàn nàn trước khi chúng lên Google Maps.</p>
            <Link href="/lien-he">
              <span className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg bg-primary text-white hover:bg-[#E04700] transition-colors cursor-pointer">
                Tìm hiểu thêm
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
