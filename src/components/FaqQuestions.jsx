export default function FaqQuestions({ faqs, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faqs.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}>
      <div className="faqQuestion">{faqs.question}</div>
      <div className="faqAnswer">{faqs.answer}</div>
    </div>
  );
}
