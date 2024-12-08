import RateIMG01 from "../assets/rate01.png";
import RateIMG02 from "../assets/rate02.png";
export default function Testimonial() {
  const testimonials = [
    {
      img: RateIMG01,
      name: "محمد أسامة",
      location: "الرياض، السعودية",
      quote:
        "كنت دايمًا أواجه صعوبة في العثور على خدمة رعاية مناسبة لعائلتي، لكن مع الرعاية المختلفة، حصلت على تجربة استثنائية. الفريق محترف جدًا، ويوفر كل الاحتياجات بجودة عالية!",
    },
    {
      img: RateIMG02,
      name: "علي أحمد",
      location: "جدة، السعودية",
      quote:
        "كنت دايمًا أواجه صعوبة في العثور على خدمة رعاية مناسبة لعائلتي، لكن مع الرعاية المختلفة، حصلت على تجربة استثنائية. الفريق محترف جدًا، ويوفر كل الاحتياجات بجودة عالية!",
    },
  ];
  return (
    <section id="testimonials" className="py-16 pr-20 bg-white">
      <div>
        <div className="container mx-auto flex flex-col items-center gap-5 px-4">
          <div id="header">
            <h2 className="text-4xl font-bold text-center mb-7 text-[#2C4478]">
              آراء المستخدمين
            </h2>
            <p className="text-lg font-bold text-center mb-12 text-[#18191C]">
              تجارب وآراء مستخدمي الرعاية المختلفة عن خدمات الرعاية الصحية عن
              بعد. تعرّف على قصص نجاحهم ومدى رضاهم عن الرعاية المختلفة نسعى
              دائماً لتقديم خدمات متميزة{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md items-center gap-12 rounded-lg p-6 text-center flex"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className=" h-[320px] rounded-lg mx-auto mb-4"
                />
                <div className="text-right flex flex-col gap-4">
                  <p className="text-[#1E1E1E] ">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-bold  text-[#1E2E2E]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#555555]">{testimonial.location}</p>
                  </div>
                  <div id="stars" className="flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CF7D4E"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 text-[#CF7D4E]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CF7D4E"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 text-[#CF7D4E]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CF7D4E"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 text-[#CF7D4E]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CF7D4E"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 text-[#CF7D4E]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CF7D4E"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 text-[#CF7D4E]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="slider" className="flex items-center gap-16 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-[#0558E2] cursor-pointer font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <div id="dots" className="flex items-center gap-3">
              <div id="dot" className="w-4 h-4 rounded-full bg-[#EAEAEA]"></div>
              <div id="dot" className="w-4 h-4 rounded-full bg-[#EAEAEA]"></div>
              <div id="dot" className="w-4 h-4 rounded-full bg-[#EAEAEA]"></div>
              <div id="dot" className="w-4 h-4 rounded-full bg-[#EAEAEA]"></div>
              <div id="dot" className="w-4 h-4 rounded-full bg-[#2C4478]"></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-[#0558E2] cursor-pointer font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
