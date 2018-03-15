var fs = require('fs');
var fx = require('mkdir-recursive');
var cheerio = require('cheerio');
var camelcase = require('camelcase');
var capitalize = require('capitalize');
var components = {};
var types = {};
var info = require('../icons/info');
var _ = require('underscore');
var glob = require('glob');
var path = require('path');
var rootDir = path.join(__dirname, '..');
var attrs = ['xlink:href', 'clip-path', 'fill-opacity', 'fill'];
function snakeToCamel(s){
    return s.replace(/(\-[a-z])/g, function(m){return m[1].toUpperCase();});
}
var cleanAtrributes = function($el, $) {
    _.each(attrs, function(attr) {
        $el.removeAttr(attr);
    });
    if($el.children().length === 0) {
        return false;
    }

    $el.children().each(function(index, el) {
        cleanAtrributes($(el), $);
    });
};
glob(rootDir + '/icons/*/*.svg', function(err, icons) {
    icons.forEach(function(iconPath){
        var id = path.basename(iconPath, '.svg');
        var svg = fs.readFileSync(iconPath, 'utf-8');
        $ = cheerio.load(svg,{
            xmlMode: true
        });
        var $svg = $('svg');
        cleanAtrributes($svg, $);
        var iconSvg = $svg.html();
        var viewBox = $svg.attr('viewBox');
        var folder = iconPath.replace(path.join(rootDir, 'icons') + '/', '').replace( '/' + path.basename(iconPath), '');
        var type = capitalize(camelcase(folder));
        var name = type + capitalize(camelcase(id));
        // console.log({folder});
        var location = iconPath.replace(path.join(rootDir, 'icons'), 'es6').replace('.svg', '.js');
        // console.log({location});
        fx.mkdirSync(location.split('/').slice(0, -1).join('/'));
        components[name] = location;
        if (!types[folder]) {
            types[folder] = {};
        }
        types[folder][name] = location;
        // console.log({types});
        // console.log(iconSvg);

        iconSvg = snakeToCamel(iconSvg)
        // console.log(iconSvg);

        var component = `
import React from 'react'
import Icon from 'react-icon-base'

const ${name} = props => (
    <Icon viewBox="${viewBox}" {...props}>
        <g>${iconSvg}</g>
    </Icon>
)

export default ${name}
`
// console.log(svg);
// console.log(component);
// process.exit();

        fs.writeFileSync(path.join(rootDir, location), component, 'utf-8');
        // console.log(path.join('.', location));
    });
    _.each(types, function(components, folder) {
        var iconsModule = _.map(components, function(loc, name){
            loc = loc.replace('.js', '');
            loc = loc.replace('/'+folder, '');
            loc = "." + loc;
            return `export ${name} from '${loc}';`;
        }).join('\n') + '\n';
        var indexPath = path.join('./es6/', folder, 'index.js');
        // console.log({indexPath});

        fs.writeFileSync(indexPath, iconsModule, 'utf-8');
    });
});
