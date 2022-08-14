import Circle from './components/Circle';
import dataJson from './data.json';

function App() {
  console.log(dataJson);

  return (
    <div className="App">
      <div className="lg:container mx-auto">
        <h1 className="text-xl font-bold text-slate-800 text-center py-8">
          Система когнитивных искажений по Н. Непряхину
        </h1>
        <div className="flex flex-wrap justify-around">
          {dataJson.map((item) => (
            <Circle className="m-4" key={item.title} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
