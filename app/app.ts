///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Logger} from './services/logger.service';
import {GoogleApi} from './services/googleapi.service';
import {Component} from 'angular2/core';

//import {VideoPlayer} from './landing.video-player';
//import {AppMasthead} from './landing.masthead';
//import {ProductMenu} from './landing.prodMenu';
//import {AppFooter} from './coffee.footer';
//import {WhatIntro} from './what.intro';
//import {IconRow} from './what.icon.row';
//import {RoastRow} from './what.roast.row';
//import {BrewMethod} from './what.brew.method';
//import {VideoPlayer} from './landing.videoPlayer';
//import {GrindRow} from './what.grind';
//import {VideoPlayerSide} from './landing.videoPlayer-side';


@Component({
	selector: 'main-app',
    template: '<!-- Put your HTML HERE -->',
	directives: []
})
class AppComponent {
    
 }

bootstrap(AppComponent, [HTTP_PROVIDERS, Logger, GoogleApi])