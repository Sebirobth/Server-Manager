module.exports = {
    name: 'jax',
    execute(msg, args, dc) {
        try {
            eval(args.join(' '));
        } catch (err) {
            msg.reply(err);
        }
    }
}