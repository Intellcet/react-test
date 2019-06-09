const users = {
    vasya: {
        login: 'vasya',
        password: '123',
    },
    petya: {
        login: 'petya',
        password: '321',
    },
};

class LoginManager {

    constructor(options) {
        options = options instanceof Object ? options : {};
    }

    static checkLogin(user) {
        for (const key in users) {
            const u = users[key];
            if (u.login === user.login && u.password === user.password) {
                return true;
            }
        }
        return false;
    }

}

export default LoginManager;