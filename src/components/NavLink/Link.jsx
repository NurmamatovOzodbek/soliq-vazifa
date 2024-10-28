import { Link } from "react-router-dom";
const navLinks = [
  {
    id: 1,
    title: "Bizning ustozlarimiz",
    linkUrl: "teacher",
  },
  {
    id: 2,
    title: "Biz haqimizda",
    linkUrl: "about-us",
  },
];
export function Links() {
  return (
    <div className="flex items-center gap-x-[40px]">
      {navLinks.map((link) => {
        const { linkUrl, title, id } = link;
        return (
          <Link to={linkUrl} key={id} className="font-medium text-base">
            {title}
          </Link>
        );
      })}
    </div>
  );
}
