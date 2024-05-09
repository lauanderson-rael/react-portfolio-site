import { ReactNode } from "react";
type ItemProps = {
  icone: ReactNode;
  nome: string;
  paragrafo: string;
};

export function Item({ icone, nome, paragrafo }: ItemProps) {
  return (
    <div className="especialidades-box">
      <div className="icone">{icone}</div>
      <h3>{nome}</h3>
      <p>{paragrafo}</p>
    </div>
  );
}
