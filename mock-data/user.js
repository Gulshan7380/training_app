// admin: can do everything
// user-admin: can do user related activities: eg: create user, update user, delete user
// support: access to read only data
const USERS = {
    "khazi": {
        "userName": "khazi",
        "id": "123456khazi123456",
        "roles": [ 'admin', 'user-admin', 'support']
    },
    "gulshan": {
        "userName": "gulshan",
        "id": "123456gulshan123456",
        "roles": [ 'user-admin']
    },
    "anurag": {
        "userName": "khazi",
        "id": "123456anurag123456",
        "roles": [ 'support']
    }
};

module.exports = {
    USERS: USERS
};