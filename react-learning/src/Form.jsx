function handleFormSubmit(event) {
    // Every event handler in React automatically receives an "event" object.
    // This event object contains information about what happened (e.g., which element triggered the event).

    // preventDefault() stops the browser's default behavior.
    // For a form, the default action is to refresh/reload the page when it is submitted.
    // By calling event.preventDefault(), we keep the page from reloading.
    event.preventDefault();

    console.log("Form Submitted");
}

function Form() {
  return (
    <form 
      // onSubmit is a React event handler for form submission.
      // When the form is submitted, React will call handleFormSubmit
      // and automatically pass the "event" object to it.
      onSubmit={handleFormSubmit}
    >
      <input type="text" />
      <button type="submit" style={{marginLeft: 10}}>Submit</button>
    </form>
  );
}

export default Form;