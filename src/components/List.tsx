import Question from "./Question";

const List: React.FC = () => {
  return (
    <section className="flex flex-col max-h-full border">
      <Question question="Cual es tu curso favorito de Platzi?" author="tumamarica" />
      <Question question="Cual es tu curso favorito de Platzi?" author="tumamarica" />
      <Question question="Cual es tu curso favorito de Platzi?" author="tumamarica" />
      <Question question="Cual es tu curso favorito de Platzi?" author="tumamarica" />
    </section>
  )
};

export default List;