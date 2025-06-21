import { Contest } from "@/data/contests"
interface Props {
  contest: Contest;
};

const ContestCard = ({ contest }: Props) => {
  return (
    <div
      key={contest.name}
        className="grid content-between m-2 bg-white rounded-lg shadow-md border border-gray-200 w-65 h-90 transition-all cursor-pointer text-black hover:shadow-lg"
    >
      <div>
        <img src={contest.cover_image} alt="cover image" className="w-full rounded-t-lg h-40 bg-gray-200"/>
        <div className="p-4">
          <h3 className="font-bold">{contest.name}</h3>
          <p
            className="text-gray-600 text-[15px]"
            title={contest.short_description}
          >
            {contest.short_description.length >= 77
              ? contest.short_description.substring(0, 77) + "..."
              : contest.short_description}
          </p>
        </div>
      </div>
      <div className="p-4">
        <button className="bg-black rounded-4xl text-white px-4 py-1 cursor-pointer">
          View more
        </button>
      </div>
    </div>
  );
};

export default ContestCard;