import Q from "../assets/Q-icon.png";
import Q01 from "../assets/Q-icon01.png";
import Q02 from "../assets/Q-icon02.png";
import Q03 from "../assets/Q-icon03.png";
import Q04 from "../assets/Q-icon04.png";
export default function Care() {
  const whyUsIcons = [
    {
      icon: Q,
      text: "كفاءة وخبره",
      desc: "فريقنا الطبي والتمريضي يتمتع بخبرة واسعة وكفاءة عالية في تقديم الرعاية الصحية المنزلية",
    },
    {
      icon: Q01,
      text: "خدمة 24 ساعة",
      desc: "خدماتنا متاحة لك علي مدار الساعة طوال أيام الأسبوع",
    },
    {
      icon: Q02,
      text: "رعاية شخصية",
      desc: "نهتم بكل مريض على حدة، ونقدم له خطة عالجية مصممة خصيصًا لحالته.",
    },
    {
      icon: Q03,
      text: "أحدث التقنيات",
      desc: "نستخدم أحدث األجهزة والمعدات الطبية لضمان جودة الخدمات المقدمة",
    },
    {
      icon: Q04,
      text: "راحة وخصوصية",
      desc: "خدماتنا متاحة لك علي مدار الساعة طوال أيام الأسبوع",
    },
  ];
  return (
    <section className="py-16 px-20  bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary-blue mb-10">
          <span className="text-[#2C4478]">لماذا</span> الرعاية المختلفة ؟
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {whyUsIcons.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.icon}
                alt={`Why Us ${index}`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-[#18191C] font-bold">{item.text}</p>
              <p className="text-[#767F8C]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
