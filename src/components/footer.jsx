export default function Footer() {
  return (
    <div className=" relative flex justify-center px-4 py-8">
      <img src="/public/footer.png" alt="footer-img" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-brown">
        <h2 className="text-2xl md:text-4xl font-bold">
          Free Shipping Services
        </h2>
        <p className="text-sm md:text-base mt-2 italic">
          *only for the same region
        </p>
        <p className="text-sm ">+62 1189-2719-00 | order@platify.com</p>
      </div>
    </div>
  );
}
