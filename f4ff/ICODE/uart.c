#include "uart.h"
#include "usart.h"

/*---------------------------串口接收中断--------------------------*/

extern void ESP8266_IRQHandler(void);
extern unsigned short esp8266_cnt;
extern unsigned char esp8266_buf[128];

void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart)
{
		if(huart == &huart1)//esp8266接收云平台数据
		{
			if(esp8266_cnt >= sizeof(esp8266_buf))
			{            
				esp8266_cnt = 0; //防止串口被刷爆
			}
			esp8266_buf[esp8266_cnt++] = Uart1_RxData;

			HAL_UART_Receive_IT(&huart1,(uint8_t *)&Uart1_RxData, 1); //&取地址
		}
}
