type ProjetoProps = {
  nome: string;
};

export function Projeto({ nome }: ProjetoProps) {
  return (
    <div className="img-port">
      <div className="overlay">{nome}</div>
    </div>
  );
}
