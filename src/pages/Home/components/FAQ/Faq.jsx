import { FAQCard } from "../../../../components";
import { Link } from "react-router-dom";
export function FAQ() {
  const faqData = [
    {
      question: "React nima?",
      answer: "React - bu UI yaratish uchun kutubxona.",
    },
    {
      question: "Hooklar nima?",
      answer:
        "Hooklar funksional komponentlarda state va lifecycle boshqarish imkonini beradi.",
    },
    {
      question: "JSX nima?",
      answer: "JSX - JavaScript bilan HTML sintaksisni birlashtiradi.",
    },
  ];
  return (
    <section className="container flex flex-col gap-y-[32px]">
      <div className="flex justify-between items-center">
        <h2 className="leading-[44px] text-[28px] text-[#0B2441] font-bold">
          Ko'p so'raladigan savollar
        </h2>
        <Link
          to="/news"
          className="font-medium text-base hover:text-blue-500 transition hover:scale-[1.04]"
        >
          Ko'proq ko'rish
        </Link>
      </div>
      <div className="flex flex-col gap-y-5">
        {faqData.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
