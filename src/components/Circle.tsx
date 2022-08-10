import { FC, Fragment } from 'react';

interface CircleProps {
  title: string;
  color?: string;
  list?: string[];
}

const sampleTitle = 'Почему мы ничего не понимаем?';
const sampleList4 = [
  'Эффект обратного результата',
  'Ошибка базового процента',
  'Конфа - буляция',
  'Ошибка игрока',
  'Ошибка выжившего',
  'Ошибка меткого стрелка',
  'Ошибка конъюнкции',
  'Феномен Баадера – Майнхоф',
];

const sampleList1 = [
  'Эффект слепого пятна',
  'Эффект ложного согласия',
  'Эффект третьего лица',
  'Восприятие собственного выбора',
  'Иллюзия контроля',
];

const Circle: FC<CircleProps> = ({
  title = sampleTitle,
  color = 'bg-slate-700',
  list = sampleList1,
}) => {
  const createList = (list: string[]): JSX.Element => {
    const dividerClass =
      'h-48 w-2 absolute bg-white top-0 left-1/2 origin-bottom';
    const liClass = `text-white text-sm text-center h-48 w-20 absolute left-1/2 origin-bottom`;
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
                transform: `translateX(-50%) rotate(${
                  rotationParams[i * 2 + 1]
                }deg) translateY(1rem)${
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
    <div className={`rounded-full h-96 w-96 relative ${color}`}>
      {createList(list)}
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
