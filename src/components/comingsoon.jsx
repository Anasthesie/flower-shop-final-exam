export default function ComingSoon() {
  return (
    <section className="bg-white container mx-auto pt-33 pb-44">
      <h2 className="text-xl mb-8 text-green">Coming Soon</h2>
      <div className="flex justify-center gap-8 pb-12">
        <img
          src="/public/flower1.png"
          alt="flower"
          className=" object-cover rounded shadow"
        />
        <img
          src="/public/flower2.png"
          alt="flower"
          className=" object-cover rounded shadow"
        />
        <img
          src="/public/flower3.png"
          alt="flower"
          className="object-cover rounded shadow"
        />
      </div>
      <p className="text-sm text-green leading-relaxed">
        We're excited to announce that our beautiful flower collection will soon
        be available for sale! Flowers bring life, color, and joy to any space,
        and we want to help you create a vibrant, welcoming environment in your
        home or garden. Stay tuned for a stunning variety of fresh blooms,
        carefully selected to complement our handcrafted pots perfectly.
      </p>
    </section>
  );
}
