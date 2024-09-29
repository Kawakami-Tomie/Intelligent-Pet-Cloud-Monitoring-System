#ifndef __PAC9548_H
#define __PAC9548_H
#include "i2c.h"

#define u8 uint8_t
#define u16 uint16_t
#define u32 uint32_t
#define delay_ms HAL_Delay

// class DFRobot_I2CMultiplexer
// {
// public:
//   DFRobot_I2CMultiplexer(uint8_t addr);
//   uint8_t *scan(uint8_t port);
//   void selectPort(uint8_t port);
//   uint8_t read(uint8_t port,uint8_t addr,uint8_t reg,uint8_t* data, uint8_t len);
//   uint8_t write(uint8_t port,uint8_t addr, uint8_t reg,uint8_t* buf, uint8_t len);

// private:
//   uint8_t I2CMultiplexer;
// };

#define I2CMultiplexerADDR 0x70
// uint8_t *scan(uint8_t port);
void selectPort(uint8_t port);
//uint8_t read(uint8_t port,uint8_t addr,uint8_t reg,uint8_t* data, uint8_t len);
//uint8_t write(uint8_t port,uint8_t addr, uint8_t reg,uint8_t* buf, uint8_t len);

#endif 
