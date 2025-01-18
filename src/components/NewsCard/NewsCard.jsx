import NewImage from "../../assets/images/dasturlash.png";
export function NewsCard({
  title,
  description,
  image,
  directionCol,
  category,
}) {
  return (
    <article className={`flex ${directionCol} gap-4`}>
      <div className="flex flex-col gap-y-2 p-8 bg-[#F1E2C1] rounded-[40px]">
        <span className="opacity-40 capitalize">{category}</span>
        <div className="flex flex-col gap-y-6">
          <strong className="text-3xl">{title}</strong>
          <span className="text-2xl">{description}</span>
        </div>
      </div>
      <div className="w-full rounded-[40px]">
        <img src={image} alt={title} className="w-full rounded-[40px]" />
      </div>
    </article>
  );
}
