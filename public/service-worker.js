/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

importScripts(
  "precache-manifest.8b7aba919c3702bbfdb2bda5a8cf3a81.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https.*pet.find.*/, workbox.strategies.networkFirst({ cacheName: "postings-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":25}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/http.*keys.*/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/https.*breed.list.*/, workbox.strategies.staleWhileRevalidate({ cacheName: "postings-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":500}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/https.*andruxnet-world-cities.*/, workbox.strategies.cacheFirst({ cacheName: "postings-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":100}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
