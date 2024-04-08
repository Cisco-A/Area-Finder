import HomeReviewCard from "./components/HomeReviewCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="m-auto  h-screen w-[90%] justify-between md:flex">
        <div className="flex h-[80%] flex-col content-center justify-center gap-y-6 overflow-hidden md:w-[40%]">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-[40px] font-bold leading-[48px]">
              Find a place you will love to live!
            </h1>
            <p className="leading[25.6px] text-base font-normal text-neutral">
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </p>
          </div>

          <div>
            <form action="">
              <label className="input input-bordered mb-2 flex h-[50px] w-[343px] items-center gap-2 rounded-md border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Address"
                />
              </label>

              <Link href="/all-reviews">
                <button
                  type="submit"
                  className="btn btn-primary h-[50px] w-[146px] rounded-md hover:btn-secondary"
                >
                  SEARCH
                </button>
              </Link>
            </form>
          </div>
        </div>

        <div className="relative hidden h-[90%] grid-cols-2 justify-between gap-4 overflow-hidden bg-[#F1F3F4] md:grid">
          <HomeReviewCard className="order-1" />
          <HomeReviewCard className="order-2" />
          <HomeReviewCard className="order-3" />
          <HomeReviewCard className="order-4" />
          <HomeReviewCard className="order-5" />
          <HomeReviewCard className="order-6 " />

          <div className="absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </main>
  );
}
