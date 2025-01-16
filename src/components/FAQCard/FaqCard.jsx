import { useState } from "react";
import PlusIcon from "../../assets/icons/plus-icon.svg";
export function FAQCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="bg-[#F4F4F4] rounded-[40px] p-[20px] flex flex-col">
      <button
        className="flex items-center justify-between gap-x-2 hover:opacity-50 transition p-[20px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-semibold">{question}</span>
        <PlusIcon />
      </button>
      {isOpen && <p className="text-lg font-medium p-5 pt-0">{answer}</p>}
    </article>
  );
}
