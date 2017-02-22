var app = angular.module('myapp', ["ui.router"])
//我的店铺轮播
    app.directive('wxSwiper', ['$timeout',
			function($timeout) {
				return {
					restrict: 'A',
					link: function(scope, ele, attrs) {
						$timeout(function() {
							var mySwiper = new Swiper(ele, {
								autoplay: 2000,
								direction: 'horizontal',
								loop: true,
								autoplayDisableOnInteraction: false,
								// 如果需要分页器
								pagination: '.swiper-pagination',
							})
						}, 300)
					}
				};
			}
		]);
		
	//跳转	
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			//首页
			.state('index', {
				views: {
					"body": {
						url: '/',
						templateUrl: "index.html",
						controller:"twos"
					}
				}

			})
			//优橙协助
			.state('orang', {
				views: {
					"body": {
						url: '/orang ',
						templateUrl: "orang.html"
					}
				}
			})
			//订单查询
			.state('order2', {
				views: {
					"body.content": {
						url: '/order2 ',
						templateUrl: "order2.html",
						controller: "siteCtrl"
					}
				}
			})
			//我的店铺
			.state('my', {
				views: {
					"body": {
						url: '/my ',
						templateUrl: "my.html",
						
					}
				}
			})
			//加号
			.state('five', {
				views: {
					"body.content": {
						url: '/five ',
						templateUrl: "five.html"
					}
				}
			})
			//登录
			.state('login', {
				views: {
					"body": {
						url: '/login ',
						templateUrl: "login.html"
					}
				}
			})
			//注册
			.state('zhuce', {
				views: {
					"body": {
						url: '/zhuce ',
						templateUrl: "zhuce.html"
					}
				}
			})
			//忘记密码 密码重置
			.state('password', {
				views: {
					"body": {
						url: '/password ',
						templateUrl: "password.html"
					}
				}
			})
			//消息箱
			.state('message', {
				views: {
					"body": {
						url: '/message ',
						templateUrl: "message.html",
//						controller: "twos"

					}
				}

			})
			//首页    财务管理
			.state('money', {
				views: {
					"body": {
						url: '/money ',
						templateUrl: "money.html"
					}
				}

			})
			//首页 评论管理
			.state('pinglun', {
				views: {
					"body": {
						url: '/pinglun ',
						templateUrl: "pinglun.html",
						controller: "pingluns"

					}
				}

			})

			//首页   财务管理  优橙钱包 充值
			.state('chongzhi', {
				views: {
					"body": {
						url: '/chongzhi ',
						templateUrl: "chongzhi.html"

					}
				}

			})

			//首页   财务管理  优橙钱包 提现
			.state('tixian', {
				views: {
					"body": {
						url: '/tixian ',
						templateUrl: "tixian.html"

					}
				}

			})

			
			//首页   财务管理  优橙钱包 现金流明细
			.state('yewu', {
				views: {
					"body": {
						url: '/yewu ',
						templateUrl: "yewu.html",
//						controller: "yewus"
						

					}
				}

			})

			//首页   财务管理  优橙钱包 更多查询
			.state('more', {
				views: {
					"body": {
						url: '/more ',
						templateUrl: "more.html",
						controller: "mores"

					}
				}

			})

		
			//首页  粉丝
			.state('fans', {
				views: {
					"body": {
						url: '/fans ',
						templateUrl: "fans.html",
						controller: "fans"

					}
				}

			})

			//我的店铺 个人信息 小黑仔
			.state('xiaoheizai', {
				views: {
					"body": {
						url: '/xiaoheizai ',
						templateUrl: "xiaoheizai.html"

					}
				}

			})
			
			
			//我的店铺  预览店铺
			.state('preview', {
				views: {
					"body": {
						url: '/preview ',
						templateUrl: "preview.html"

					}
				}

			})
			
			
           
           //我的店铺  我的作品库
			.state('zuopinku', {
				views: {
					"body": {
						url: '/zuopinku ',
						templateUrl: "zuopinku.html"

					}
				}

			})
		
			
			//我的店铺  个人信息 修改收货地址
			.state('ziliaoxiugai', {
				views: {
					"body": {
						url: '/ziliaoxiugai ',
						templateUrl: "ziliaoxiugai.html"

					}
				}

			})
			
			
			//我的店铺  店铺装修
			.state('dianpu', {
				views: {
					"body": {
						url: '/dianpuzhuangxiu ',
						templateUrl: "dianpuzhuangxiu.html"

					}
				}

			})
			
			
			//首页 更多
			.state('gengduo', {
				views: {
					"body": {
						url: '/gengduo',
						templateUrl: "gengduo.html"
					}
				}

			})
			
				//首页 更多 意见反馈
			.state('idea', {
				views: {
					"body": {
						url: '/idea',
						templateUrl: "idea.html"
					}
				}

			})
			//首页 更多 意见反馈提交成功
			.state('success', {
				views: {
					"body": {
						url: '/success',
						templateUrl: "success.html"
					}
				}

			})
	}])
	//渲染
//订单状态渲染
	app.controller('siteCtrl', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=ordertwo")
			.success(function(response) {
				$scope.ordertwo = response;

			});
	});
	//首页 评论管理渲染
	app.controller('pingluns', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=pinglun")
			.success(function(response) {
				$scope.pinglun = response;

			});
	});
	//首页 财务 钱包 更多查询 渲染
	app.controller('mores', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=more")
			.success(function(response) {
				$scope.mores = response;

			});
	});
	//首页 财务 钱包 渲染
	app.controller('money', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=more")
			.success(function(response) {
				$scope.money = response;

			});
	});
	//首页 现金流渲染
	app.controller('yewus', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=yewus")
			.success(function(response) {
				$scope.yewus = response;

			});
	});
//	首页 粉丝渲染
	app.controller('fans', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=fans")
			.success(function(response) {
				$scope.fans = response;

			});
	});

	//首页 消息箱渲染
	app.controller('ones', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=twos")
			.success(function(response) {
				$scope.messages = response;
			
			});
	});
//	首页 最下面消息渲染
	app.controller('twos', function($scope, $http) {
		$http.get("http://localhost:3000/users/queryAll?tables=ones")
			.success(function(response) {
				$scope.message = response;

			});
	});
	