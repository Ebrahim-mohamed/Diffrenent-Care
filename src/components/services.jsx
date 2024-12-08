import ServiceCard from "./ServiceCard";
import ServiceCard01 from "../assets/icon01.svg";
import ServiceCard02 from "../assets/icon02.svg";
import ServiceCard03 from "../assets/icon03.svg";
import ServiceCard04 from "../assets/icon04.svg";
export default function Services() {
  const services = [
    {
      icon: <img src={ServiceCard01} alt="Service 1" className="w-16 h-16" />,
      title: "الزيارات الطبية المنزلية",
      description: [
        "زيارة طبيب للمنزل",
        "فحوصات طبية شاملة",
        "متابعة الحالة الصحية للمريض",
      ],
    },
    {
      icon: <img src={ServiceCard02} alt="Service 2" className="w-16 h-16" />,
      title: "رعاية كبار السن",
      description: [
        "دعم يومي لكبار السن",
        "رعاية خاصة لحالات الزهايمر أو الخرف",
      ],
    },
    {
      icon: <img src={ServiceCard03} alt="Service 3" className="w-16 h-16" />,
      title: "الرعاية النفسية",
      description: ["دعم نفسي للمرضى وكبار السن", "جلسات مع طبيب نفسي"],
    },
    {
      icon: <img src={ServiceCard04} alt="Service 4" className="w-16 h-16" />,
      title: "خدمات التمريض",
      description: [
        "تقديم الرعاية التمريضية الأساسية ",
        "إدارة الأدوية والعلاجات",
      ],
    },
    {
      icon: <img src={ServiceCard04} alt="Service 4" className="w-16 h-16" />,
      title: "العلاج الطبيعي",
      description: [
        "جلسات علاج طبيعي للشفاء من الإصابات ",
        "برامج تأهيلية لكبار السن",
      ],
    },
    {
      icon: <img src={ServiceCard04} alt="Service 4" className="w-16 h-16" />,
      title: "ما بعد العمليات الجراحية",
      description: ["متابعة الجروح والتعافي", "إدارة الأدوية"],
    },
    {
      icon: <img src={ServiceCard04} alt="Service 4" className="w-16 h-16" />,
      title: "رعاية الأم والطفل",
      description: [
        "رعاية الأم الحامل خلال فترة الحمل",
        "رعاية الأم والطفل بعد الولادة",
      ],
    },
    {
      icon: <img src={ServiceCard04} alt="Service 4" className="w-16 h-16" />,
      title: "خدمات الفحص والتحليل",
      description: ["إجراء تحاليل مخبرية في المنزل", "فحوصات طبيه دورية"],
    },
  ];
  return (
    <section id="services" className="py-16 px-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-blue">
          <span className="text-[#2C4478]">خدمات</span> الرعاية المختلفة
        </h2>

        <div className="grid md:grid-cols-3 gap-14">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
