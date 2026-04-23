import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      const scrollObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-up');
      animatedElements.forEach(el => scrollObserver.observe(el));
      
      return () => scrollObserver.disconnect();
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '50px', textAlign: 'center', position: 'relative' }}>
          <div className="hero-bg-glow"></div>
          <div className="container">
              <h1 className="hero-title animate-up">Về <span>Chúng tôi</span></h1>
          </div>
      </section>

      {/* About Detail Section */}
      <section className="about-detail section-padding">
          <div className="container">
              <div className="glass-card animate-up delay-1" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
                  <h3 className="service-title" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Câu chuyện của NVS</h3>
                  <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Được thành lập năm 2017, New Vision là một công ty công nghệ với đội ngũ kỹ sư CNTT trẻ, năng động và mang trong mình khát vọng cống hiến cho xã hội những thành tựu tốt đẹp nhất. Với mục tiêu trở thành đơn vị cung cấp các giải pháp công nghệ thông tin hàng đầu tại Việt Nam và trong khu vực, New Vision luôn nỗ lực nâng cao chất lượng cuộc sống thông qua việc ứng dụng các tiến bộ của công nghệ vào các lĩnh vực khác nhau.</p>
                  
                  <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Bằng việc ứng dụng những thành tựu công nghệ tiên tiến (IoT, AI, xử lý hình ảnh, dữ liệu lớn...) New Vision mong muốn mang lại những hệ thống tích hợp thông minh, những ứng dụng và thiết bị tiện ích nhằm phục vụ đời sống của con người.</p>

                  <h3 className="service-title" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', marginTop: '2.5rem' }}>Lý tưởng</h3>
                  <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Lý tưởng của New Vision luôn là <strong>Làm cho cuộc sống trở nên đơn giản hơn</strong>. Chúng tôi hướng tới xây dựng một cuộc sống tiện nghi hơn cho con người.</p>

                  <h3 className="service-title" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', marginTop: '2.5rem' }}>Văn hoá doanh nghiệp</h3>
                  <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Tại New Vision, chúng tôi là một đội ngũ có chung lý tưởng và cùng nhau phát triển. Chúng tôi hiểu rằng mọi thành tựu đều là nỗ lực của một tập thể, do đó thành công là của toàn đội chứ không riêng cá nhân.</p>
                  <p style={{ color: '#9ca3af' }}>Chúng tôi luôn trân trọng mọi ý kiến cá nhân. Mọi thành viên trong công ty đều có thể đưa ra những ý tưởng, đóng góp, cải tiến cho thành công chung. Những hoạt động team building cũng thường xuyên được tổ chức để góp phần gắn kết các thành viên.</p>
              </div>
          </div>
      </section>
    </>
  );
}
