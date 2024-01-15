import { Chip } from '../Chip/Chip';

interface ChipListProps {
  name?: string;
  chips: string[];
}

export const ChipList: React.FC<ChipListProps> = ({ name, chips }) => {
  return (
    <div className="flex flex-wrap gap-2 my-2 h-max">
      {chips.map((chip, index) => (
        <Chip key={`${name ?? 'chip-list'}-${index}-${chip}`} text={chip} />
      ))}
    </div>
  );
};
