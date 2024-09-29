<template>
	<view class="content">
		<!-- three -->
		<view id="threeView"></view>
		<!-- #ifdef APP-PLUS || H5 -->
		<view id="three" class="three" @click="three.onClick"></view>
		<!-- #endif -->
		<!-- #ifndef APP-PLUS || H5 -->
		<view>非 APP、H5 环境不支持</view>
		<!-- #endif -->

		<view class="warpi">
			<view class="devi-area">
				<view class="devi-cart">
					<view class="">
						<image class="devi-logo" src="../../static/moon.png" mode=""></image>
						<image class="devi-icon" src="../../static/shuimian.png" mode=""> </image>
					</view>
				    <view class="devi-data"> {{952}}</view>
					<view class="">
						<view class="devi-name">min</view>
					</view>
				</view>

				<view class="devi-cart">
					<view class="devi-data"> {{19545}}</view>
					<view class="">
						<view class="devi-name">step </view>
					</view>
					<view class="">
						<image class="devi-icon" src="../../static/bushui.png" mode=""> </image>
						<image class="devi-logo" src="../../static/zhuazhua.png" mode=""></image>
					</view>


				</view>

				<view class="devi-cart">
					<view class="">
						<image class="devi-logo" src="../../static/bone.png" mode=""></image>
						<image class="devi-icon" src="../../static/huwai.png" mode=""> </image>
					</view>

					<view class="devi-data"> {{84}}</view>
					<view class="">
						<view class="devi-name">min</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>



