interface PageTitleProps {
  label: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ label }) => {
  return <h1 className="text-4xl text-white text-center">{label}</h1>;
};
