var app = angular.module('VRdotcom', ['ui.router']);


app.factory('navLinks',[function(){
	var o = {
		links: [
			{name:'Home', target: 'home', gicon: 'home'},
			{name:'Angular', target: 'angular', gicon: 'wrench'},
			{name:'Writing', target: 'writing', gicon: 'glass'},
			{name:'Running', target: 'running', gicon: 'fire'}
		]
	};
	return o;
}]);

app.factory('raceResults',[function(){
	var o = {
		results: [
			{name: 'Portland Marathon', date: new Date("2017-10-08"), distance: '26.2mi', time: '???', pace: '???'},
			{name: 'Shamrock Run', date: new Date("2016-03-13"), distance: '15k', time: '1:31:12', pace: '9:47'},
			// {name: 'Shamrock Run', date: new Date("2015-03-15"), distance: '8k', time: '1:01:17', pace: ''},
			{name: 'Portland Marathon 2013',date: new Date("2017-08-12"), distance: '26.2mi', time: '4:06:44', pace: '9:25'},
			{name: 'Hot Buttered Run',date: new Date("2012-11-25"), distance: '12k', time: '57:41', pace: '7:44.16'},
			{name: 'Portland Marathon 2012',date: new Date("2012-10-07"), distance: '26.2mi', time: '3:28:24', pace: '7:57.25'},
			{name: 'Portland Marathon 2011',date: new Date("2011-10-09"), distance: '26.2mi', time: '3:49:40', pace: '8:45.95'},
			{name: 'Lacamas Lake Half Marathon', date: new Date("2011-07-24"), distance: '13.1mi', time: '1:54:27', pace: '8:44.2'},
			{name: 'Shamrock Run', date: new Date("2011-03-13"), distance: '15k', time: '1:18:39', pace: '8:26.3'},
			{name: 'First Run', date: new Date("2011-01-01"), distance: '5k', time: '22:52', pace: '7:21.6'},
			{name: 'Hot Buttered Run', date: new Date("2010-11-28"), distance: '12k', time: '57:44', pace: '7:44.56'},
			{name: 'Portland Marathon 2010', date: new Date("2010-10-10"), distance: '26.2mi', time: '3:48:44', pace: '8:43.82'},
			{name: 'Bridge to Brews', date: new Date("2010-04-18"), distance: '10k', time: '45:34', pace: '7:19.99'},
			{name: 'Race for the Roses', date: new Date("2010-04-11"), distance: '13.1mi', time: '1:37:58', pace: '7:27.7'},
			{name: 'Shamrock Run', date: new Date("2010-03-14"), distance: '15k', time: '1:08:08', pace: '7:18.6'},
			{name: 'First Run', date: new Date("2010-01-01"), distance: '5k', time: '24:06', pace: '7:45.42'},
			{name: 'Race for the Roses', date: new Date("2008-04-06"), distance: '5k', time: '21:59', pace: '7:04.54'},
			{name: 'First Run', date: new Date("2008-01-01"), distance: '5k', time: '26:22', pace: '8:29.2'},
			{name: 'Portland Marathon 2007', date: new Date("2007-10-07"), distance: '26.2mi', time: '3:57:18', pace: '9:03.44'},
			{name: 'Shellfield Half (England)', date: new Date("2007-05-20"), distance: '13.1mi', time: '1:44:54', pace: '8:0.46'},
			{name: 'Tour des Fleurs (Dallas)', date: new Date("2006-09-23"), distance: '20k', time: '1:54:48', pace: '9:14.27'},
		]
	};
	return o;
}]);

app.factory('writings',[function(){
	var o = {
		texts: [
			{completion: '???', title: 'Drone War', link: '', description: 'Amidst the chaos of Lagos, a war is being fought from afar with 3d-printed drones piloted by teenagers with controllers.'},
			{completion: '???', title: 'Not Quite Sundown', link: '_writing/NQS_sample.pdf', description: 'In a world where nearly anything is possible, a savant refuses to accept the permanence of a personal loss.'},
			{completion: '2015', title: 'Scattered but Breathing', link: '', description: 'Humanity was nearly wiped out by aliens, but survivors wielding special powers are fighting back.'},
			{completion: '2014-July', title: 'Best-Case Scenario', link: '_writing/Best-Case_Scenario.pdf', description: 'Growing old and weak is the best thing that can happen to a person. 2014 Sledgehammer Writing Contest Submission.'},
			{completion: '2014-Jan', title: 'Tennis', link: '_writing/Tennis.pdf', description: 'A brief description of the game'},
			{completion: '2013-Aug', title: 'The Rise Over Runners', link: '_writing/Rise_Over_Runners_Pamphlet.pdf', description: 'A tri-fold pamphlet regarding slope, made for our math-heavy Hood-to-Coast team'},
			{completion: '2013-Aug', title: 'Crows at the Farm', link: '_writing/Crows_at_the_Farm.pdf', description: '2013 Sledgehammer Writing Contest entry.'},
			{completion: '2009-Aug', title: 'A Sit in the Woods', link: '_writing/A_Sit_in_the_Woods.pdf', description: '10 full days of silent meditation introduces a person to Vipassanna.'},
			{completion: '2009-Jul', title: 'PCT Blog', link: 'http://www.trailjournals.com/journal/entry/267880', description: 'Short entries from a few months hiking on the Pacific Crest Trail.'},
			{completion: '2009-Jan', title: 'Our Human Gods', link: '_writing/OHG_sample.pdf', description: 'Ancient DNA awakens a monster of old; only an engineered person can stop it.'}
		]};
		return o;
}])

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state(
				'home', {
					url: '/home',
					templateUrl: '/home.html',
					controller: 'MainCtrl'
				})
			.state(
				'angular', {
					url: '/angular',
					templateUrl: '/angular.html',
					controller: 'MainCtrl'
				})
			.state(
				'writing', {
					url: '/writing',
					templateUrl: '/writing.html',
					controller: 'WritingCtrl'
				})
			.state(
				'running', {
					url: '/running',
					templateUrl: '/running.html',
					controller: 'ResultCtrl'
				})
			$urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', [
	'$scope',
	'navLinks',
	function($scope, navLinks) {
		$scope.test = 'Hello world';
		$scope.navLinks = navLinks.links
	}
]);

app.controller('ResultCtrl', [
	'$scope',
	'raceResults',
	function($scope, raceResults) {
		$scope.raceResults = raceResults.results;
		$scope.today = new Date();
	}
]);

app.controller('WritingCtrl', [
	'$scope',
	'writings',
	function($scope, writings) {
		$scope.texts = writings.texts;
	}
]);