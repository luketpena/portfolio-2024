import { Anchor } from '../../components/Anchor/Anchor';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { PersonalProject } from './components/PersonalProject/PersonalProject';
import { projects } from './project-page-list';

export const ProjectPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
        <p>
          I'm a life-long habitual tinkering and builder. Curiosity is what gets
          me out of bed every day.
        </p>
        <p>
          I got an early start on coding when I was about 10, building games
          with <Anchor href="https://gamemaker.io/en">Game Maker</Anchor>. Since
          then, it's been a non-stop learning proccess of trying to find the
          next thing to create.
        </p>
        <p>
          Dabbling and mild-mastery is the name of the game: game development,
          DIY furniture, ink sketches and detailed pencil portraits, 3D modeling
          and printing, web development, music composition and performance,
          pixel art and animation, miniature painting, audio engineering and
          sound design. All is fair game.
        </p>
        <p>
          There is a lot here. I don't expect you to read it all, but I hope
          something here catches your eye.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        {projects.map((project, index) => (
          <PersonalProject key={`personal-project-${index}`} {...project} />
        ))}
      </div>
    </PageWrapper>
  );
};
