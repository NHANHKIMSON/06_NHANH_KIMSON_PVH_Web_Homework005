import Link from "next/link";

export default function CardCartoon(items) {
  
  return (
    <>
      <div className="mb-20">
        <div>
          <Link href="/books-detail" className="space-y-4">
            <div className="w-80 h-[420px] relative">
              <img
                alt={items.ct_title}
                src={items.image}
                className="rounded-3xl h-[95%]"
              />
            </div>
            <div>
              <h2 className="text-xl font-medium mb-1">
                {items.ct_title}
              </h2>
              <div className="text-lg text-deep-teal font-medium flex gap-3">
                <p className="flex gap-2 items-center text-teal-600">
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
                  <span className="text-teal-600">{items.view_count}</span>
                   times
                </p>
                <p className="text-teal-600">|</p>
                <p className="text-teal-600">{items.published_year?.split('-')[0] || 'N/A'}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
