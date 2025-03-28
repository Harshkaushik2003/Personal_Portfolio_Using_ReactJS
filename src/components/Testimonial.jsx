import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Harsh"}
          feedback={"You're a very quick learner."}
        />
        <TestimonialCard
          name={"Aakash"}
          feedback={"Wow what a portfolio, doesn't expected this much"}
        />
        <TestimonialCard
          name={"Rajeev"}
          feedback={"Amazing seems like you should be the CEO of Google"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);
export default Testimonial;
