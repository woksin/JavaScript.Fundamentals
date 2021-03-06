(function () {
    const systemJSPrototype = System.constructor.prototype;
    const instantiate = systemJSPrototype.instantiate;
    systemJSPrototype.instantiate = function (url, parent) {
        if (url.slice(-5) !== '.json')
            return instantiate.call(this, url, parent);
        const loader = this;
        return fetch(url)
            .then(function (res) {
                if (!res.ok)
                    throw new Error('Fetch error: ' + res.status + ' ' + res.statusText + (parent ? ' loading from  ' + parent : ''));
                return res.text();
            })
            .then(function (source) {
                return loader.transform.call(this, url, JSON.parse(source));
            })
            .then(function (source) {
                return [[], function (_export) {
                    return {
                        setters: [],
                        execute: function () {
                            _export(source);
                        }
                    }
                }]
            });
    };
})();