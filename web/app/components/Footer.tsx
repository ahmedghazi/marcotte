export default function Footer() {
  return (
    <footer>
      <div className='inner'>
        <p>Aïdan Marcotte is a florist based in Paris</p>
        <ul className='flex'>
          <li>
            <a
              href='mailto:info@aidan-marcotte.com'
              target='_blank'
              rel='noopener noreferrer'>
              Email
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/marcotte.paris/'
              target='_blank'
              rel='noopener noreferrer'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
