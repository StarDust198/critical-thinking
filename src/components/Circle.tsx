import { FC } from 'react';

interface CircleProps {
  title: string;
  color?: string;
  list?: string[];
}

const Circle: FC<CircleProps> = ({
  title,
  color = 'bg-slate-700',
  list = [],
}) => {
  return (
    <div className={`rounded-full h-96 w-96 relative ${color}`}>
      <ul>
        <li
          className={`text-white h-48 absolute top-0 left-1/2 -translate-x-1/2 origin-bottom`}
        >
          Sample Text
        </li>
        <li
          className={`text-white h-48 absolute top-0 left-1/2 -translate-x-1/2 origin-bottom rotate-45`}
        >
          Sample 2
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        className={`rounded-full h-44 w-44 bg-white 
				absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
				text-slate-800 text-xl flex text-center items-center`}
      >
        <div>{title}</div>
      </div>
    </div>
  );
};

export default Circle;
