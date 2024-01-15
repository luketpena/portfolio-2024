import { Card } from '../../components/Card/Card';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

const attributionList: {
  name: string;
  license?: string;
}[] = [
  {
    name: 'Game Icons',
    license: 'CC by 3.0',
  },
  {
    name: 'Font Awesome 6',
    license: 'CC by 4.0',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-8">
        {/* Tech rundown */}
        <Card title="Technology" align="left" className="flex flex-col gap-4">
          <p>This website was built in React with Vite.</p>
          <p>
            Styling was done largely using Tailwind CSS, animations are CSS +
            Framer Motion.
          </p>
          <p>
            No component libraries were used - everything was built from
            scratch.
          </p>

          <p>
            The GitHub repository for this project can be found{' '}
            <a
              target="_blank"
              href="https://github.com/luketpena/portfolio-2024/tree/main"
              className="text-orange-500"
            >
              here
            </a>
            .
          </p>
        </Card>

        {/* Attributions */}
        <Card title="Attribution" align="right">
          {attributionList.map((attribution) => (
            <p className="flex justify-end gap-4">
              <span>{attribution.name}</span>
              {attribution.license && (
                <span className="text-slate-500">{attribution.license}</span>
              )}
            </p>
          ))}
        </Card>
      </div>
    </PageWrapper>
  );
};
