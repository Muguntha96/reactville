
const NewBox = () => {
  return (
    <section className="post-office-form">

      <header>
        <h3>New PO Box</h3>
        <p>Total: $</p>
        <button id="submit-box-btn">SUBMIT</button>
      </header>

      <section>
        BoxHolders component
        <input placeholder="First Name" type="text" name="firstName" value="" onChange="" />
        <input placeholder="Last Name" type="text" name="lastName" value="" onChange="" />
        <button id="add-boxholder">ADD BOXHOLDER</button>
      </section>

    </section>
  )
}

export default NewBox