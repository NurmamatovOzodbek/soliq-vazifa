import { Link } from "react-router-dom";
const navLinks = [
  {
    id: 1,
    title: "Biz haqimizda",
    linkUrl: "about-us",
  },
  {
    id: 2,
    title: "Bizning ustozlarimiz",
    linkUrl: "teachers",
  },
  {
    id: 3,
    title: "Aloqa",
    linkUrl: "contact",
  },
];
export function Links() {
  return (
    <div className="flex items-center gap-x-[40px]">
      {navLinks.map((link) => {
        const { linkUrl, title, id } = link;
        return (
          <Link
            to={linkUrl}
            key={id}
            className="font-medium text-base hover:text-blue-500 transition hover:scale-[1.04]"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}
