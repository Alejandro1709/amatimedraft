import { api } from "@/utils/api";
import Question from "./Question";
import Alert from "./Alert";

const List: React.FC = () => {
  const { data, isLoading, error } = api.questions.getAll.useQuery()

  return (
    <section className="flex flex-col max-h-full border border-slate-700 bg-slate-800">
      {isLoading ? <Alert type="loading" message="Loading..." /> : null}
      {error ? <Alert type="error" message={error.message} /> : null}
      {data ? data.map((question) => (
        <Question key={question.id} question={question.question} author={question.author} />
      )) : null}
    </section>
  )
};

export default List;