import { Highlight } from '../../../../components/Highlight/Highlight';
import { IconName } from '../../../../components/Icon/Icon';
import { ImageCarousel } from '../../../../components/ImageCarousel/ImageCarousel';
import { Button } from '../../../../components/Button/Button';

export interface CallToAction {
  text: string;
  href: string;
  icon: IconName;
}

export interface PersonalProjectProps {
  title: string;
  subtitle: string;
  color: string;
  contrast?: string;
  icon: IconName;
  images: string[];
  description: string;
  actions?: CallToAction[];
}

export const PersonalProject: React.FC<PersonalProjectProps> = ({
  title,
  subtitle,
  color,
  contrast,
  icon,
  images,
  description,
  actions,
}) => {
  return (
    <Highlight title={title} subtitle={subtitle} color={color} icon={icon}>
      <div className="grid grid-cols-1 grid-rows-[300px_auto] md:grid-cols-[1fr_3fr] gap-4 min-h-[300px]">
        <ImageCarousel images={images} />
        <div className="flex flex-col justify-between">
          <p className="whitespace-pre-line max-w-[700px]">{description}</p>
          {actions && (
            <div className="flex flex-wrap gap-4 mt-4">
              {actions.map((action) => (
                <Button
                  className="grow"
                  label={action.text}
                  href={action.href}
                  icon={action.icon}
                  backgroundColor={color}
                  color={contrast ?? '#ffffff'}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Highlight>
  );
};
