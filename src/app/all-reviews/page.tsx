"use client";
import { useState } from "react";
import Image from "next/image";
import Review from "../components/ReviewCard";
import city1 from "../../../public/city1.jpeg";
import city2 from "../../../public/city2.jpeg";
import city3 from "../../../public/city3.jpeg";
import friends from "../../../public/friends.jpeg";
import Filter from "../components/Filter";
import CreateReview from "../components/CreateReview";

export default function Sample() {
  type ReviewType = {rating:number; reviewText:string}

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  function openModal() {
    setIsModalOpen(true);
  }

  function handleReviewSubmit(review: ReviewType) {
    setReviews([...reviews, review]);
  }

  return (
    <div className="m-auto w-[90%] overflow-x-hidden">
      <div className="mb-3 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="input input-bordered flex items-center gap-2">
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
            <input type="text" className="grow" placeholder="Search" />
          </label>

          <h3 className="text-[16px] font-medium leading-[19.2px] md:hidden">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </h3>
          <p className="text-[12px] font-medium leading-[18px] md:hidden">
            &quot;450 Reviews (People are raving about the location)
          </p>
        </div>

        <div className="hidden justify-between md:flex">
          <div className="flex flex-col gap-1">
            <h3 className="text-[16px] font-medium leading-[19.2px]">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h3>
            <p className="text-[12px] font-medium leading-[18px]">
              &quot;450 Reviews (People are raving about the location)
            </p>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              onClick={openModal}
              className="btn btn-primary h-10 w-[194px] flex-auto rounded-md text-white hover:btn-secondary"
            >
              LEAVE A REVIEW
            </button>

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-[55%] rounded bg-white p-4">
                  <CreateReview onClose={() => setIsModalOpen(false)}
                  onReviewSubmit={handleReviewSubmit}
                  />
                </div>
              </div>
            )}

            <button className="btn h-10 w-[56px] flex-auto rounded-md border-primary bg-transparent hover:bg-transparent">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4297 15.4047L11.4282 15.4037L7.13009 12.4654C7.12987 12.4652 7.12964 12.4651 7.12941 12.4649C6.79693 12.2361 6.38539 12.1372 6 12.1372C5.61461 12.1372 5.20308 12.2361 4.87059 12.4649C4.87036 12.4651 4.87013 12.4652 4.86991 12.4654L0.574283 15.402C0.547306 15.4199 0.522508 15.4348 0.5 15.447V0.829817C0.5 0.819563 0.506521 0.751397 0.634515 0.663771C0.759122 0.578463 0.957651 0.509998 1.1985 0.509998H1.42322C1.45966 0.509998 1.49186 0.50686 1.51946 0.50261C1.52489 0.501772 1.53016 0.500885 1.5351 0.5H10.4499C10.4549 0.500885 10.4601 0.501772 10.4656 0.50261C10.4932 0.50686 10.5254 0.509998 10.5618 0.509998H10.7865C11.0269 0.509998 11.2264 0.578251 11.354 0.664896C11.4775 0.748733 11.4975 0.819381 11.5 0.842613V15.4487C11.4786 15.4368 11.4552 15.4223 11.4297 15.4047Z"
                  stroke="#3366FF"
                />
              </svg>
            </button>
            <button className="btn h-10 w-[56px] flex-auto rounded-md border-primary bg-transparent hover:bg-transparent">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7885 17.2821L16.1042 17.4659L16.3753 17.2209C16.8129 16.8254 17.3762 16.58 18 16.58C19.3339 16.58 20.42 17.6661 20.42 19C20.42 20.3339 19.3339 21.42 18 21.42C16.6661 21.42 15.58 20.3339 15.58 19C15.58 18.8247 15.604 18.6439 15.6464 18.4658L15.7322 18.1053L15.4122 17.9183L8.29224 13.7583L7.97224 13.5713L7.7003 13.8231C7.24562 14.2441 6.65469 14.5 6 14.5C4.61614 14.5 3.5 13.3839 3.5 12C3.5 10.6161 4.61614 9.5 6 9.5C6.65469 9.5 7.24562 9.75589 7.7003 10.1769L7.97196 10.4284L8.29182 10.242L15.3418 6.13196L15.6558 5.94892L15.5786 5.59378C15.531 5.37472 15.5 5.1861 15.5 5C15.5 3.61614 16.6161 2.5 18 2.5C19.3839 2.5 20.5 3.61614 20.5 5C20.5 6.38386 19.3839 7.5 18 7.5C17.3453 7.5 16.7544 7.24411 16.2997 6.82312L16.028 6.57157L15.7082 6.75804L8.65818 10.868L8.34421 11.0511L8.42141 11.4062C8.46903 11.6253 8.5 11.8139 8.5 12C8.5 12.1861 8.46903 12.3747 8.42141 12.5938L8.34415 12.9492L8.65848 13.1321L15.7885 17.2821Z"
                  stroke="#3366FF"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <Filter filter="Schools" />
          <Filter filter="Hospitals" />
          <Filter filter="Airport" />
          <Filter filter="Gym" />
          <Filter filter="Park" />
          <Filter filter="Wi-Fi" />
        </div>

        <div className="flex gap-3 md:hidden">
          <button
            onClick={openModal}
            className="btn btn-primary h-10 w-[194px] flex-auto rounded-md text-white hover:btn-secondary"
          >
            LEAVE A REVIEW
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="rounded bg-white p-4">
                <CreateReview
                  onClose={() => setIsModalOpen(false)}
                  onReviewSubmit={handleReviewSubmit}
                />
              </div>
            </div>
          )}

          <button className="btn h-10 w-[56px] flex-auto rounded-md border-primary bg-transparent hover:bg-transparent">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4297 15.4047L11.4282 15.4037L7.13009 12.4654C7.12987 12.4652 7.12964 12.4651 7.12941 12.4649C6.79693 12.2361 6.38539 12.1372 6 12.1372C5.61461 12.1372 5.20308 12.2361 4.87059 12.4649C4.87036 12.4651 4.87013 12.4652 4.86991 12.4654L0.574283 15.402C0.547306 15.4199 0.522508 15.4348 0.5 15.447V0.829817C0.5 0.819563 0.506521 0.751397 0.634515 0.663771C0.759122 0.578463 0.957651 0.509998 1.1985 0.509998H1.42322C1.45966 0.509998 1.49186 0.50686 1.51946 0.50261C1.52489 0.501772 1.53016 0.500885 1.5351 0.5H10.4499C10.4549 0.500885 10.4601 0.501772 10.4656 0.50261C10.4932 0.50686 10.5254 0.509998 10.5618 0.509998H10.7865C11.0269 0.509998 11.2264 0.578251 11.354 0.664896C11.4775 0.748733 11.4975 0.819381 11.5 0.842613V15.4487C11.4786 15.4368 11.4552 15.4223 11.4297 15.4047Z"
                stroke="#3366FF"
              />
            </svg>
          </button>
          <button className="btn h-10 w-[56px] flex-auto rounded-md border-primary bg-transparent hover:bg-transparent">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7885 17.2821L16.1042 17.4659L16.3753 17.2209C16.8129 16.8254 17.3762 16.58 18 16.58C19.3339 16.58 20.42 17.6661 20.42 19C20.42 20.3339 19.3339 21.42 18 21.42C16.6661 21.42 15.58 20.3339 15.58 19C15.58 18.8247 15.604 18.6439 15.6464 18.4658L15.7322 18.1053L15.4122 17.9183L8.29224 13.7583L7.97224 13.5713L7.7003 13.8231C7.24562 14.2441 6.65469 14.5 6 14.5C4.61614 14.5 3.5 13.3839 3.5 12C3.5 10.6161 4.61614 9.5 6 9.5C6.65469 9.5 7.24562 9.75589 7.7003 10.1769L7.97196 10.4284L8.29182 10.242L15.3418 6.13196L15.6558 5.94892L15.5786 5.59378C15.531 5.37472 15.5 5.1861 15.5 5C15.5 3.61614 16.6161 2.5 18 2.5C19.3839 2.5 20.5 3.61614 20.5 5C20.5 6.38386 19.3839 7.5 18 7.5C17.3453 7.5 16.7544 7.24411 16.2997 6.82312L16.028 6.57157L15.7082 6.75804L8.65818 10.868L8.34421 11.0511L8.42141 11.4062C8.46903 11.6253 8.5 11.8139 8.5 12C8.5 12.1861 8.46903 12.3747 8.42141 12.5938L8.34415 12.9492L8.65848 13.1321L15.7885 17.2821Z"
                stroke="#3366FF"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-row-reverse justify-between gap-6 md:flex ">
        <div className="mb-3 grid h-[244px] w-[130vw] grid-cols-3 gap-2 md:w-[80%] md:grid-cols-2">
          <Image
            src={city1}
            alt="Property"
            style={{ objectFit: "cover" }}
            className="order-1 row-span-2 h-[235px] w-auto rounded-md md:row-span-1 md:h-[224px] md:w-[235px]"
          />
          <Image
            src={city2}
            alt="Property"
            style={{ objectFit: "cover" }}
            className="order-2 h-[110px] w-[160px] rounded-md md:h-[224px] md:w-[235px]"
          />
          <Image
            src={city3}
            alt="Property"
            style={{ objectFit: "cover" }}
            className="order-4 h-[110px] w-[160px] rounded-md md:h-[224px] md:w-[235px]"
          />
          <Image
            src={friends}
            alt="Property"
            style={{ objectFit: "cover" }}
            className="order-3 h-[110px] w-[160px] rounded-md md:h-[224px] md:w-[235px]"
          />
          <Image
            src={city3}
            alt="Property"
            style={{ objectFit: "cover" }}
            className="order-5 h-[110px] w-[160px] rounded-md md:hidden"
          />

          {/* <div className="z-50 hidden bg-[#1E1E1E] text-[#FBFAFC] font-normal text-base leading-4 md:inline-block order-4">
            VIEW MORE
          </div> */}
        </div>

        <div className="flex-col md:flex">
          <Review
            rating={4.0}
            review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets."
          />
          <Review
            rating={4.0}
            review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets."
          />
          <Review
            rating={4.0}
            review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets."
          />

          {reviews.map((review, index) =>(
            <Review key={index} rating={review.rating} review={review.reviewText} />
          ))}
        </div>
      </div>
    </div>
  );
}
