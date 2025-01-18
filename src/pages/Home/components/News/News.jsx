import { NewsCard } from "../../../../components";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    category: "local",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum recusandae architecto delectus, perspiciatis omnis fugit earum...",
    image: "https://ru.cnwtc.com/uploads/202232262/n202202171806135571718.png",
  },
  {
    id: 2,
    category: "global",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum recusandae architecto delectus, perspiciatis omnis fugit earum...",
    image: "https://ru.cnwtc.com/uploads/202232262/n202202171806135571718.png",
  },
];
export function News() {
  return (
    <section className="container flex flex-col gap-y-[32px]">
      <div className="flex justify-between items-center">
        <h2 className="leading-[44px] text-[28px] text-[#0B2441] font-bold">
          Yangiliklar
        </h2>
        <Link
          to="/news"
          className="font-medium text-base hover:text-blue-500 transition hover:scale-[1.04]"
        >
          Barcha yangiliklar
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {newsData.map((news) => {
          const { id, title, description, image, category } = news;
          let directionCol = "";
          id % 2 === 0
            ? (directionCol = "flex-col-reverse")
            : (directionCol = "flex-col");
          return (
            <NewsCard
              key={id}
              title={title}
              description={description}
              image={image}
              directionCol={directionCol}
              category={category}
            />
          );
        })}
      </div>
    </section>
  );
}
