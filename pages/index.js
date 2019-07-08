import Link from 'next/link'
import MailchimpSubscribe from '../components/mailchimp'

import Page from '../layouts/app'

export default () => (
  <Page>
    <div className="list">
      <div className="title">Toddo</div>

      <div className="subtitle">
        Voor hotels, groepsaccommodaties, campings en b&b
      </div>

      <MailchimpSubscribe
        url={
          'https://solestium.us20.list-manage.com/subscribe/post?u=84f0304fac4f5d8e8e3ef45c7&amp;id=6dee8e0c83'
        }
      />
    </div>

    <footer>
      Een project van{' '}
      <a href="https://solestium.nl" className="link">
        Solestium
      </a>
    </footer>

    <style jsx global>{`
      #__next {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
    <style jsx>{`
      .list {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: 3rem;
        text-align: center;
      }

      .subtitle {
        color: #8e8e8e;
        text-align: center;
        text-decoration: none;
        margin: 0 0.5rem;
        transition: all 0.2s ease;
        letter-spacing: 1px;
        cursor: default;
      }

      .subtitle:hover {
        color: #d3d3d3;
      }

      footer {
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem 0;
        color: #d3d3d3;
        font-size: 0.8rem;
      }

      footer .link {
        text-decoration: none;
        color: #8e8e8e;
      }

      footer .link:hover {
        text-decoration: underline;
      }
    `}</style>
  </Page>
)