<script module="three" lang="renderjs">
	const THREE = require('static/three/build/three.min.js')
	import {
		OrbitControls
	} from 'static/three/examples/jsm/controls/OrbitControls.js'
	import {
		GLTFLoader
	} from 'static/three/examples/jsm/loaders/GLTFLoader.js'
	import {
		RGBELoader
	} from 'static/three/examples/jsm/loaders/RGBELoader.js';
	const ThreeBSP = require('static/three/build/ThreeBSP.js')(THREE)
	var renderer;
	var scene, GLTFloader;
	var camera;
	var controls;
	// 在initThree方法中保存骨骼节点
	let bones = [];
	//定义骨骼节点
	let root_,head_,body_,bodyy,bodyz,leftback0_,leftback0z,leftback1_,rightback0_,rightback0z,rightback1_;
	let leftforward0_,leftforward0z,leftforward1_,rightforward0_,rightforward0z,rightforward1_;
	let pmremGenerator, envMap;
	let renderEnabled = false;
	let timeOut = null;
	export default {
		data() {
			return {
				body: '',
				body_y: '',
				body_z: '',
				head: '',
				leftback0: '',
				leftback0_z: '',
				leftback1: '',
				rightback0: '',
				rightback0_z: '',
				rightback1: '',
				leftforward0: '',
				leftforward0_z: '',
				leftforward1: '',
				rightforward0: '',
				rightforward0_z: '',
				rightforward1: '',
				
				
				startVal3: 2000,
				sleeptime:1542,
				decimals: 2
				
			}
		},
		mounted() {
			this.initThree();	
			this.animate();			
		},
		methods: {
			updateData() {
					this.body=getApp().globalData.body
					this.body_y=getApp().globalData.body_y
					this.body_z=getApp().globalData.body_z
					this.head= getApp().globalData.head
					this.leftback0= getApp().globalData.leftback0
					this.leftback0_z= getApp().globalData.leftback0_z
					this.leftback1= getApp().globalData.leftback1
					this.rightback0=getApp().globalData.rightback0
					this.rightback0_z=getApp().globalData.rightback0_z
					this.rightback1= getApp().globalData.rightback1
					this.leftforward0= getApp().globalData.leftforward0
					this.leftforward0_z= getApp().globalData.leftforward0_z
					this.leftforward1= getApp().globalData.leftforward1
					this.rightforward0= getApp().globalData.rightforward0
					this.rightforward0_z= getApp().globalData.rightforward0_z
					this.rightforward1= getApp().globalData.rightforward1
					this.timeRender()
			},
			initThree() {
				let that = this
				// 如果返回的不是未定义，说明threejs成功引入
				console.log('打印场景API', THREE.Scene);
				//创建场景
				scene = new THREE.Scene();

				//设置相机
				var width = window.innerWidth; // 窗口宽度
				var height = window.innerHeight; // 高度
				camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 10000);
				camera.position.set(0, 70, 250);
				scene.add(camera);

				//渲染场景
				const element = document.getElementById('threeView')
				renderer = new THREE.WebGLRenderer({
					antialias: true,
					alpha: true,
					shadowMap: {
						enabled: true
					}
				});
				renderer.physicallyCorrectLights = true;
				renderer.outputEncoding = THREE.sRGBEncoding;
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize(window.innerWidth, window.innerHeight);
				pmremGenerator = new THREE.PMREMGenerator(renderer);
				pmremGenerator.compileEquirectangularShader();
				element.appendChild(renderer.domElement); // body元素中插入canvas对象

				//初始化光源
				// 半球光
				const hemiLight = new THREE.HemisphereLight();
				hemiLight.intensity = 1
				scene.add(hemiLight);
				// 环境光
				const ambientLight = new THREE.AmbientLight(0xffffff, 1);
				scene.add(ambientLight);
				//平行光
				const light = new THREE.DirectionalLight(0xffffff, 0.3);
				light.position.set(-10, -1, 100);
				light.castShadow = true; // 允许光源投射阴影  
				light.shadow.camera.near = 0.5; // 阴影相机的近裁剪面  
				light.shadow.camera.far = 500; // 阴影相机的远裁剪面  
				light.shadow.camera.left = -10;
				light.shadow.camera.right = 10;
				light.shadow.camera.top = 10;
				light.shadow.camera.bottom = -10;
				scene.add(light);

				//为模型设置接收和投射阴影
				// const geometry = new THREE.BoxGeometry(1, 1, 1);  
				// const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });  
				// const cube = new THREE.Mesh(geometry, material);  
				// cube.castShadow = true; // 允许模型投射阴影  
				// cube.receiveShadow = true; // 允许模型接收阴影  
				// scene.add(cube);

				//场景控制
				controls = new OrbitControls(camera, renderer.domElement);
				controls.enablePan = false; //滑动
				controls.enableDamping = true;
				controls.dampingFactor = 0.05;
				controls.screenSpacePanning = false;
				controls.autoRotate = false; //关闭自动旋转
				// controls.autoRotateSpeed  = 10;//旋转的速度
				// controls.minDistance = 60;
				// controls.maxDistance = 100;
				controls.maxPolarAngle = Math.PI / 2; 
				// controls.minPolarAngle = Math.PI /2;//相同的角度禁止垂直旋转
				controls.addEventListener('change', function() {
					that.timeRender();
				});

				///环境纹理
				this.getfile("./static/images/venice_sunset_1k.hdr").then(res => {
					new RGBELoader()
						.setDataType(THREE.UnsignedByteType)
						.load(res, (texture) => {

							envMap = pmremGenerator.fromEquirectangular(texture).texture;
							pmremGenerator.dispose();
							scene.environment = envMap;
							// scene.background = envMap;
						}, );
				})

				//导入模型
				that.animate();
				GLTFloader = new GLTFLoader();
				this.getfile("./static/newdog.glb").then(res => {
					GLTFloader.load(res, function(gltf) {
						//添加模型并打印
						const model1 = gltf.scene;
						model1.position.set(0, 0, 0);
						model1.scale.set(5, 5, 5);
						model1.name = 'model1';
						scene.add(model1);
						//显示骨骼
						const skeletonHelper = new THREE.SkeletonHelper(model1);
						//scene.add(skeletonHelper);
						//寻找骨骼节点
						 root_ = gltf.scene.getObjectByName('root');
						if (root_) {
							console.log('Found root:', root_);
						} else {
							console.log('No object named "root" found.');
						}
						// 查找名为'head'的对象  世界原始坐标
						 head_ = gltf.scene.getObjectByName('head');
						if (head_) {
							console.log('Found head:', head_);
							bones.push(head_);							
						} else {
							console.log('No object named "head" found.');
						}
						// 查找名为'body'的对象  世界原始坐标
						 body_ = gltf.scene.getObjectByName('body');
						if (body_) {
							console.log('Found body:', body_);
							bones.push(body_);							
						} else {
							console.log('No object named "body" found.');
						}
						// 查找名为'leftback0'的对象  世界原始坐标
						leftback0_ = gltf.scene.getObjectByName('leftback0');
						if (leftback0_) {
							console.log('Found leftback0:', leftback0_);
							bones.push(leftback0_);							
						} else {
							console.log('No object named "leftback0" found.');
						}
						// 查找名为'leftback1'的对象  世界原始坐标
					    leftback1_ = gltf.scene.getObjectByName('leftback1');
						if (leftback1_) {
							console.log('Found leftback1:', leftback1_);
							bones.push(leftback1_);							
						} else {
							console.log('No object named "leftback1" found.');
						}
						// 查找名为'rightback0'的对象  世界原始坐标
						 rightback0_ = gltf.scene.getObjectByName('rightback0');
						if (rightback0_) {
							console.log('Found rightback0:', rightback0_);
							bones.push(rightback0_);							
						} else {
							console.log('No object named "rightback0" found.');
						}
						// 查找名为'rightback1'的对象  世界原始坐标
						 rightback1_ = gltf.scene.getObjectByName('rightback1');
						if (rightback1_) {
							console.log('Found rightback1:', rightback1_);
							bones.push(rightback1_);							
						} else {
							console.log('No object named "rightback1" found.');
						}
						// 查找名为'leftforward0'的对象  世界原始坐标
						 leftforward0_ = gltf.scene.getObjectByName('leftforward0');
						if (leftforward0_) {
							console.log('Found leftforward0:', leftforward0_);
							bones.push(leftforward0_);							
						} else {
							console.log('No object named "leftforward0" found.');
						}
						// 查找名为'leftforward1'的对象  世界原始坐标
						 leftforward1_ = gltf.scene.getObjectByName('leftforward1');
						if (leftforward1_) {
							console.log('Found leftforward1:', leftforward1_);
							bones.push(leftforward1_);							
						} else {
							console.log('No object named "leftforward1" found.');
						}
						// 查找名为'rightforward0'的对象  世界原始坐标
						 rightforward0_ = gltf.scene.getObjectByName('rightforward0');
						if (rightforward0_) {
							console.log('Found rightforward0:', rightforward0_);
							bones.push(rightforward0_);							
						} else {
							console.log('No object named "rightforward0" found.');
						}
						// 查找名为'rightforward1'的对象  世界原始坐标
						 rightforward1_ = gltf.scene.getObjectByName('rightforward1');
						if (rightforward1_) {
							console.log('Found rightforward1:', rightforward1_);
							bones.push(rightforward1_);							
						}
						//错误查找调试
						const errorbone_ = gltf.scene.getObjectByName('errorbone');
						if (errorbone_) {
							console.log('Found errorbone:', errorbone_);
						} else {
							console.log('No object named "errorbone" found.');
						}
						//开启渲染
						that.timeRender();
					}, undefined, function(e) {
						console.error(e);
					});
				})
				renderer.render(scene, camera);
				console.log(1);
			},


			//读取文件函数
			getfile(e) {
				// #ifdef APP-PLUS
				let url = plus.io.convertLocalFileSystemURL(e)
				return new Promise((resolve, reject) => {
					plus.io.resolveLocalFileSystemURL(url, entry => {
						var reader = null;
						entry.file(file => {
							reader = new plus.io.FileReader();
							reader.onloadend = (read) => {
								resolve(read.target.result)
							};
							reader.readAsDataURL(file);
						}, function(error) {
							alert(error.message);
						});
					}, err => {
						resolve(e)
					})
				})
				// #endif
				// #ifndef APP-PLUS
				return new Promise((resolve, reject) => {
					resolve(e)
				})
				// #endif
			},
			animate() {
				if (renderEnabled) {
					//数据更新 循环渲染
					this.updateData();
					 for (let bone of bones) {
					   	if(bone==head_){head_.rotation.x = (Math.PI / 180) * (this.head);}
						if(bone==body_){
							body_.rotation.x = (Math.PI / 180) *(180-this.body);
							body_.rotation.y = (Math.PI / 180) *(this.body_y);
							body_.rotation.z = (Math.PI / 180) *(this.body_z)
							}
					 	if(bone==leftback0_){
							leftback0_.rotation.x =(Math.PI / 180) * (this.leftback0)+(Math.PI / 180) *(this.body)-Math.PI / 5;
							leftback0_.rotation.z =(Math.PI / 180) * (this.leftback0_z)
							}
						if(bone==leftback1_)leftback1_.rotation.x = (Math.PI / 180) * this.leftback1;
						if(bone==rightback0_){
							rightback0_.rotation.x = (Math.PI / 180) * (this.rightback0)+(Math.PI / 180) *(this.body)-Math.PI / 5;
							rightback0_.rotation.z =(Math.PI / 180) * (this.rightback0_z)
							}
						if(bone==rightback1_)rightback1_.rotation.x = (Math.PI / 180) * this.rightback1;
						if(bone==leftforward0_){
							leftforward0_.rotation.x = (Math.PI / 180)*(this.body) + (Math.PI / 180)*( this.leftforward0);
							leftforward0_.rotation.z =(Math.PI / 180) * (this.leftforward0_z)
							}
						if(bone==leftforward1_)leftforward1_.rotation.x = (Math.PI / 180) * this.leftforward1;
						if(bone==rightforward0_){
							rightforward0_.rotation.x =  (Math.PI / 180)*(this.body) + (Math.PI / 180)*( this.rightforward0);
							rightforward0_.rotation.z =  (Math.PI / 180)*(this.rightforward0_z)
							}
						if(bone==rightforward1_)rightforward1_.rotation.x = (Math.PI / 180) * this.rightforward1;
						console.log("animate ok!");
					 }
					controls.update();
					this.render();
				}
				requestAnimationFrame(() => {
					this.animate()
				});
			},
			// 动画
			render() {
				renderer.render(scene, camera); //执行渲染操作
			},
			//渲染判断
			timeRender() {

				renderEnabled = true;

				if (timeOut) {
					clearTimeout(timeOut);
				}

			},
		}
	}
</script>

<style>
	
	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	
	.content {
		margin: 0;
		overflow: hidden;
		align-items: center;
	}

	.three {
		width: 100%;
		align-items: center;
	}

	#threeView {
		width: 100%;
		height: 100vh;
	}

	.devi-area {
		display: flex;
		flex-wrap: ;
		margin-top: 80rpx;
		gap:10rpx;

		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.devi-cart {
		height: 140rpx;
		width: 600rpx;
		/* border-radius: 30rpx; */
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 15rpx #ccc;
	}

	.devi-name {
		font-size: 25rpx;
		text-align: center;
		color: #8f8f94;
	}

	.devi-logo {
		width: 120rpx;
		height: 120rpx;
		margin-top: 10rpx;
	}

	.devi-icon {
		width: 80rpx;
		height: 120rpx;
		margin-top: 10rpx;
	}

	.devi-data {
		font-size: 50rpx;
		text-align: center;
		color: black;
		text-decoration: underline;
		/* 添加下划线 */
	}
</style>