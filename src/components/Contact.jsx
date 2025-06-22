import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        const data = await response.json();
        console.error("Error response:", data);
        alert("There was a problem sending your message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    }
  };

  return (
    <section id="contact" className="w-full py-12 border-t border-[#ffffff10]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">Let's talk</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
          Contact
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="text-[var(--white-icon)]">
            <p className="mb-4">
              Have a question or a project in mind? Feel free to reach out.
            </p>
            <div className="flex items-center gap-2">
              <span>Location:</span>
              <span className="text-[var(--white)]">
                Vadodara,Gujarat, India
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!submitted ? (
              <form
                id="contact-form"
                action="https://getform.io/f/avryjlna"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)]"
                />
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email"
                  required
                  className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)]"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  required
                  className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[var(--white-icon-tr)] text-[var(--white)] rounded-lg opacity-60 transition-opacity border border-[var(--white-icon-tr)] hover:opacity-100 hover:bg-[var(--white-icon-tr)]"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="flex justify-center items-center mt-4 text-[var(--white)] text-lg">
                ✅ Thank you for your message!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
