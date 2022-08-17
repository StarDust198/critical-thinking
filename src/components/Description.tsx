import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface DescrProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  descr: string;
}

const Description: FC<DescrProps> = ({ descr, ...props }) => {
  return (
    <div {...props}>
      {descr.split(/\n/).map((item, i) => (
        <p key={i} className="py-2">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Description;
