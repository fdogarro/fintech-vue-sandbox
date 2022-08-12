let appSettings;
let openfinSettings;
const disposeCallbacks = [];

//Get the manifest asap since it is async
(function () {
    //Call for manifest
    fin.desktop.Application.getCurrent().getManifest(function (manifest) {
        appSettings = manifest.openfin_poc_custom_settings;
        openfinSettings = manifest;
        console.log("appManifest: have app settings: ", appSettings);
    });
})();

function onDispose(callback) {
    disposeCallbacks.push(callback);
}

function dispose() {
    disposeCallbacks.forEach(function (callback) {
        try {
            callback();
        } catch (error) {
            console.error("appManifest shutdown callback error:", error);
        }
    }, this);
}

export {
    openfinSettings,
    appSettings,
    onDispose,
    dispose
};

export default {
    openfinSettings,
    appSettings,
    onDispose,
    dispose
};
