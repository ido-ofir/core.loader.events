
# core.loader.events

enables plugins to emit events

related to <a href="https://github.com/ido-ofir/core.plugin.emitter">core.plugin.emitter</a>

```js
let core = new require('core.constructor')();
 
core.plugin([
    require('core.plugin.emitter'),
    require('core.loader.events')
]);

// plugins can now declare actions on the plugin definition object:
core.plugin({
    name: 'test',
    events: ['a', 'b']
});

let { test } = core.plugins;

// plugin can now emit events
test.on('someEvent', listenerFunction);
test.off('someEvent', listenerFunction);
test.emit('someEvent', { some: 'data' });
```
