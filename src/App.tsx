import { useContext } from 'react';
import Circle from './components/Circle';
import { InfoContext } from './context/InfoContext';
import dataJson from './data.json';
import Title from './components/Title';
import Description from './components/Description';

const colors = [
  ['bg-slate-700', 'text-white'],
  ['bg-slate-400', 'text-slate-800'],
  ['bg-pink-300', 'text-pink-800'],
  ['bg-fuchsia-700', 'text-white'],
];

function App() {
  const { title, text }: { title: string; text: string } =
    useContext(InfoContext);

  return (
    <div className="App">
      <div className="lg:container mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 text-center py-8">
          Система когнитивных искажений по Н. Непряхину
        </h1>
        <div className="grid grid-cols-2 gap-12">
          {dataJson.map((item, i) => (
            <Circle
              className={
                i % 2 === 0 ? 'justify-self-end' : 'justify-self-start'
              }
              colorData={colors[i]}
              key={item.title}
              data={item}
            />
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-slate-800 py-4">
          <Title title={title} />
          <Description
            descr={text}
            className="h-96 overflow-y-auto px-2 indent-4"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
