import service from "../assets/Services.png";
export default function Programs() {
  return (
    <div className="py-16 px-20 flex gap-5">
      <div id="abouUs-text" className="flex flex-col gap-5">
        <h1 className="text-[#2C4478] font-bold text-5xl mb-10">
          خدماتنا للمؤسسات
        </h1>
        <section id="serv" className="flex flex-col gap-11 mb-20">
          <div id="serv-box">
            <h2 className="mb-2 text-lg">1- برامج الرعاية الصحية للموظفين:</h2>
            <div id="uls" className="flex gap-5">
              <ul className="list-disc mr-7">
                <li className="text-[#6E6E6E]">فحوصات طبية دورية</li>
                <li className="text-[#6E6E6E]">برامج الإسعافات الأولية</li>
                <li className="text-[#6E6E6E]">
                  برامج العلاج الطبيعي والتأهيل
                </li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#6E6E6E]">برامج الوقاية من الأمراض</li>
                <li className="text-[#6E6E6E]">إستشارات طبية متخصصه</li>
              </ul>
            </div>
          </div>
          <div id="serv-box">
            <h2 className="mb-2 text-lg">
              2- خدمات الرعاية المنزلية للموظفين المسنين أو المرضى:
            </h2>
            <div id="uls" className="flex gap-5">
              <ul className="list-disc mr-7">
                <li className="text-[#6E6E6E]">الرعاية التمريضية المنزلية</li>
                <li className="text-[#6E6E6E]">العلاج الطبيعي المنزلي</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#6E6E6E]">خدمات التغذية</li>
                <li className="text-[#6E6E6E]">الزيارات الطبية المنزلية</li>
              </ul>
            </div>
          </div>
          <div id="serv-box">
            <h2 className="mb-2 text-lg">3- خدمات الدعم النفسى للمؤسسات:</h2>
            <div id="uls" className="flex gap-5">
              <ul className="list-disc mr-7">
                <li className="text-[#6E6E6E]">برامج إدارة الإجهاد</li>
                <li className="text-[#6E6E6E]">برامج تطوير الذات</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#6E6E6E]">إستشارات نفسية</li>
              </ul>
            </div>
          </div>
        </section>
        <p className="text-[#18191C] text-lg">
          تساهم هذه الخدمات في زيادة إنتاجية الموظفين من خلال تحسين صحتهم
          ورفاهيتهم وتقليل غياب الموظفين عن العمل نتيجه تحسن صحة الموظفين
          بالإضافه إلى تحسن صوره المؤسسة......
        </p>
        <p className="text-[#1662EF] font-bold text-lg hover:underline cursor-pointer">
          معرفة المزيد
        </p>
      </div>

      <div id="aboutUs-image">
        <img src={service} />
      </div>
    </div>
  );
}
