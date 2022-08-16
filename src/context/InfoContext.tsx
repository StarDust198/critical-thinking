import { createContext, useState } from 'react';
import { IElement } from '../models/IDatabase';

interface IInfoContext {
  title: string;
  text: string;
  changeText: (data: IElement) => void;
}

export const InfoContext = createContext<IInfoContext>({
  title: '',
  text: '',
  changeText: (data: IElement) => {},
});

export const InfoState = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const changeText = (data: IElement): void => {
    setTitle(data.title);
    setText(data.descr);
  };

  return (
    <InfoContext.Provider value={{ title, text, changeText }}>
      {children}
    </InfoContext.Provider>
  );
};
