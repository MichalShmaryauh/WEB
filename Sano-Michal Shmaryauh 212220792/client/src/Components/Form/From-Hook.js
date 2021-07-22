/**
THIS IS FORM-HOOK COMPONENT THAT UPDATE THE STATE OF FORM
 */   
   import { useState } from "react";
   export default function useFormState(initialFormValues, initialErrorsValues,  handleFormSubmit, handleErrors){
 
       const [formValues, setFormValues] = useState(initialFormValues);
       const [errorValues, setErrorValues] = useState(initialErrorsValues)

       const updateState = (event) => {
           setFormValues({
               ...formValues,
               [event.target.name] : event.target.value
           });
           const errorMessage = handleErrors[event.target.name](event.target.value); 
               setErrorValues({
                   ...errorValues,
               [event.target.name] : errorMessage
               })
   
           }
           
       const handleSubmit= (event) => {
           event.preventDefault();
           handleFormSubmit();
        }
   
       return [handleSubmit, updateState, formValues, errorValues];
   }