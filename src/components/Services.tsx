export default function Services() {
  return (
    <section className="">
      <div className="py-10 bg-main-color">
        <div className="text-center">
          <h2 className="text-4xl tracking-wider">Services</h2>
          <span className="w-20 bg-secondary-color h-1 mx-auto block"></span>
        </div>
        <div className="container mx-auto text-center pt-8 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 relative gap-5">
          <div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="icon"
            >
              <path d="M20.832 4.555A1 1 0 0020 3H4a1 1 0 00-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445l-2 3H7.868l-2-3h12.264z" />
            </svg>
            <h3 className="font-bold tracking-widest">FREE DRINKS</h3>
            <p className="text-xl px-4 mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              molestias eius libero?
            </p>
          </div>
          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="icon"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M19.071 19.071c3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0zm.872-8.03a7.966 7.966 0 00-2.286-4.698 7.966 7.966 0 00-4.717-2.288l-.01.056a11.011 11.011 0 01-8.819 8.819l-.056.01a7.966 7.966 0 002.288 4.717 7.966 7.966 0 004.698 2.286l.012-.07a11.011 11.011 0 018.819-8.82l.07-.012zm-.071 2.388v-.334a9.013 9.013 0 00-6.777 6.777h.334a7.964 7.964 0 004.228-2.215 7.963 7.963 0 002.215-4.228zm-15.76-2.54v-.223a7.963 7.963 0 012.231-4.323 7.964 7.964 0 014.323-2.232h.222a9.013 9.013 0 01-6.777 6.777z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="font-bold tracking-widest">TENNIS PLAYGROUND</h3>
            <p className="text-xl px-4 mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              molestias eius libero?
            </p>
          </div>
          <div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="icon"
            >
              <path d="M15 18.54c2.13-.33 4.5-.54 7-.54v4H5c0-.65 3.2-2.14 8-3.1v-6.5c-.84.25-1.55.81-2 1.55a3.495 3.495 0 00-6 0c.03-3.58 3.5-6.52 8-6.91V7a1 1 0 011-1 1 1 0 011 1v.04c4.5.39 7.96 3.33 8 6.91a3.495 3.495 0 00-6 0c-.45-.74-1.16-1.3-2-1.56v6.15M7 2a5 5 0 01-5 5V2h5z" />
            </svg>
            <h3 className="font-bold tracking-widest">PRIVATE BEACH</h3>
            <p className="text-xl px-4 mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              molestias eius libero?
            </p>
          </div>
          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="icon"
            >
              <path
                fill="currentColor"
                d="M20.274 9.869l-3.442-4.915 1.639-1.147 3.441 4.915-1.638 1.147zM18.39 12.409L16.67 9.95l-8.192 5.736 1.72 2.457-1.638 1.148-4.588-6.554 1.638-1.147 1.72 2.458 8.192-5.736-1.72-2.458 1.638-1.147 4.588 6.553-1.638 1.148zM20.765 7.083l1.638-1.147-1.147-1.638-1.638 1.147 1.147 1.638zM7.168 19.046l-3.442-4.915-1.638 1.147 3.441 4.915 1.639-1.147zM4.382 18.555l-1.638 1.147-1.147-1.638 1.638-1.147 1.147 1.638z "
              />
            </svg>
            <h3 className="font-bold tracking-widest">GYM</h3>
            <p className="text-xl px-4 mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              molestias eius libero?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
