When('I send GET request to {}', async function (pah) {
    const response = await restHelper.getData(`https://todomvc.com/examples/react/#/`);
    this.context['response'] = response;
});