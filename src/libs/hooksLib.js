// A custom React Hook starts with the word use in its name. So ours is called useFormFields.

// Our Hook takes the initial state of our form fields as an object and saves it
// as a state variable called fields. The initial state in our case is an object
// where the keys are the ids of the form fields and the values are what the user enters.

// So our hook returns an array with fields and a callback function that sets the new state
// based on the event object. The callback function takes the event object and gets the form
// field id from event.target.id and the value from event.target.value. In the case of our form
// the elements, the event.target.id comes from the controlId thats set in the Form.

import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}