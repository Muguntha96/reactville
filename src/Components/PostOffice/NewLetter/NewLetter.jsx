//Components & Data
import { initialState } from "./initialState"

const NewLetter = () => {
  console.log(initialState)
  return (
    <form className="post-office-form">

      <header>
        <h3>New Letter</h3>
        SelectBox component here
        SelectRecipient component here
      </header>

      <section>
        <h4>Sender</h4>
        <input
          required
          name="sender"
          placeholder="Sender"
          value=""
          onChange=""
        />
        <h4>Enter Subject</h4>
        <input
          required
          name="subject"
          placeholder="Subject"
          value=""
          onChange=""
        />
        <h4>Letter Content</h4>
        <textarea
          required
          name="content"
          placeholder="Content"
          value=""
          onChange=""
        />
        <button type="submit">SEND LETTER</button>
      </section>

    </form>
  )
}

export default NewLetter