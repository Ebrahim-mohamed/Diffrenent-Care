import Banner02 from "../assets/Banner02-icon.png";
import Banner03 from "../assets/Banner03-icon.png";
export default function AboutUs() {
  return (
    <div className="py-16 px-20 flex gap-5" id="aboutUs">
      <div className="flex flex-col gap-36">
        <div id="abouUs-text" className="flex flex-col gap-5">
          <h1 className="text-[#18191C] font-bold text-4xl">
            عن الرعاية المختلفة
          </h1>
          <p className="text-[#18191C] text-lg">
            نحن في الرعاية المختلفة للخدمات الطبية نؤمن بأن الرعاية الصحية لا
            تقتصر على جدران المستشفيات. نسعى لتقديم تجربة صحية مريحة ومميزة
            لعمالئنا في بيوتهم، حيث يجدون الراحة والأمان.
          </p>
          <p className="text-[#1662EF] font-bold text-lg hover:underline cursor-pointer">
            معرفة المزيد
          </p>
        </div>
        <div>
          <img src={Banner03} />
        </div>
      </div>
      <div id="aboutUs-image">
        <img src={Banner02} className="" />
      </div>
    </div>
  );
}
