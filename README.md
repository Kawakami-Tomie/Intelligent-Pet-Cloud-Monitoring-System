# Intelligent-Pet-Cloud-Monitoring-System
The joint data is read by the gyroscope of the lower machine and uploaded to the cloud. The front-end interactive page displays the pet dynamics combined with three.js.
# Lower computer program 1: 
stm32f1/f4 series chip as the main control, using i2c extender (analog switch) to read mpu6050 data. The GPS module is ATGM336H and uses the serial port for communication.
# Lower computer program 2:
stm32f4 series chip as the main control, using i2c extender (analog switch) to read mpu6050 quaternions.
# Communication protocol:
The mqtt protocol is used to realize the communication between the lower computer and onenet cloud platform.
# Front-end program:
Based on vue, development environment is Hbuilder X. Use blender to model and build with the three.js framework. Access Amap API. uniCloud hosts web pages for free.
