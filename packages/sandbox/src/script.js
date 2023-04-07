import WebflowForm from '@kennedyrose/webflow-form-controller'

new WebflowForm(`#wf-form-Email-Form`, async form => {
	form.disable().showWait()


	const data = form.getValues()
	console.log(`data`, data)

	

	form.showSuccess().hideWait().hideForm().scrollTo()
})