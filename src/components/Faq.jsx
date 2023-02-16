import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import FaqQuestions from "./FaqQuestions";

export default function Faq() {
  const [faq, setFaq] = useState([
    {
      question: "Como posso fazer o pagamento da minha encomenda?",
      answer: "Paypal, MBWAY, Referência MB, Cartão de Crédito e Débito",
      open: true,
    },
    {
      question: "Quais os custos de envio?",
      answer: "O envio é gratuito!",
      open: false,
    },
    {
      question: "Quanto tempo demorará a minha encomenda a chegar?",
      answer:
        "A entrega será efetuada até 24h(mesmo dia) após a confirmação da encomenda.",
      open: false,
    },
    {
      question: "O que acontece se eu não estiver na morada de entrega?",
      answer:
        "Atira-mos o seu glorioso quadro pela a janela a dentro, qualquer estrago será pago pelos nossos seguros.",
      open: false,
    },
    {
      question: "Há a possibilidade de devolução?",
      answer: "Infelizmente não. Tudo que sai da Garage, fica fora da Garage.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaq(
      faq.map((faqs, i) => {
        if (i === index) {
          faqs.open = !faqs.open;
        } else {
          faqs.open = false;
        }
        return faqs;
      })
    );
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y63zqsf",
        "template_iivtyfz",
        form.current,
        "hLnedq3vUeDc0eBjJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className="faqTitle">
        <h1>
          <img src="/images/faqtitle.png" alt="F.A.Q" />
        </h1>
      </div>

      <div className="faqContainer">
        {faq.map((faqs, i) => (
          <FaqQuestions faqs={faqs} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="contactContainer">
        <h2>
          <img src="/images/contacto.png" alt="Fala connosco" />
        </h2>

        <form ref={form} onSubmit={sendEmail} className="form">
          <h3>Estamos a um clique de ti!</h3>
          <input type="text" placeholder="Nome" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Assunto" name="subject" required />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit" className="formBtn">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
