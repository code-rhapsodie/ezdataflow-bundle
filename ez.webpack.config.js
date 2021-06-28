const path = require('path');
const bundles = require('./var/encore/ez.config.js');

module.exports = (Encore) => {
    Encore.setOutputPath('public/assets/ezplatform/build')
        .setPublicPath('/assets/ezplatform/build')
        .addExternals({
            react: 'React',
            'react-dom': 'ReactDOM',
            jquery: 'jQuery',
            moment: 'moment',
            'popper.js': 'Popper',
            alloyeditor: 'AlloyEditor',
            'prop-types': 'PropTypes',
        })
        .enableSassLoader()
        .enableReactPreset()
        .enableSingleRuntimeChunk();

    const eZConfig = Encore.getWebpackConfig();
    eZConfig.name = 'ezplatform';
    return eZConfig;

};
