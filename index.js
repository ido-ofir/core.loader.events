

module.exports = {
    name: 'core.loader.events',
    dependencies: ['core.plugin.emitter'],
    init(def, done){
        var core = this;
        core.tap('core.plugin', function(plugin, pluginDefinition, next){
            if(pluginDefinition.events){
                core.Emitter(plugin);
            }
            next();
        });
        done();
    }
};