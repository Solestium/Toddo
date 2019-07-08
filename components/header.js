import Link from 'next/link'

const Header = ({ subtitle }) => (
  <div className="top-bar">
    <div className="header">
      <div className="container">
        <div className="title">
          <Link href="/">
            <a>Solestium</a>
          </Link>
        </div>
      </div>
    </div>

    {subtitle && (
      <div className="sub-header">
        <div className="container">
          <div className="sub-title">{subtitle}</div>
        </div>
      </div>
    )}

    <style jsx>{`
      .header {
        padding: 3rem 0;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .title {
        font-size: 1.75rem;
      }

      .sub-title {
        font-size: 1.25rem;
      }

      .title a {
        color: #1a202c;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .title a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
)

export default Header
