interface ChipProps {
  text: string;
}

export const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="bg-slate-600 text-white px-3 py-1 rounded-full h-max">
      {text}
    </div>
  );
};
