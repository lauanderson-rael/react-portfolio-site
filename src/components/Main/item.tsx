import { ReactNode } from "react";
type ItemProps = {
  icone1: ReactNode;
  icone2: ReactNode;
  icone3: ReactNode;
  icone4: ReactNode;
  title: string;
  nome: string;
};

export function Item({title, icone1, icone2, icone3, icone4, nome}: ItemProps) {
  return (
    <div className="especialidades-box">
      <strong>{title}</strong>

     <div className="flex-skills">
      <div>
        <div className="icone">{icone1}</div>
        <p>{nome}</p>
      </div>
      <div>
        <div className="icone">{icone3}</div>
        <p>{nome}</p>
      </div>

      <div>
        <div className="icone">{icone2}</div>
        <p>{nome}</p>
      </div>
      <div>
        <div className="icone">{icone4}</div>
        <p>{nome}</p>
      </div>

     </div>

    </div>
  );
}
