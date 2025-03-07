import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="home-container text-center">
      <div className="welcome-section">
        <h1 className="display-4 fw-bold">WELCOME TO MY ACTIVITY</h1>
        <h3 className="text-primary">PRELIM_HO3_States_And_Links</h3>
      </div>

      <div className="content-section mt-4">
        <p className="lead">
          "Call center sa gabi at estudyante sa umaga—literal na walang pahinga!
          Sa gabi, ‘Thank you for calling!’ sa umaga, ‘Good morning, ma’am/sir!’
          Tapos ‘pag sobrang puyat na, nagkakapalit-palit na: sa customer,
          ‘Present po, ma’am!’ tapos sa professor, ‘How may I assist you?’
          HAHAHA! ‘Yung eyebags ko, permanent resident na sa mukha ko, pero
          laban lang!"
        </p>
        <p>
          Bayaning puyat sa gabi, estudyanteng ‘loading’ sa umaga! Tulog ko?
          Wala. Energy ko? Paubos. Deadline ko? Overdue. Pero pangarap ko? Still
          loading… pero darating din! PS: Sorry sir sa mga late activities,
          promise gising naman ako sa puso’t isipan… katawan ko lang talaga
          ‘yung naiwan sa kama!"** 😆☕🎓
        </p>
      </div>

      <div className="image-section mt-4">
        <img
          src="https://i.pinimg.com/originals/59/2d/5c/592d5caa3e86c303a6afe9064dc1546d.gif"
          alt="Coding background"
          className="img-fluid rounded shadow-lg"
        />
      </div>
    </div>
  );
}
