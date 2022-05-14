"use strict";
const fetch = require('node-fetch');

class ciaoInstance {
    constructor(interfaceURL) {
        interfaceURL = new URL(interfaceURL);
        interfaceURL = interfaceURL.hostname;
        this.interfaceURL = interfaceURL
    }
    async check(checkVal) {
        try {
            const response = await fetch("https://" + this.interfaceURL + "/checks/" + checkVal + ".json");
            var data = await response.json();
            if (typeof data.active != "boolean" && typeof data.id != "number") {
                return "Enter url for a Ciao Instance"
            }
            return data
        } catch (e) {
            return "Valid Ciao Instance URL"
        }
    }
}

module.exports = ciaoInstance;