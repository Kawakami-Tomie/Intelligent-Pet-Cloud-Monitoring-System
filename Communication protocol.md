## 使用Mqtt.fx软件模拟上传数据至云平台，数据格式如下：
```
{
    "id": "123",
    "version": "1.0",
    "params": {
        "longitude": {
            "value": 103.986609
        },
        "latitude": {
            "value": 30.764317
        },
        "head": {
            "value": -30
        },
        "body": {
            "value": 40
        },
        "body_y": {
            "value": 0
        },
        "body_z": {
            "value": 0
        },
        "leftback0": {
            "value": 58
        },
        "leftback0_z": {
            "value": 0
        },
        "leftback1": {
            "value":60
        },
        "rightback0": {
            "value": 52
        },
        "rightback0_z": {
            "value": 0
        },
        "rightback1": {
            "value": 60
        },
        "leftforward0": {
            "value": 81
        },
        "leftforward0_z": {
            "value": 0
        },
        "leftforward1": {
            "value": -30
        },
        "rightforward0": {
            "value": 83
        },
        "rightforward0_z": {
            "value": 0
        },
        "rightforward1": {
            "value": -30
        }
    }
}
```
## 在嵌入式程序中，将上述数据转换为单片机语言如下：
```
{extern int32_t head,body,leftback0,leftback1,leftforward0,leftforward1,rightback0,rightback1,rightforward0,rightforward1;
extern int32_t body_y,body_z,leftback0_z,leftforward0_z,rightback0_z,rightforward0_z;
extern float jingdu,weidu;
unsigned char OneNet_FillBuf(char *buf)
{
	
	char text[48];
	
	memset(text, 0, sizeof(text));
	
	strcpy(buf, "{\"id\":\"123\",\"params\":{");
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"body\":{\"value\":%d},", body);
	strcat(buf, text);
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"body_y\":{\"value\":%d},", body_y);
	strcat(buf, text);
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"body_z\":{\"value\":%d},", body_z);
	strcat(buf, text);
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"leftback0\":{\"value\":%d},", leftback0);
	strcat(buf, text);
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"leftback0_z\":{\"value\":%d},", leftback0_z);
	strcat(buf, text);
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"rightback0\":{\"value\":%d},", rightback0);
	strcat(buf, text);	
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"rightback0_z\":{\"value\":%d},", rightback0_z);
	strcat(buf, text);

	memset(text, 0, sizeof(text));
	sprintf(text, "\"leftforward0\":{\"value\":%d},", leftforward0);
	strcat(buf, text);
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"leftforward0_z\":{\"value\":%d},", leftforward0_z);
	strcat(buf, text);

	memset(text, 0, sizeof(text));
	sprintf(text, "\"rightforward0\":{\"value\":%d},", rightforward0);
	strcat(buf, text);	
	
	memset(text, 0, sizeof(text));
	sprintf(text, "\"rightforward0_z\":{\"value\":%d}", rightforward0_z);
	strcat(buf, text);	
	
	
	strcat(buf, "}}");
	
	printf( "Fill buf ok!\r\n");
	
	return strlen(buf);

}
