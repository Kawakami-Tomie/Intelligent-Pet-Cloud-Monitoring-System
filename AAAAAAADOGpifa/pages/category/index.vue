<template>
	<view class="wrap">
		<view class="dev-area">
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">latitude </view>
					<image class="dev-logo" src="../../static/weidu.png" mode=""></image>
				</view>
				<view class="dev-data"> {{latitude}} °N</view>
			</view>

			<view class="dev-cart">
				<view class="">
					<view class="dev-name">longitude </view>
					<image class="dev-logo" src="../../static/jingdu.png" mode=""></image>
				</view>
				<view class="dev-data"> {{longitude}} °E</view>
			</view>

		</view>

		<view>
			<map :scale="scale" style="width: 680rpx; height: 980rpx;" :latitude="latitude" :longitude="longitude"
				:markers="covers"></map>
		</view>
		<view class="dev-area1">
			<button class="my-button">轨迹清空</button>  

		
		</view>

	</view>


</template>

<script>
	const {
		createCommonToken
	} = require('@/key.js')
	export default {
		data() {
			return {
				scale: 20, // 地图缩放级别  
				id : 0,
				latitude: '30.651148',
				longitude: '103.805401',
				// latitude: '30.764389',
				// longitude: '103.988340',
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
				token: '',
				covers: []
			}
		},
		onLoad() {
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
			
			const params = {
				author_key: 'AywL1Tlaymec4O2XauIyAvkvvsOc0TRGE5Yqh1npHVfDtyJBdKXH7OxQ92fzHfD7BRZyiKCHROqGSY+wbLJIqg==',
				version: '2022-05-01',
				user_id: '371490',
			}
			this.token = createCommonToken(params);
		},
		onShow() {
			this.fetchDevData();
			setInterval(() => {
				this.fetchDevData();
			}, 30)
			this.covers=[{	
					id : 0,
					width:50,
					height:50,
					 latitude: this.latitude,
					 longitude: this.longitude,					
					iconPath: '/static/location.png'				
			}]
		},
		methods: {
			fetchDevData() {
				uni.request({
					url: 'https://iot-api.heclouds.com/thingmodel/query-device-property',
					method: 'GET',
					data: {
						product_id: '4f892NM8Ku',
						device_name: 'gps'
					},
					header: {
						'authorization': this.token //自定义请求头信息
					},
					success: (res) => {
						console.log(res.data);
						console.log(res.data.data[0].value); //打印第一项 身体 
						getApp().globalData.body = res.data.data[0].value;
						console.log(res.data.data[1].value); //打印第二项 身体y
						getApp().globalData.body_y = res.data.data[1].value;
						console.log(res.data.data[2].value); //打印第三项 身体z
						getApp().globalData.body_z = res.data.data[2].value;
						console.log(res.data.data[3].value); //打印第二项 头 
						getApp().globalData.head = res.data.data[3].value;
						console.log(res.data.data[4].value); //打印第三项 纬度
						this.latitude = res.data.data[4].value;
						console.log(res.data.data[5].value); //打印第四项 左后腿0
						getApp().globalData.leftback0 = res.data.data[5].value;
						console.log(res.data.data[6].value); //打印第四项 左后腿0_z
						getApp().globalData.leftback0_z = res.data.data[6].value;
						console.log(res.data.data[7].value); //打印第五项 左后腿1
						getApp().globalData.leftback1 = res.data.data[7].value;
						console.log(res.data.data[8].value); //打印第六项 左前腿0
						getApp().globalData.leftforward0 = res.data.data[8].value;
						console.log(res.data.data[9].value); //打印第六项 左前腿0_z
						getApp().globalData.leftforward0_z = res.data.data[9].value;
						console.log(res.data.data[10].value); //打印第七项 左前腿1
						getApp().globalData.leftforward1 = res.data.data[10].value;
						console.log(res.data.data[11].value); //打印第八项 经度
						this.longitude = res.data.data[11].value;
						console.log(res.data.data[12].value); //打印第九项 右后腿0
						getApp().globalData.rightback0 = res.data.data[12].value;
						console.log(res.data.data[13].value); //打印第九项 右后腿0_z
						getApp().globalData.rightback0_z = res.data.data[13].value;
						console.log(res.data.data[14].value); //打印第十项 右后腿1
						getApp().globalData.rightback1 = res.data.data[14].value;
						console.log(res.data.data[15].value); //打印第十一项 右前腿0
						getApp().globalData.rightforward0 = res.data.data[15].value;
						console.log(res.data.data[16].value); //打印第十一项 右前腿0_z
						getApp().globalData.rightforward0_z = res.data.data[16].value;
						console.log(res.data.data[17].value); //打印第十二项 右前腿1
						getApp().globalData.rightforward1 = res.data.data[17].value;
					}
				});

			}
		}
	}
</script>

<style>
	.wrap {
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wrap>* {

		margin-bottom: 50rpx;
		/* 设置每个元素之间的间距 */

	}

	.dev-area {
		display: flex;
		flex-wrap: ;
		margin-top: 50rpx;


		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
.dev-area1 {  
    display: flex;  
    flex-wrap: wrap;
    margin-top: 50rpx;  
    flex-direction: row;  
    align-items: center;  
    justify-content: space-between;  
    gap: 30px; /* 设置元素之间的间距 */  
}

	.dev-cart {
		height: 130rpx;
		width: 340rpx;
		/* border-radius: 30rpx; */
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 15rpx #ccc;
	}
	.dev-cart1 {
		height: 60rpx;
		width: 240rpx;
		/* border-radius: 30rpx; */
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 15rpx #ccc;
	}

	.dev-name {
		font-size: 25rpx;
		text-align: center;
		color: #8f8f94;
	}

	.dev-logo {
		width: 60rpx;
		height: 60rpx;
		margin-top: 10rpx;
	}

	.dev-data {
		font-size: 25rpx;
		text-align: center;
		color: black;
	}
	.dev-bottom {
		font-size: 25rpx;
		text-align: center;
		color: black;
	}
	.my-button {  
	  background-color: #88af63; /* 绿色 */  
	  border: none;  
	  color: white;  
	  padding: 5px 42px;  
	  text-align: center;  
	  text-decoration: none;  
	  display: inline-block;  
	  font-size: 26px;  
	  margin: 6px 4px;  
	  cursor: pointer;  
	}  
	  
	.my-button:hover {  
	  background-color: #61af9e;  
	} 
/* 		.map {
		height: 520rpx;
		width: 680rpx;
		margin-top: 10rpx;
	} */

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>



<style lang="less">
	.map {
		height: 230vh;
		width: 150vw;
	}
</style> -->