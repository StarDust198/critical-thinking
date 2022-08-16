import { useContext } from 'react';
import Circle from './components/Circle';
import { InfoContext } from './context/InfoContext';
import dataJson from './data.json';

const colors = [
  ['bg-slate-700', 'text-white'],
  ['bg-slate-400', 'text-slate-800'],
  ['bg-pink-300', 'text-pink-800'],
  ['bg-fuchsia-700', 'text-white'],
];

function App() {
  const { title, text } = useContext(InfoContext);

  const Description = () => (
    <>
      {text.split(/\n/).map((item) => (
        <p className="py-2">{item}</p>
      ))}
    </>
  );

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
          <h2 className="text-3xl font-bold text-center py-8">{title}</h2>
          <div className="h-96 overflow-y-auto px-2">
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
