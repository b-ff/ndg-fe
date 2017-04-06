import app from '../../app';

class constructorComponentCtrl {
    constructor ($http, jsonConfig) {
        this.$http = $http;
        this.jsonConfig = jsonConfig;
        this.text = this.jsonConfig.text;

        // Basic interface text
        this.text = jsonConfig.text;

        // Here will be permanent unique link to current meme returned from backend after save
        this.link = '';

        this.reset();
    }

    /**
     * Restores default form state
     */
    reset () {
        this.orgName = this.jsonConfig.defaultValues.orgName;
        this.name = this.jsonConfig.defaultValues.name;
        this.subtitle = this.jsonConfig.defaultValues.subtitle;
        this.photo = this.jsonConfig.defaultValues.photo;
    }

    /**
     * Save current meme
     */
    save () {
        this.$http.post(`${this.jsonConfig.api.host}${this.jsonConfig.api.saveURL}`, {
            orgName: this.orgName,
            name: this.name,
            subtitle: this.subtitle,
            image: this.image
        }).then((response) => {
            if (response.data) {
                this.link = response.data;
            }
        }, (err) => {
            console.error(err);
        });
    }
}

constructorComponentCtrl.$inject = ['$http', 'jsonConfig'];

app.component('constructor', {
    controller: constructorComponentCtrl,
    controllerAs: 'ctrl',
    template: require('./constructor.jade')()
});
