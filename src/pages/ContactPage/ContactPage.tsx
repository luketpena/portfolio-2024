import Icon, { IconName } from '../../components/Icon/Icon';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

const linkList: {
  icon: IconName;
  href: string;
}[] = [
  {
    icon: 'SiLinkedin',
    href: 'https://www.linkedin.com/in/luke-pena-669473122/',
  },
  {
    icon: 'SiTwitter',
    href: 'https://twitter.com/PenaPenyata',
  },
  {
    icon: 'SiInstagram',
    href: 'https://www.instagram.com/luketpena/',
  },
  {
    icon: 'FaItchIo',
    href: 'https://penapenyata.itch.io/',
  },
];

export const ContactPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-4 mt-[25vh]">
        <p className="text-xl">luketpena@gmail.com</p>
        <div className="flex gap-4">
          {linkList.map((link) => (
            <a
              href={link.href}
              target="_blank"
              className="text-slate-500 hover:text-white hover:scale-105 transition-all"
            >
              <Icon name={link.icon} size="48px" />
            </a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};
