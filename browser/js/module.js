'use strict';

var juke = angular.module('juke', ['ui.router'])

.config($stateProvider => {
	$stateProvider

		.state('albums', {
			url: '/albums',
			templateUrl: '/views/albums.html',
			controller: 'AlbumsCtrl',
			resolve: {
				albums: AlbumFactory => AlbumFactory.fetchAll()
			}
		})

		.state('artists', {
			url: '/artists',
			templateUrl: '/views/artists.html',
			controller: 'ArtistsCtrl',
			resolve: {
				artists: ArtistFactory => ArtistFactory.fetchAll()
			}
		})

		.state('singleAlbum', {
			url: '/album/:id',
			templateUrl: '/views/album.html',
			controller: 'AlbumCtrl',
			resolve: {
				album: (AlbumFactory, $stateParams) => AlbumFactory.fetchById($stateParams.id)
			}
		})

		.state('singleArtist', {
			url: '/artist/:id',
			templateUrl: '/views/artist.html',
			controller: 'ArtistCtrl',
			resolve: {
				artist: (ArtistFactory, $stateParams) => ArtistFactory.fetchById($stateParams.id)
			}
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
