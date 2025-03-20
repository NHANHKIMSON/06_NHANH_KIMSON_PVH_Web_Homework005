import Image from "next/image";

const CartoonDetailCard = ({ cartoon }) => {
  console.log("Hello", cartoon);

  return (
    <>
      <div className="bg-white mt-32 max-h-full p-20 pb-14 rounded-[50px]">
        <div className="flex justify-end relative">
          <img
            alt={cartoon.title || "cartoon Cover"}
            width={300}
            height={350}
            className="rounded-3xl drop-shadow-xl absolute -top-52"
            src={cartoon.payload.image}
          />
        </div>
        <div className="space-y-5 mt-48">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">{cartoon.payload.ct_title}</h2>
            <p>
              By <span className="font-medium capitalize text-teal-600">
                {cartoon.payload.ct_creator}
              </span>
            </p>
            <div className="text-lg text-deep-teal font-medium flex gap-3">
                <p className="flex gap-2 cartoon-center text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                      stroke="#087E8B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                      stroke="#087E8B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="text-teal-600">{cartoon.payload.view_count}</span>
                   times
                </p>
                <p className="text-teal-600">|</p>
                <p className="text-teal-600">{cartoon.payload.published_year?.split('-')[0] || 'N/A'}</p>
              </div>
          </div>
          <p className="text-justify">
            {cartoon.payload.ct_description || "No description available."}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartoonDetailCard;
