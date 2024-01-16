import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { projects } from './work-page-list';
import { WorkProject } from './components/WorkProject/WorkProject';
import { Anchor } from '../../components/Anchor/Anchor';

export const WorkPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          <p>
            I have been a coder and digital maker for over 20 years (see{' '}
            <Anchor href="/projects" internal>
              my projects
            </Anchor>{' '}
            for more on that). But since transitioning into web development
            professionally in 2020, I have been a significant contributor to
            many projects.
          </p>
          <p>
            This list is non-exhaustive, but serves to highlight the ways I was
            able to make an impact on the teams I collaborated with.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-8">
          {projects.map((project) => (
            <WorkProject {...project} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};
