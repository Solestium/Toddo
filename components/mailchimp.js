import React from 'react'
import PropTypes from 'prop-types'
import jsonp from 'jsonp'
import toQueryString from 'to-querystring'

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input
  const submit = () =>
    input &&
    input.value.indexOf('@') > -1 &&
    onSubmitted({
      EMAIL: input.value,
    })

  return (
    <div className="sign-up" style={style}>
      {status === 'sending' && (
        <div style={{ color: 'blue' }}>Aanmelden...</div>
      )}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={node => (input = node)}
        type="email"
        placeholder="Email"
        className="input"
      />
      <button onClick={submit} className="button">
        Houd me op de hoogte
      </button>

      <style jsx>{`
        .sign-up {
          margin-top: 2rem;
          justify-content: center;
          align-items: center;
          display: flex;
        }

        .input {
          appearance: none;
          border: 0;
          font-family: inherit;
          padding: 0.5rem;
          background: #eff7ff;
          border-radius: 3px;
          max-width: 175px;
          width: 100%;
          font-size: 0.85rem;
        }

        .input:focus {
          outline: 0;
        }

        .button {
          font-family: inherit;
          padding: 0.5rem;
          appearance: none;
          border: 0;
          cursor: pointer;
          margin-left: 1rem;
          width: 175px;
          font-size: 0.85rem;
        }
        .button:hover {
          color: #d3d3d3;
        }
      `}</style>
    </div>
  )
}

class MailchimpSubscribe extends React.Component {
  state = {
    status: null,
    message: null,
  }
  subscribe = data => {
    const params = toQueryString(data)
    const url = getAjaxUrl(this.props.url) + '&' + params
    this.setState(
      {
        status: 'sending',
        message: null,
      },
      () =>
        jsonp(
          url,
          {
            param: 'c',
          },
          (err, data) => {
            if (err) {
              this.setState({
                status: 'error',
                message: err,
              })
            } else if (data.result !== 'success') {
              this.setState({
                status: 'error',
                message: data.msg,
              })
            } else {
              this.setState({
                status: 'success',
                message: data.msg,
              })
            }
          }
        )
    )
  }
  render() {
    return this.props.render({
      subscribe: this.subscribe,
      status: this.state.status,
      message: this.state.message,
    })
  }
}

MailchimpSubscribe.propTypes = {
  render: PropTypes.func,
  url: PropTypes.string.isRequired,
}

MailchimpSubscribe.defaultProps = {
  render: ({ subscribe, status, message }) => (
    <SimpleForm
      status={status}
      message={message}
      onSubmitted={formData => subscribe(formData)}
    />
  ),
}

export default MailchimpSubscribe
