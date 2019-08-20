/* eslint-disable */
module.exports = {
    
    request: function (req, token) {
        const API_URL = process.env.API_URL + '/v1/'
        const authLoginUrl = API_URL + 'auth/login'
        const resetLoginUrl = API_URL + 'password/reset'

        if (req.url === authLoginUrl || req.url === resetLoginUrl) {
            localStorage.removeItem('user-token')
            this.options.http._setHeaders.call(this, req, {Authorization: ''});
        } else {
            this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
        }
    },
    
    response: function (res) {
        let token = res.data.token

        if (token) {
            token = token.split(/Bearer\:?\s?/i);
            
            return token[token.length > 1 ? 1 : 0].trim();
        }
    }
};