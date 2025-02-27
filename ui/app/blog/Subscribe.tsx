'use client'

const Subscribe = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    window.open('https://buttondown.com/tbumgarner', 'popupwindow')
  }

  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/tbumgarner"
      method="post"
      target="popupwindow"
      onSubmit={handleSubmit}
      className="embeddable-buttondown-form"
    >
      <label htmlFor="bd-email">Enter your email</label>
      <input type="email" name="email" id="bd-email" />
      <input type="submit" value="Subscribe" />
    </form>
  )
}

export default Subscribe
