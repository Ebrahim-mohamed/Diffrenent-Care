import contactImage from "./../assets/Contact.png";
export default function ContactUs() {
  return (
    <section id="contact" className="py-16 px-20  flex gap-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-right mb-8 text-[#2C4478]">
          تواصل معنا
        </h2>
        <form className=" mx-auto">
          <input
            type="text"
            placeholder="اسمك"
            className="block w-full mb-4 p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="block w-full mb-4 p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="رقم الهاتف"
            className="block w-full mb-4 p-3 border rounded-lg"
          />
          <textarea
            placeholder="رسالتك..."
            className="block w-full h-[220px] mb-4 p-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className=" text-white py-5 bg-[#2C4478]  w-full rounded-lg"
          >
            إرسال
          </button>
        </form>
      </div>
      <div id="contact-us-image" className="w-[1200px]">
        <img src={contactImage} alt="doctor image" className="w-full h-full" />
      </div>
    </section>
  );
}
