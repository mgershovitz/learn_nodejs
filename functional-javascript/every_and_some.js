function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(usr => goodUsers.includes(usr));
    };
}

module.exports = checkUsersValid