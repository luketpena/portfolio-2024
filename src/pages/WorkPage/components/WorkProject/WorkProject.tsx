import { ChipList } from '../../../../components/ChipList/ChipList';
import { Highlight } from '../../../../components/Highlight/Highlight';
import { IconName } from '../../../../components/Icon/Icon';

export interface WorkProjectProps {
  title: string;
  yearRange: string;
  icon?: IconName;
  technology: string[];
  description: string;
  color: string;
  contributions: {
    title: string;
    text: string;
  }[];
}

export const WorkProject: React.FC<WorkProjectProps> = ({
  title,
  yearRange,
  icon,
  color,
  technology,
  description,
  contributions,
}) => {
  return (
    <Highlight icon={icon} title={title} subtitle={yearRange} color={color}>
      <div className="grid md:grid-cols-[1fr_2fr] gap-4 grid-cols-[1fr] grid-rows-[auto_auto]">
        <div className="flex flex-col gap-4">
          <ChipList chips={technology} />
          <p className="whitespace-pre-line text-slate-400">{description}</p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            {contributions.map((contribution) => (
              <div>
                <h4 className="text-xl" style={{ color }}>
                  {contribution.title}
                </h4>
                <p className="ml-4 whitespace-pre-line">{contribution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Highlight>
  );
};
