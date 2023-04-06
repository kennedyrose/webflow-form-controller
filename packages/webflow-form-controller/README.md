# Webflow Form Controller

## Installation
```bash
npm i --save @kennedyrose/webflow-form-controller
```
or
```bash
yarn add @kennedyrose/webflow-form-controller
```



## Usage
```js
import WebflowForm from '@kennedyrose/webflow-form-controller'

let form = new WebflowForm(`#contact-form`, async () => {
	// Disable form and show wait message
	form.disable().showWait()

	// Do something with the data
	let data = form.getValues()
	console.log(data)

	// Show form success and reset form
	form.success().hideWait().enable().reset()
})
```

`WebflowForm` takes 2 arguments. The first is either a DOM node or a query selector string for the form that you want to control. The second argument is a submit handler function. It returns an object that can be used to control the Webflow form with various methods.

## Methods
### `getValues`
Returns an object of the form values. Keys are the `name` field of the inputs.

```js
let data = form.getValues()
```


### `showSuccess`
Shows the form success message.

```js
// Show the default success message that's been set in Webflow
form.showSuccess()

// Show a custom message
form.showSuccess(`Form submitted. <strong>Thank you!</strong>`)
```

### `hideSuccess`
Hides the form success message.

```js
form.hideSuccess()
```

### `showError`
Shows the form error message.

```js
// Show the default error message that's been set in Webflow
form.showError()

// Show a custom message
form.showSuccess(`<strong>Uh oh!</strong> Something went wrong.`)
```

### `hideError`
Hides the form error message.

```js
form.hideSuccess()
```

### `scrollTo`
Scrolls to the top of the form.

```js
form.scrollTo()

// You can supply an offset value if you want it to scroll a little higher or lower
// The default value is -100
form.scrollTo({ offset: -200 })
```

### `reset`
Resets the form values to their default state.

```js
form.reset()
```

### `showWait`
Show the "waiting" text in the submit button.

```js
// Show the default text that's set in Webflow's designer
form.showWait()

// Or set your own message
form.showWait(`Waiting...`)
```

### `hideWait`
Reset the waiting text back to the default submit button text.

```js
form.hideWait()
```

### `disable`
Disable all inputs and form submission for the form. It's a good idea to do this right after the form submits while you're processing the submission to prevent multiple submit handlers from running at the same time.

```js
form.disable()
```

### `enable`
Enables the form if it's been disabled.

```js
form.enable()
```

### `hideForm`
Hides the form. Success and error messages can still be shown. 

```js
form.hideForm()
```

### `showForm`
Shows a form if it's been hidden.

```js
form.showForm()
```