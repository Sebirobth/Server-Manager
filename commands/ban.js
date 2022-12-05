module.exports = {
    name: 'ban',
    execute(msg, args, dc, client) {
        client.users.cache.get(parseInt(args[0])).ban();
    }
}