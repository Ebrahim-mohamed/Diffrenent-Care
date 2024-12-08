export default function Stati() {
  const stats = [
    { number: "43", label: "طبيب محترف" },
    { number: "2300+", label: "توصيه طبية" },
    { number: "1000+", label: "مستخدم سنوياً" },
  ];
  return (
    <section
      id="stats"
      className="py-[70px] px-20  bg-[#2C4478] flex  justify-around"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center flex flex-col gap-2">
          <h3 className="text-5xl font-bold text-white">{stat.number}</h3>
          <p className="text-[#C5C5C5] font-bold text-2xl">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
