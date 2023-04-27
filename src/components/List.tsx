import { api } from "@/utils/api";
import Question from "./Question";

const List: React.FC = () => {
  const { data } = api.questions.getAll.useQuery()

  return (
    <section className="flex flex-col max-h-full border">
      {data?.map((question) => (
        <Question key={question.id} question={question.question} author={question.author} />
      ))}
    </section>
  )
};

export default List;