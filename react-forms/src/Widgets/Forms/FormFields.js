import React from 'react';

const FormFields = (props) => {
  const renderFields = () => {
    const formArray = [];
    
    for (let elementName in props.formdata) {
      formArray.push({
        id: elementName,
        settings: props.formdata[elementName]
      })
    }

    return formArray.map((item, i) => {
      return (
        <div key={i} className='form_element'>
          {renderTemplates(item)}
        </div>
      );
    });
  }

  const showLabel = (show, label) => {
    return show ?
      <label>{label}</label> 
        :
      '';
  }

  const changeHandler = (event, id, blur) => {
    const newState = props.formdata;
    newState[id].value = event.target.value;

    // if (blur) {
    let validData = validate(newState[id]);
    newState[id].valid = validData[0];
    newState[id].validationMessage = validData[1];
    // }

    // newState[id].touched = blur;
    props.change(newState);
  }

  const validate = element => {
    let error = [true, ''];

    if (element.validation.minlength) {
      const valid = element.value.length >= element.validation.minlength;
      const message = !valid ? `Must be greater than ${element.validation.minlength} letters`: '';
      error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required' : ''}`
    
      error = !valid ? [valid, message] : error;
    }
    
    return error;
  }

  const showValidation = data => {
    let errorMessage = null;

    if (data.validation && !data.valid) {
      errorMessage = (
        <div className="label_error">
          {data.validationMessage}
        </div>
      )
    }

    return errorMessage;
  }

  const renderTemplates = (data) => {
    let formtemplate = '';
    let values = data.settings;

    switch (values.element) {
      case ('input'):
        formtemplate = (
          <div>
            {showLabel(values.label, values.labeltext)}
            <input
              {...values.config}
              value={values.value}
              onChange={
                event => changeHandler(event, data.id)
              }
            />
            {showValidation(values)}
          </div>
        );
        break;
      case ('textarea'): 
        formtemplate = (
          <div>
            {showLabel(values.label, values.labeltext)}
            <textarea
              {...values.config}
              value={values.value}
              onChange={event => changeHandler(event, data.id)}
            >
            </textarea>
          </div>
        );
        break;
      case ('select'): 
        formtemplate = (
          <div>
            {showLabel(values.lavel, values.labeltext)}
            <select
              value={values.value}
              name={values.config.name}
              onChange={event => changeHandler(event, data.id)}
            > 
              {
                values.config.options.map((item, i) => {
                  return (
                    <option key={i} value={item.val}>
                      {item.text}
                    </option>
                  );
                })  
              }
            </select>
          </div>
        );
        break;
      default:
        formtemplate = null;
    }

    return formtemplate;
  }
  
  return (
    <div>
      {renderFields()}
    </div>
  );
}

export default FormFields;