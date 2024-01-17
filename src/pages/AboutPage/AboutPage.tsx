import { Button } from '../../components/Button/Button';
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
  {
    name: 'Simple Icons',
    license: 'CC0 1.0 Universal',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-8 max-w-[700px] mx-auto">
        {/* Tech rundown */}
        <Card title="Technology" align="left" className="flex flex-col gap-4">
          <p>This website was built in React with Vite.</p>
          <p>
            Styling was done largely using Tailwind CSS. Animations were created
            with CSS + Framer Motion.
          </p>
          <Button
            icon="FaGithub"
            label="Take a look at the code on GitHub"
            href="https://github.com/luketpena/portfolio-2024/tree/main"
            className="!w-full mt-8"
            color="#ffffff"
          />
        </Card>

        {/* Attributions */}
        <Card title="Attribution" align="right">
          <div className="flex justify-end">
            <table>
              {attributionList.map((attribution, index) => (
                <tr key={`attribution-table-row-${index}`}>
                  <td className="text-white pr-4">{attribution.name}</td>
                  <td className="text-orange-300 text-left">
                    {attribution.license}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </Card>
      </div>
    </PageWrapper>
  );
};
