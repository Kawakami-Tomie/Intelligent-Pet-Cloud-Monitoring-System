#include "pca9548.h"

void selectPort(uint8_t port){
    if (port > 7) return;
	uint8_t data = 1 << port;

    extern I2C_HandleTypeDef hi2c1;
	HAL_I2C_Master_Transmit(&hi2c1, (I2CMultiplexerADDR << 1) | 0x00, &data, 1, 0xfff);
//  HAL_I2C_Mem_Write(&hi2c1, I2CMultiplexerADDR, 0, I2C_MEMADD_SIZE_8BIT, &data, 1, 0xfff);
}

//uint8_t write(uint8_t port,uint8_t addr, uint8_t reg,uint8_t* buf, uint8_t len){
//   selectPort(port);

//   Wire.beginTransmission(addr); // transmit to device #8
//   Wire.write(reg);              // sends one byte
//   uint8_t i = 0;
//   for(i = 0; i < len; i++){
//     Wire.write(*buf); 
//     buf++;
//   }
//   Wire.endTransmission();    // stop transmitting
//}


//uint8_t read(uint8_t port,uint8_t addr,uint8_t reg,uint8_t* data, uint8_t len){
//   selectPort(port);
//   int i = 0;
//   Wire.beginTransmission(addr); //Start transmission to device 
//   Wire.write(reg); //Sends register address to read rom
//   Wire.endTransmission(); //End transmission
//  
//   Wire.requestFrom(addr, len);//Send data n-bytes read
//    while (Wire.available())   // slave may send less than requested
//   {
//     data[i++] = Wire.read(); // print the character
//   }
// //  Serial.println(result[0]);
//   return i;
//}
