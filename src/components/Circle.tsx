import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from 'react';
import { IGroup } from '../models/IDatabase';

interface CircleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IGroup;
  color?: string;
}

const Circle: FC<CircleProps> = ({
  data,
  color = 'bg-slate-700',
  ...props
}) => {
  const list = data.items.map((item) => item.title);

  const createList = (list: string[]): JSX.Element => {
    const dividerClass =
      'h-48 w-2 absolute bg-white top-0 left-1/2 origin-bottom';
    const liClass = `text-white text-xs text-center h-48 absolute left-1/2 origin-bottom`;
    const rotationParams: number[] = [];
    const totalRotations = list.length * 2;
    for (let i = 0; i < totalRotations; i++) {
      rotationParams.push(Math.round((i * 360) / totalRotations));
    }

    return (
      <ul>
        {list.map((item, i) => (
          <Fragment key={i}>
            <li
              className={dividerClass}
              style={{
                transform: `translateX(-50%) rotate(${
                  rotationParams[i * 2]
                }deg)`,
              }}
            />
            <li
              className={liClass}
              style={{
                width: '4.75rem',
                transform: `translateX(-50%) rotate(${
                  rotationParams[i * 2 + 1]
                }deg) translateY(1.5rem)${
                  rotationParams[i * 2 + 1] > 90 &&
                  rotationParams[i * 2 + 1] < 270
                    ? '  scaleX(-1) scaleY(-1) translateY(20rem)'
                    : ''
                }`,
              }}
            >
              {item}
            </li>
          </Fragment>
        ))}
      </ul>
    );
  };

  return (
    <div
      {...props}
      className={`rounded-full h-96 w-96 relative ${color} ${props.className}`}
    >
      {createList(list)}
      <div
        className={`rounded-full h-44 w-44 bg-white 
				absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
				text-slate-800 text-xl flex text-center items-center
        justify-center`}
      >
        <div className="w-36">{data.title}</div>
      </div>
    </div>
  );
};

export default Circle;
