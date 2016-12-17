'use strict';

var juke = angular.module('juke', ['ui.router'])

.config($stateProvider => {
	$stateProvider

		.state('albums', {
			url: '/albums',
			templateUrl: '/views/albums.html',
			controller: 'AlbumsCtrl'
		})

		.state('artists', {
			url: '/artists',
			templateUrl: '/views/artists.html',
			controller: 'ArtistsCtrl'
		})

		.state('singleAlbum', {
			url: '/album/:id',
			templateUrl: '/views/album.html',
			controller: 'AlbumCtrl'
		})

		.state('singleArtist', {
			url: '/artist/:id',
			templateUrl: '/views/artist.html',
			controller: 'ArtistCtrl'
		})

		.state('singleArtist.albums', {
			url: '/albums',
			templateUrl: '/views/artist-albums.html'
		})

		.state('singleArtist.songs', {
			url: '/songs',
			templateUrl: '/views/artist-songs.html'
		})

});
