<template>
	<view class="dev-area">
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">body </view>
	
				</view>
				<view class="dev-data"> {{body}} °</view>
				
				<view class="">
					<view class="dev-name">a_body </view>
					
				</view>
				<view class="dev-data"> {{body}} °/s</view>
			</view>
			
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">body_y </view>
				
				</view>
				<view class="dev-data"> {{body_y}} °</view>
				
				<view class="">
					<view class="dev-name">a_body_y </view>
					
				</view>
				<view class="dev-data"> {{body_y}} °/s</view>
			</view>
	
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">body_z </view>
				
				</view>
				<view class="dev-data"> {{body_z}} °</view>
				
				<view class="">
					<view class="dev-name">a_body_z </view>
					
				</view>
				<view class="dev-data"> {{body_z}} °/s</view>
			</view>
			
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">head </view>
	
				</view>
				<view class="dev-data"> {{head}} °</view>
				<view class="">
					<view class="dev-name">a_head </view>
					
				</view>
				<view class="dev-data"> {{head}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">leftback0 </view>
	
				</view>
				<view class="dev-data"> {{leftback0}} °</view>
				<view class="">
					<view class="dev-name">a_leftback0 </view>
					
				</view>
				<view class="dev-data"> {{leftback0}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">leftback0_z </view>
				
				</view>
				<view class="dev-data"> {{leftback0_z}} °</view>
				<view class="">
					<view class="dev-name">a_leftback0_z </view>
					
				</view>
				<view class="dev-data"> {{leftback0_z}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">leftback1 </view>
	
				</view>
				<view class="dev-data"> {{leftback1}} °</view>
				<view class="">
					<view class="dev-name">a_leftback1 </view>
					
				</view>
				<view class="dev-data"> {{leftback1}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">rightback0 </view>
	
				</view>
				<view class="dev-data"> {{rightback0}} °</view>
				<view class="">
					<view class="dev-name">a_rightback0 </view>
					
				</view>
				<view class="dev-data"> {{rightback0}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">rightback0_z </view>
				
				</view>
				<view class="dev-data"> {{rightback0_z}} °</view>
				<view class="">
					<view class="dev-name">a_rightback0_z </view>
					
				</view>
				<view class="dev-data"> {{rightback0_z}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">rightback1 </view>
	
				</view>
				<view class="dev-data"> {{rightback1}} °</view>
				<view class="">
					<view class="dev-name">a_rightback1 </view>
					
				</view>
				<view class="dev-data"> {{rightback1}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">leftforward0 </view>
	
				</view>
				<view class="dev-data"> {{leftforward0}} °</view>
				<view class="">
					<view class="dev-name">a_leftforward0 </view>
					
				</view>
				<view class="dev-data"> {{leftforward0}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">leftforward0_z </view>
				
				</view>
				<view class="dev-data"> {{leftforward0_z}} °</view>
				<view class="">
					<view class="dev-name">a_leftforward0_z </view>
					
				</view>
				<view class="dev-data"> {{leftforward0_z}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">leftforward1 </view>
	
				</view>
				<view class="dev-data"> {{leftforward1}} °</view>
				<view class="">
					<view class="dev-name">a_leftforward1 </view>
					
				</view>
				<view class="dev-data"> {{leftforward1}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">rightforward0 </view>
	
				</view>
				<view class="dev-data"> {{rightforward0}} °</view>
				<view class="">
					<view class="dev-name">a_rightforward0 </view>
					
				</view>
				<view class="dev-data"> {{rightforward0}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">rightforward0_z </view>
				
				</view>
				<view class="dev-data"> {{rightforward0_z}} °</view>
				<view class="">
					<view class="dev-name">a_rightforward0_z </view>
					
				</view>
				<view class="dev-data"> {{rightforward0_z}} °/s</view>
			</view>
			<view class="dev-cart">
				<view class="">
					<view class="dev-name">rightforward1 </view>
	
				</view>
				<view class="dev-data"> {{rightforward1}} °</view>
				<view class="">
					<view class="dev-name">a_rightforward1 </view>
					
				</view>
				<view class="dev-data"> {{rightforward1}} °/s</view>
			</view>
	
		</view>
</template>

<script>
	export default {
		data() {
			return{
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
			rightforward1: ''
			}
		},
		onShow() {
			//刷新数据
			this.updateData();
			setInterval(() => {
				this.updateData();
			}, 300)
		},
		methods: {
			updateData(){
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
		gap:5rpx;
	
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	
	.dev-cart {
		height: 130rpx;
		width: 600rpx;
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
	
	/* 	.map {
		height: 520rpx;
		width: 680rpx;
		margin-top: 10rpx;
	} */
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>