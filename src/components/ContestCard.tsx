import { Contest } from "@/data/contests"
interface Props {
  contest: Contest;
};

const ContestCard = ({ contest }: Props) => {
  return (
    <div
      key={contest.name}
      className="grid content-between bg-white rounded-lg shadow-md border border-gray-200 max-w-85 transition-all text-black hover:shadow-lg"
    >
      <div>
        <img src={contest.cover_image} alt="cover image" className="w-full rounded-t-lg h-40 bg-gray-200"/>
        <div className="p-4">
          <h3 className="font-bold">{contest.name}</h3>
          <p
            className="text-gray-600 text-[15px] line-clamp-2"
            title={contest.short_description}
          >
            {contest.short_description}
          </p>
        </div>
      </div>
      <div className="p-4">
        <a href={`/competition/${contest.slug}`}>
          <button className="bg-black rounded-4xl text-white px-4 py-1 cursor-pointer">
            View more
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContestCard;