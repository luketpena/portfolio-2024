import { Card } from '../../components/Card/Card';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <Card title="Technology">
        <p>This website was built in React with Vite.</p>
        <p>Styling was done largely using Tailwind CSS.</p>
        <p>
          No component libraries were used - everything was built from scratch.
        </p>
      </Card>
    </div>
  );
};
