/// <reference path="../typings/requirejs/requirejs.d.ts" />

var loc = location.pathname.match(/\w+(?=(\/|\.))/)[0];
console.log(loc);

require.config({
        baseURL: "/assets/js",
        paths: {
            'angular': 'vendor/angular/angular',
            'chartjs': 'vendor/chartjs/Chart',
            'chart_js': 'vendor/Chart.js/Chart',
            'angular-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap',
            'module': 'js/modules',
            'controllers': 'modules/' + loc +'/controllers',
            'services': 'modules/' + loc +'/services',
            'directives': 'modules/' + loc +'/directives'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'chartjs': {
                deps: ['chart_js','angular']
            },
            'chart.js': {
            },
            'angular-bootstrap': {
                deps: ['angular']
            }
        }
    }
);

require(["modules/" + loc + "/config"]);
