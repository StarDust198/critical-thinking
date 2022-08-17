import { FC } from 'react';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  const formattedTitle = title.replace(/-\s/gm, '');

  return (
    <h2 className={`text-3xl font-bold text-center py-8`}>{formattedTitle}</h2>
  );
};

export default Title;
