import Link from "next/link";

function NotFoundPage() {
  return (
    <div className='page-404 px-lg py-xxl text-center'>
      <div className='inner'>
        <h1 className='mb-lg md:text-2xl'>Oops :(! Page not found</h1>
        <div className='mb-2xl'>
          <p>
            Looks like this page doesn’t exist anymore <br />
            or maybe it never did.
          </p>
        </div>
        <Link href='/' className='ui-btn ui-btn__accent'>
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
