// src/components/Business.jsx

const Business = (props) => {
  const bsn = props.bsn;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={bsn.imageSrc} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {bsn.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bsn.address}
          <br />
          {bsn.city}, {bsn.state} {bsn.zipCode}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bsn.category}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bsn.rating} stars out of 5
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Reviews: {bsn.reviewCount}
        </p>
      </div>
    </div>
  );
};

export default Business;
