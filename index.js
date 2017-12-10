

module.exports = {
    name: 'core.loader.events',
    hooks: [{
        channel: 'core.plugin',
        hook(plugin, pluginDefinition, next){
            if(pluginDefinition.events){
                var core = this;
                core.Emitter(plugin);
            }
            next();
        }
    }]
};