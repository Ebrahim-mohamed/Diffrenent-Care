import Banner from "../assets/Banner-icon.png";
export default function Hero() {
  return (
    <section className="py-16 px-20 ">
      <div className="container px-4 justify-between gap-[167px] flex flex-col md:flex-row items-center">
        <div className=" text-center w-[583px] md:text-right mt-8 md:mt-0">
          <h1 className="text-8xl font-extrabold mb-4 text-blue-900 leading-snug">
            بيتك <span className="text-[#18191C]">هو مشفاك</span>
          </h1>

          <p className="text-2xl text-gray-700 leading-relaxed mb-6">
            نحن في الرعاية المختلفة للخدمات الطبية نؤمن بأن الرعاية الصحية لا
            تقتصر على جدران المستشفيات. نسعى لتقديم تجربة صحية مريحة ومميزة
            لعملائنا في بيوتهم، حيث يجدون الراحة والأمان.
          </p>
          <button className="bg-blue-900 text-white font-medium py-4 px-8 rounded-lg hover:bg-blue-700 transition-all">
            تحدث مع طبيبك
          </button>
        </div>
        <div>
          <img
            src={Banner} // ضع هنا مسار الصورة
            alt="Doctor"
            className="rounded-lg shadow-lg w-[500px] h-auto"
            style={{ borderRadius: "15px" }} // لضبط حواف مستديرة
          />
        </div>
      </div>
    </section>
  );
}
