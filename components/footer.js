import Link from 'next/link'

const Footer = () => (
  <div className="footer">
    <div className="container">
      <Link href="/">
        <a>Ga terug</a>
      </Link>
    </div>

    <style jsx>{`
      .footer {
        padding-top: 1rem;
        font-size: 1.1rem;
      }

      .footer a {
        color: #d0d0d0;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Footer
