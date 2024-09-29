/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
  ******************************************************************************
  * @attention
  *
  * Copyright (c) 2023 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  ******************************************************************************
  */
/* USER CODE END Header */
/* Includes ------------------------------------------------------------------*/
#include "main.h"
#include "dma.h"
#include "i2c.h"
#include "usart.h"
#include "gpio.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
#include "esp8266.h"
#include "onenet.h"
#include "mpu6050.h"
#include "inv_mpu.h"
#include "inv_mpu_dmp_motion_driver.h"
#include "pca9548.h"
#include <string.h>
#include "OLED.h"
/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */

/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */
/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/

/* USER CODE BEGIN PV */
float pitch, roll, yaw;
uint8_t txBuf[50];
uint8_t dataget=0;
//10个关节
int32_t head=-30,body=40,body_y=0,body_z=0,leftback0=-30,leftback0_z=0,leftback1=60,leftforward0=30,leftforward0_z=0,leftforward1=-30;
int32_t rightback0=-30,rightback0_z=0,rightback1=60,rightforward0=30,rightforward0_z=0,rightforward1=-30;
/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
/* USER CODE BEGIN PFP */
extern uint8_t Uart1_RxData;	//接收中断缓冲
/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */
void sentData_Uart(uint8_t port);
/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void)
{

  /* USER CODE BEGIN 1 */
	
	uint8_t i;
	uint8_t j;
	
  /* USER CODE END 1 */

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */

  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */

  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  MX_DMA_Init();
  MX_I2C1_Init();
  MX_USART1_UART_Init();
  MX_USART2_UART_Init();
  /* USER CODE BEGIN 2 */
	HAL_UART_Receive_IT(&huart1,(uint8_t *)&Uart1_RxData, 1);//开启串口中断
	HAL_Delay(100);
	OLED_Init();
	HAL_Delay(100);
  OLED_Clear();
		/* esp8266连接wifi+连接Onenet */
	HAL_Delay(500);
	ESP8266_Init();					//初始化ESP8266，连接wifi
	HAL_Delay(1000);
		

	while(OneNet_DevLink())			//连接OneNET
	HAL_Delay(2000);
	
	for(i = 1; i < 6; i++)
	{
		selectPort(i);
		MPU_Init(); //初始化MPU6050
		OLED_Clear();OLED_ShowString(1,1,"MPU");
		OLED_ShowNum(1,4,i,1);
		
		while(mpu_dmp_init()) //DMP初始化
		{		
			printf("MPU%d DMP failed.Err code：%d\r\n", i, mpu_dmp_init());
			OLED_ShowString(1,6,"Err");		
		}	
		printf("MPU%d int ok\r\n",i);
		OLED_ShowString(1,6,"init ok...");
	}
	HAL_Delay(1000);
	printf("System int ok\r\n");
	HAL_Delay(1000);
	

  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
		//踩坑：循环几次在上报数据。不然会拉低读取速率FIFO溢出
		
		for(j = 0; j < 3; j++)
		{
//	  sentData_Uart(0);
	  sentData_Uart(1);
		sentData_Uart(2);
	  sentData_Uart(3);
	  sentData_Uart(4);
		sentData_Uart(5);
//		sentData_Uart(6);
//		sentData_Uart(7);
		}
		dataget=1;
		HAL_Delay(100);
		if(dataget==1){
		//之前放定时器里也卡死，后面没有试过了
		OneNet_SendData();	//发送数据
		ESP8266_Clear();	//清空数据缓存区
		dataget=0;
		HAL_Delay(100);	//0.1s发送一次
		}
  }
  /* USER CODE END 3 */
}

/**
  * @brief System Clock Configuration
  * @retval None
  */
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
  RCC_OscInitStruct.HSEState = RCC_HSE_ON;
  RCC_OscInitStruct.HSEPredivValue = RCC_HSE_PREDIV_DIV1;
  RCC_OscInitStruct.HSIState = RCC_HSI_ON;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
  RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
  RCC_OscInitStruct.PLL.PLLMUL = RCC_PLL_MUL9;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }

  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV2;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_2) != HAL_OK)
  {
    Error_Handler();
  }
}

/* USER CODE BEGIN 4 */
void sentData_Uart(uint8_t port)
{
	selectPort(port);
	if(mpu_dmp_get_data(&pitch, &roll, &yaw)==0){
		while(huart2.gState == HAL_UART_STATE_BUSY_TX);
		memset(txBuf, 0x00, sizeof(txBuf));
		snprintf((char *)txBuf,sizeof(txBuf),"P%d:%.3f,%.3f,%.3f,\r\n",port,pitch,roll,yaw);
		HAL_UART_Transmit_DMA(&huart2,txBuf,sizeof(txBuf));
		switch(port)
		{

			case 1:
				leftback0=(int)roll;leftback0_z=(int)pitch;
				break;
			case 2:
				rightback0=(int)roll;rightback0_z=(int)pitch;
				break;
			case 3:
				leftforward0=(int)roll;leftforward0_z=(int)pitch;
				break;	
			case 4:
				rightforward0=(int)roll;rightforward0_z=(int)pitch;
				break;
			case 5:
				body=(int)roll;body_y=(int)yaw;body_z=(int)pitch;
				break;
      default:
        break;			
		}
	}
}
/* USER CODE END 4 */

/**
  * @brief  This function is executed in case of error occurrence.
  * @retval None
  */
void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}

#ifdef  USE_FULL_ASSERT
/**
  * @brief  Reports the name of the source file and the source line number
  *         where the assert_param error has occurred.
  * @param  file: pointer to the source file name
  * @param  line: assert_param error line source number
  * @retval None
  */
void assert_failed(uint8_t *file, uint32_t line)
{
  /* USER CODE BEGIN 6 */
  /* User can add his own implementation to report the file name and line number,
     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */
  /* USER CODE END 6 */
}
#endif /* USE_FULL_ASSERT */
