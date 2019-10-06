function getShortMessages(messages) {
    result = messages.map(obj => obj.message).filter(msg => msg.length < 50);
    return result
}

module.exports = getShortMessages