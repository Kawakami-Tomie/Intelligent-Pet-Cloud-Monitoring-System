#ifndef __UART_H__
#define __UART_H__

/* Includes ------------------------------------------------------------------*/
#include "main.h"

//esp8266
#define RXBUFFERSIZE1  256     				//�������ֽ���  ����1
char Uart1_RxBuffer[RXBUFFERSIZE1];   	//��������
uint8_t Uart1_RxData;									//�����жϻ���
uint8_t Uart1_Rx_Cnt = 0;							//���ջ������
//prinf_gps
#define RXBUFFERSIZE2  256     				//�������ֽ���	����3
char Uart2_RxBuffer[RXBUFFERSIZE2];   	//��������
uint8_t Uart2_RxData;									//�����жϻ���
uint8_t Uart2_Rx_Cnt = 0;							//���ջ������


#endif /* __UART_H__ */


