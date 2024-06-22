import Hero from "../components/Hero";
import book from "../assets/book.png"

function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-2 ">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="border-2 p-2">
            <img src={book} alt="haerin" />
            <div className="text-center mt-2 space-y-2">
              <h>title</h>
              <p>description</p>
              <div className="flex flex-wrap">
                {["beauty", "elegent", "humor", "cute", 'kind'].map((genre) => (
                  <span className="mx-1 my-1 bg-blue-500 text-white px-2 py-1 rounded-full text-sm ">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
