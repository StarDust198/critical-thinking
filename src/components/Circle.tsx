import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from 'react';
import { IGroup, IElement } from '../models/IDatabase';

interface CircleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IGroup;
  colorData: string[];
}

const Circle: FC<CircleProps> = ({ data, colorData, ...props }) => {
  const createList = (list: IElement[]): JSX.Element => {
    const dividerClass =
      'h-48 w-2 absolute bg-white top-0 left-1/2 origin-bottom z-10';
    const liClass = `${colorData[1]} overflow-hidden text-center h-48 absolute left-1/2 origin-bottom`;
    const liWidth = data.items.length > 6 ? '4.75rem' : '5.25rem';
    const rotationParams: number[] = [];
    const totalRotations = list.length * 2;
    for (let i = 0; i < totalRotations; i++) {
      rotationParams.push(Math.round((i * 360) / totalRotations));
    }

    return (
      <ul>
        {data.items.map((item, i) => {
          const dividerRotation = {
            transform: `translateX(-50%) rotate(${rotationParams[i * 2]}deg)`,
          };

          const elemStyle = {
            width: liWidth,
            transform: `translateX(-50%) rotate(${
              rotationParams[i * 2 + 1]
            }deg) translateY(1.5rem)${
              rotationParams[i * 2 + 1] > 90 && rotationParams[i * 2 + 1] < 270
                ? '  scaleX(-1) scaleY(-1) translateY(20rem)'
                : ''
            }`,
          };

          const fontSize =
            item.title.length < 15
              ? ' text-base'
              : item.title.length < 25
              ? ' text-sm'
              : ' text-xs';

          return (
            <Fragment key={i}>
              <li className={dividerClass} style={dividerRotation} />
              <li className={liClass + fontSize} style={elemStyle}>
                <div
                  className={`
                  rounded transition-all cursor-pointer scale-90 opacity-75 
                  hover:scale-105 hover:opacity-100
                `}
                >
                  {item.title}
                </div>
              </li>
            </Fragment>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      {...props}
      className={`rounded-full h-96 w-96 relative ${colorData[0]} ${props.className}`}
    >
      {createList(data.items)}
      <div
        className={`rounded-full h-44 w-44 bg-white 
				absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
				text-slate-800 text-xl flex text-center items-center
        justify-center z-20`}
      >
        <div className="w-36">{data.title}</div>
      </div>
    </div>
  );
};

export default Circle;
