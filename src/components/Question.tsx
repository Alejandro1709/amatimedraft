type QuestionProps = {
  question: string;
  author: string
}

const Question: React.FC<QuestionProps> = ({ question, author = "Anonymous" }) => {
  return (
    <article className="p-4 space-y-1 border-b last:border-none">
      <h2 className="text-sm text-gray-600">{author} asks:</h2>
      <p className="text-xl font-medium">{question}</p>
    </article>
  )
};

export default Question;