type QuestionProps = {
  question: string;
  author: string
}

const Question: React.FC<QuestionProps> = ({ question, author = "Anonymous" }) => {
  return (
    <article className="p-4 space-y-1 border-b border-slate-700 bg-slate-800 last:border-none">
      <h2 className="text-sm text-gray-600"><span className="text-blue-400">{author}</span> asks:</h2>
      <p className="text-xl font-medium text-white">{question}</p>
    </article>
  )
};

export default Question;