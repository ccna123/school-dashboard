type Props = {
  title: string;
  date: string;
  time: string;
  color: string;
};

const AnnouncementCard: React.FC<Props> = ({ title, date, time, color }) => {
  return (
    <div
      className={`rounded-md px-2 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${color} mb-4`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="font-bold">{title}</p>
        <div className="flex items-center gap-2 bg-white rounded-md px-3">
          <p className="text-xs text-blue-400 font-semibold">{date}</p>
          <p className="text-xs text-blue-400 font-semibold">{time}</p>
        </div>
      </div>
      <p className="text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
};

export default AnnouncementCard;
