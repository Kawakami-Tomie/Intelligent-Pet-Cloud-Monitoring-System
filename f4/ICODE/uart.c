#include "uart.h"
#include "usart.h"

/*---------------------------���ڽ����ж�--------------------------*/

extern void ESP8266_IRQHandler(void);
extern unsigned short esp8266_cnt;
extern unsigned char esp8266_buf[128];

void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart)
{
		if(huart == &huart1)//esp8266������ƽ̨����
		{
			if(esp8266_cnt >= sizeof(esp8266_buf))
			{            
				esp8266_cnt = 0; //��ֹ���ڱ�ˢ��
			}
			esp8266_buf[esp8266_cnt++] = Uart1_RxData;

			HAL_UART_Receive_IT(&huart1,(uint8_t *)&Uart1_RxData, 1); //&ȡ��ַ
		}
}
