function sendMail(contactForm) {
    const templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value,
        "reply_to": contactForm.email.value
    }

    emailjs.send('service_fsc956z', 'template_9kpwvfl', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

    return false
    
}