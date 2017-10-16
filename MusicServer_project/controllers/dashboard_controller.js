'use strict';

/** 
    controller dashboard route
**/

exports.dashboard_page = function (req, res, next) {
    res.render('dashboards/dashboard');
};

exports.dashboard_artists = function (req, res, next) {
    res.render('dashboards/artists');
};