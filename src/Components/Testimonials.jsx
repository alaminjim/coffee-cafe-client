const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Roy",
      location: "Kolkata, India",
      feedback:
        "This platform helped me find the perfect strong coffee for late-night work. Love the recommendations!",
    },
    {
      name: "Farhan Ahmed",
      location: "Dhaka, Bangladesh",
      feedback:
        "I used to be confused with so many options. Now I get precise suggestions. Excellent!",
    },
    {
      name: "Lisa Gomez",
      location: "Manila, Philippines",
      feedback:
        "Very clean UI and relevant suggestions. I recommended two coffees already!",
    },
    {
      name: "Rajeev Sinha",
      location: "Bengaluru, India",
      feedback:
        "Perfect for coffee lovers. Found the right filter coffee I was looking for.",
    },
  ];

  return (
    <div>
      <section className="bg-[#4a1e1b8a] py-10 rounded-md my-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-100">
          What Coffee Lovers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6  max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#854d3d] rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="mb-4">
                <svg
                  className="w-6 h-6 text-yellow-400 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <p className="text-amber-200 italic">“{t.feedback}”</p>
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {t.name}
              </div>
              <div className="text-xs text-gray-100">{t.location}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
