## ҳ�� A
### import { DeviceEventEmitter } from 'react-native';

### componentDidMount() {
    
### //�յ�����

###     this.listener = DeviceEventEmitter.addListener('֪ͨ����', (message) => {

###     //�յ�����������������

###     console.log(message);
###   //����
    })
}


### componentWillUnmount() {

###     //�Ƴ�����

###     if (this.listener) {

###       this.listener.remove();

###     }

###   }
### 
## ҳ��B
### import { DeviceEventEmitter } from 'react-native';
### func() {
### //׼��ֵ��������
### const message = '����';
### DeviceEventEmitter.emit('֪ͨ����', message);
### }
